import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import {useLocation} from 'react-router-dom'
import { getHeroByName } from '../../selectors/getHeroByName';

/* queryString es una librería de node que nos permite parsear los elementos abstractos del URL, organizandolos en un objeto con su respectivo valor, de este modo podemos acceder al query del URL search?q=react haciendo un queryString.parse() para obtener q = react y manipularlo */

/* Se pretende crear un query en la URL para que si al filtar un personaje, entramos en la card de ese personaje y al regresar a la anterior página, me va a conservar el query del URL, es decir, al volver vamos a tener la página anterior (form) tal como la dejamos. */

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    //useForm
    /* heroName se lo iguala a q para que me devuelva un string vacío y no un undefine */
    const [{heroName}, handleInputChange] = useForm({
        heroName: q
    });
    
    
    //useMemo
    //Con el useMemo evitamos que todo el tiempo que se escriba en el input un heroe, este cambie a cada rato y se muestren lo heroes antes de hacer submit
    const heroFiltered = useMemo(() => getHeroByName(q), [q] );
    
    //Me gusta que por ir presionando letras se vayan mostrando heroes que coincidan con ese nombre sin presionar submit
    //const heroFiltered = getHeroByName(heroName);


    //handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (heroName.trim().length <= 2){
            return
        }

        history.push(`?q=${heroName}`);
           
    }

    return (
        <div>
            <h1 className = "text-white">Search Hero</h1>
            <hr/>

            <div  className="row">
                <div className = "col-5">
                    <h4 className = "text-white">Search Form</h4>
                    <hr/>

                    <form onSubmit = {handleSubmit}>
                        <input
                            type = "text"
                            name = "heroName"
                            placeholder = "Find your hero"
                            className = "form-control"
                            value = {heroName}
                            autoComplete = "off"
                            onChange = {handleInputChange}
                        />

                        <button
                            type = "submit"
                            className = "btn mt-2 btn-block btn-dark"                                
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className = "col-7">
                    <h4 className = "text-white">Results</h4>
                    <hr/>
                    {
                        (q === '')
                        &&
                        <div className = "alert alert-info">
                            Search a Hero
                        </div>
                    }
                    {
                        (q !== '' && heroFiltered.length === 0)
                        &&
                        <div className = "alert alert-danger">
                            There's no hero with {q}
                        </div>
                    }

                    {
                        heroFiltered.map(hero => (
                            <HeroCard
                                key = {hero.id}
                                {...hero}
                            />
                        ))
                        
                    }
                </div>
            </div>
        </div>
    )
}
