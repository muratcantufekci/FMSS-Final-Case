import React from 'react'
import { useShip } from '../context/ShipContext'
import Ship from './Ship'
import ship1 from '../images/ship1.png'
import ship2 from '../images/ship2.png'
import ship3 from '../images/ship3.png'
import ship4 from '../images/ship4.png'
import ship5 from '../images/ship5.png'
import ship6 from '../images/ship6.png'
import ship7 from '../images/ship7.png'
import ship8 from '../images/ship8.png'
import ship9 from '../images/ship9.png'
import ship10 from '../images/ship9.png'

const DUMMY_SHIPS = [
    {
        img: ship1
    },
    {
        img: ship2
    },
    {
        img: ship3
    },
    {
        img: ship4
    },
    {
        img: ship5
    },
    {
        img: ship6
    },
    {
        img: ship7
    },
    {
        img: ship8
    },
    {
        img: ship9
    },
    {
        img: ship10
    },
]

const Ships = () => {
    const { shipList } = useShip()
    const filteredShips = shipList.filter(item => item.name.includes('') || item.model.includes(''))
  return (
    <>
        <div className='px-40 grid gap-4 grid-cols-3 mb-14'>
            {filteredShips.map((ship,i) => (
                <Ship key={i} name={ship.name} model={ship.model} rating={ship.hyperdrive_rating} img={DUMMY_SHIPS[i].img} url={ship.url}/>
            ))}
        </div>
        {
            filteredShips.length > 0 &&
            <div className='flex justify-center'>
                <button className='bg-white rounded-lg p-2'>Load More</button>
            </div>
        }
    </>
  )
}

export default Ships