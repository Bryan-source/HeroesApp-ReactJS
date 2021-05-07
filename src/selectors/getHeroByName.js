import { heroes } from "../data/heroes"


export const getHeroByName = (name = '') => {
    if (name === ''){
        return [];
    } 

    name = name.toLocaleLowerCase();
    //Va a mandar al heroe que incluya el nombre en la búsqueda es decir si sólo busco verde entonces me va a aparecer linterna verde
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}
