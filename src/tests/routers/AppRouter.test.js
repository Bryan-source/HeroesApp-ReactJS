import React from 'react';
import {mount} from 'enzyme'
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Testing AppRouter.js', () => {

    const context = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    test('should show login if it is not authenticated', () => {
        const wrapper = mount(
            <AuthContext.Provider value = {context}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should show marvel if it is authenticated', () => {
        const context = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                user: 'Bryan'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value = {context}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper.find('.navbar').exists()).toBe(true)

    });
    
})
