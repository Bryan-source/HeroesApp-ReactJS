import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1 className = "text-white">Marvel</h1>
            <HeroList publisher = {'Marvel Comics'}/>
        </div>
    )
}
