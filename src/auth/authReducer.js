//Autentificar cuando haces login

import { types } from "../types/types";

export const authReducer = (state = [], action) => {
    switch (action.type) {
        case types.login:
            return {
                /* ...action.payload se puede mandar el nombre del usuario el email etc cuando se haga login. */
                ...action.payload,
                logged: true
            }
            
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}