import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

//La diferencia entre con el AppRouter es que este no tiene router solamente tiene las rutas y el navbar
export const DashboardRoutes = () => {
    return (
        <>
        {/* En este punto se observa que el Navbar no se encuentra en una ruta es decir dentro de un (Route) por lo tanto no hereda las props que el route otorga a los elementos que si están dentro de el.*/}
            <Navbar/>

            <div className = 'container mt-2'>
                <Switch>
                    <Route exact path="/marvel" component = {MarvelScreen}/>                    
                    <Route exact path="/hero/:heroId" component = {HeroScreen}/>
                    <Route exact path="/dc" component = {DcScreen}/>
                    <Route exact path="/search" component = {SearchScreen}/>

                    <Redirect to = "/marvel"/>                                        
                </Switch>
            </div>
        </>
    )
}
