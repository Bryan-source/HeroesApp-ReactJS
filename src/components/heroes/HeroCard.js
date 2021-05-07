import React from 'react';
import {Link} from 'react-router-dom';

const heroImages = require.context('../../assets/heroes', true);
/* Para testeo si es necesario probar más que todo la sección del Link  */
export const HeroCard = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card ms-3" style={{maxWidth: 540}}>
            <div className="row no-gutters text-white bg-dark">
                <div className="col-md-4">
                    <img /* src = {`./assets/heroes/${id}.jpg`} */  src = {heroImages(`./${id}.jpg`).default} className="card-img" alt={superhero}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className = "card-title">{superhero}</h5>
                        <p className = "card-text">{alter_ego}</p>
                        {
                            /* Se hace este condicional debido a que hay heroes que tanto su alter_ego como characters son completamente iguales por lo tanto si pasa esto entonces no debería mostrarse dos veces, sólo se mostraría alter_ego pero si este es diferente a character entonces se muestra la sección de characters */
                            (alter_ego !== characters) 
                            && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to ={ `./hero/${id}`}>
                            More...
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
