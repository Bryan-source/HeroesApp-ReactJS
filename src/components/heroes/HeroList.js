import React, { useMemo } from 'react'
import { getHeroesByPublishers } from '../../selectors/getHeroesByPublishers'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    //Este useMemo memoriza el publisher obtenido para no volverlo a llamar o a cargar si manipulamos al mismo dentro de la página, solamente si publisher cambia se recargaría la info y memorizaría el otro publisher.
    //esto optimiza lapágina
    const heroes = useMemo(() => getHeroesByPublishers(publisher), [publisher]);

    return (
        <div className = "card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key = {hero.id}
                        {...hero} /* esta sintaxis obtiene todos las propiedades del objeto del hero */
                    />                   
                ))
            }
        </div>
    )
}
