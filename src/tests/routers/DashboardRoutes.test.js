import React from 'react';
import { mount } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router';

describe('Testing Dashboard.js', () => {

    const context = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Bryan'
        }
    }

    test('should show component correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value = {context}>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
            
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Bryan');
    });
    
})
