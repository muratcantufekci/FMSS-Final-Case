import React from 'react'
import { useShip } from '../context/ShipContext'
import Ship from './Ship'
import { getShips } from '../services/getShips'
import images from '../image.json'
import Loader from './Loader'

const Ships = () => {
    const { shipList, setShipList, shipsNextPage, setShipsNextPage, isLoading, setIsLoading, hasError } = useShip()

    const btnClickHandler = async () => {
        setIsLoading(true)
        try {
            // makes an api request for load more data
            const data = await getShips(shipsNextPage)
            // takes previous datas and merges with new ones
            setShipList([...shipList, ...data.results])
            // sets new page for load more button
            setShipsNextPage(data.next)
            setIsLoading(false)
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }
    }

    return (
        <>
            {
                hasError &&
                <div className='text-center'>
                    <h3 className='font-extrabold text-xl text-white'>No Data Found!</h3>
                </div>
            }
            <div className='px-6 grid gap-4 grid-cols-1 mb-14 md:px-16 md:grid-cols-2 lg:px-40 lg:grid-cols-3'>
                {shipList.length > 0 && shipList.map((ship, i) => (
                    <Ship key={i} name={ship.name} model={ship.model} rating={ship.hyperdrive_rating} img={images.filter(item => item.name === ship.name)[0].img} url={ship.url} id={i} />
                ))}
            </div>
            {
                (shipList.length > 0 && shipsNextPage) &&
                <div className='flex justify-center'>
                    <button className='bg-white rounded-lg p-2' onClick={btnClickHandler}>
                        Load More
                    </button>
                </div>
            }
            {
                isLoading && <Loader />
            }
        </>
    )
}

export default Ships