import React from 'react';
import { mount } from "enzyme";
import '@testing-library/jest-dom'
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter, Router } from 'react-router';
import { Navbar } from '../../components/ui/Navbar';
import { types } from '../../types/types';

describe('Testing Dashboard.js', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        replace: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const context = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Bryan'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value = {context}>
            <MemoryRouter>
                <Router history = {historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
        
    );

    /* Al usar Mock limpiarlo con afterEach
    Siempre es bueno que al hacer algún tipo de mock entonces limpiarlo */
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should show component correctly', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Bryan');
    });

    test('should call logout and history', () => {
        wrapper.find('button').prop('onClick')();

        expect(context.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    })
    
    
})