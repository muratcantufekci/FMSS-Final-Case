import React from 'react'
import { useShip } from '../context/ShipContext'
import Ship from './Ship'
import { getShips } from '../services/getShips'
import images from '../image.json'

const Ships = () => {
    const { shipList, setShipList, shipsNextPage, setShipsNextPage } = useShip()
    const filteredShips = shipList.filter(item => item.name.includes('') || item.model.includes(''))

    const btnClickHandler = async () => {
        const data = await getShips(shipsNextPage)
        const shipsCopy = JSON.parse(localStorage.getItem('ships'))
        localStorage.setItem('ships',JSON.stringify([...shipsCopy, ...data.results]))
        setShipList(JSON.parse(localStorage.getItem('ships')))
        setShipsNextPage(data.next)
    }
    
  return (
    <>
        <div className='px-40 grid gap-4 grid-cols-3 mb-14'>
            {filteredShips.map((ship,i) => (
                <Ship key={i} name={ship.name} model={ship.model} rating={ship.hyperdrive_rating} img={images.filter(item => item.name === ship.name)[0].img} url={ship.url} id={i}/>
            ))}
        </div>
        {
            (filteredShips.length > 0 && shipsNextPage) &&
            <div className='flex justify-center'>
                <button className='bg-white rounded-lg p-2' onClick={btnClickHandler}>Load More</button>
            </div>
        }
    </>
  )
}

export default Ships