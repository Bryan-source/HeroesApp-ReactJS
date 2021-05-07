import { heroes } from "../data/heroes";


export const getHeroesByPublishers = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    //Validación para que el publisher esté bien escrito
    if (!validPublisher.includes(publisher))
    {   
        throw new Error(`Publisher" ${publisher} " es incorrecto`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}
