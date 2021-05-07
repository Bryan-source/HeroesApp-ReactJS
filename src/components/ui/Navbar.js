import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const {user:{name}, dispatch} = useContext(AuthContext);

    const history = useHistory();
    const handleLogout = () => {
        
        //cualquier usuario que haya se borra con el logout
        dispatch({
            type: types.logout
        });

        /* Para navegar al login se pdría usar el history.replace asignando como prop del Navbar {history} 
        pero esto no va a funcionar debido a que en el DashboardRoutes este componente no está definido dentro 
        de un Route por lo tanto no heredó las props del history entonces hay que crear el hook useHistory para que funcione   */

        history.replace('/login');
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Marvel DC
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className = 'nav-item nav-link text-info mr-2'>
                        {name}
                    </span>

                    <button 
                        className="nav-item nav-link btn btn-outline-info"
                        onClick = {handleLogout}                         
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}