import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Testing authReducer.js", () => {
    test('should return  the default state', () => {
        //Se simula un estado inicial en este caso se prueba con un logged en false el {} signifoca que va a tomar la acción por default.
        //authReducer devuelve un state
        const state = authReducer({logged:false},{});
        expect(state).toEqual({logged:false});
    });

    test('should authenticate  and put the user name', () => {
        const action = {
            type: types.login,
            payload: {name:'Bryan'}
        }

        const state = authReducer({logged:false}, action);
        expect(state).toEqual({
            logged: true,
            name: 'Bryan'
        })
    });

    test('should erase user name and logged in false ', () => {
        const action = {
            type: types.logout
        }

        const state = authReducer({logged:true}, action);
        expect(state).toEqual({
            logged: false,
        })
    });
    
    
    
})