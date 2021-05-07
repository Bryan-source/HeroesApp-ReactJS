import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'
import './style.css';
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const HeroesApp = () => {

    //Este useReducer ya está creado para toda la app en general, en otros desarrollos se crea el useState para pasar estados, etc
    //En user se guarda todo lo que recibe el dispatch en este caso se guardó el name del form del loginScreen.
    const [user, dispatch] = useReducer(authReducer, {}, init);

    //useEffect Local Storage
    useEffect(() => {

        //El localStorage sólo guarda strings, no objetos para eso se utiliza JSON.stringify
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value = {{user, dispatch}}>
            <AppRouter/>
        </AuthContext.Provider>       
    )
}
