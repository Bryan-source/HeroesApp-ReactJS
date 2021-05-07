import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';


describe('Testing PrivateRoute,js', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }
    Storage.prototype.setItem = jest.fn();

    test('If is authenticated should show component and save localStorage', () => {
       const wrapper = mount(
           <MemoryRouter>
               <PrivateRoute
                    isAuthenticated = {true}
                    component = {() => <span>Listo!!</span>}
                    {...props}
               />
           </MemoryRouter>
       );
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });

    test('If is not authenticated shouldnt show the component', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                     isAuthenticated = {false}
                     component = {() => <span>Listo!!</span>}
                     {...props}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(false);
         
    });
    
    
})
