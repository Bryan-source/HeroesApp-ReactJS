import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

/* Le permite pasar un directorio para buscar, una bandera que indica si también se deben buscar subdirectorios y una expresión regular para comparar archivos. */
const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({history}) => {

    //Extrae el argumento del URL en este caso el argumento del URL es el heroId que hace referencia desde: /hero/:heroId  es decir desde: http://localhost:3000/hero/dc-batman
    const {heroId} = useParams(); 

    //Este useMemo memoriza el id obtenido para no volverlo a llamar o a cargar si manipulamos al mismo dentro de la página, solamente si heroId cambia se recargaría la info y memorizaría el otro heroId
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    /* Este condicional evalua que el argumento del URL no sea undefined poerque si lo es nos manda error en este caso lo evalúa y si es undefined redirecciona a la página principal */
    if (!hero)
    {
        return <Redirect to = '/'/>;
    }

    const handleReturn = () => {
        /* if (publisher === 'DC Comics'){
            history.push('/dc');
        }
        if (publisher === 'Marvel Comics'){
            history.push('/marvel');
        } */

        //Forma sencilla
        //Esta condición es necesaria debido a que si alguien comparte este HomeScreen a alguna persona esta la abre en su navegador pero no tiene historial de navegación dentro de la app por lo que si presiona el botón de Back lo va a sacar de la aplicación por es que si el tamaño del historial de navegación es <= a 2 al presionar back va a redirigir al usuario al homepage.
        if (history.length <=2)
        {
            history.push('/');
        }else{
            history.goBack();
        }
    }
    //Aquí se desestructuró los parámetros del objeto extraído desde el getHeroById
    const {
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters
    } = hero

    return (
        <div className = "row mt-5">
            <div className = "col-4">
                <img
                    /* src = {`../assets/heroes/${heroId}.jpg`} */
                    src = {heroImages(`./${heroId}.jpg`).default}
                    alt = { superhero }
                    className = "img-thumbnail animate__animated animate__zoomInLeft"
                />
            </div>

            <div className = "col-8">
                <div className = "card text-white bg-dark animate__animated animate__fadeIn">
                    <h3 className= "card-header">{superhero}</h3>
    
                    <div className="card-body">
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item text-white bg-dark"><b>Alter ego: </b>{alter_ego}</li>
                            <li className="list-group-item text-white bg-dark"><b>Publisher: </b>{publisher}</li>
                            <li className="list-group-item text-white bg-dark"><b>First appearance: </b>{first_appearance}</li>
                        </ul>
                        <div className = "card-body text-white bg-secondary mt-3" >
                            <h5 className="card-title">Character</h5>
                            <p className="card-text">{characters}</p>
                            <button className="btn btn-primary" onClick = {handleReturn}>Back</button >
                        </div>
                    </div>
                </div>
                
        
            </div>
        </div>
    )
}
