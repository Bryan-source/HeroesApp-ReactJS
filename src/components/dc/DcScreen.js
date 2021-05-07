import React from 'react'
import { HeroList } from '../heroes/HeroList'

/* No es necesario meterlo a testeo porque sólo se haría un snapshot */
export const DcScreen = () => {
    return (
        <div>
            <h1 className = "text-white">DC</h1>
            <HeroList publisher = {'DC Comics'}/>
        </div>
    )
}
