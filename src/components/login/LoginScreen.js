import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useForm } from '../../hooks/useForm';

import { types } from '../../types/types';


export const LoginScreen = ({history}) => {

    /* localStorage */
    const lastPath = localStorage.getItem('lastPath') || '/';

    //useContext
    const {dispatch} = useContext(AuthContext);

    //useForm
    const [{userName}, handleInputChange] = useForm({
        userName: ''
    });

    const handleLogin = (e) => {
        
        e.preventDefault();
    
        if (userName.trim().length <= 2){
            return;
        }

        const loginUser = {
            name: userName
        }

        dispatch({
            type: types.login,
            payload: loginUser
        });

        /* PUSH: redirecciona a un URL que esté asociado con el router, es decir redirecciona de la página actual a otra página.  */
        //history.push('/');

        /* REPLACE: Reemplaza la página actual por el URL que se asigne, es decir si reemplazamos la página, al dar a la flecha atrás ya no va a volver a la que estábamos.  */
        history.replace(lastPath);
    }

    return (
        <div className = "container mt-5">
            <h1 className="text-white">Login</h1>
            <hr/>

            <form onSubmit = {handleLogin}>
                <div className="form-group">
                    <input
                        type="text" 
                        id = "exampleInputText1"
                        name = "userName" 
                        className="form-control" 
                        placeholder="Write your name"
                        value= {userName}
                        onChange = {handleInputChange}
                    />       
                </div>        

                <button className = "btn btn-primary" type="submit"> Login </button>
            </form>
            
        </div>
    )
}
