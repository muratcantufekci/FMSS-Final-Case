import React, { useEffect, useState } from 'react'
import { getShips } from '../../services/getShips';
import { Link} from 'react-router-dom';
import images from '../../image.json'

const ShipDetail = () => {
    const url = localStorage.getItem('detail-url')
    const [data, setData] = useState([])
    const [img, setImg] = useState('')

    useEffect(() => {
        const fetchShips = async () => {
            try {
                const response = await getShips(url);
                console.log(response);
                setData(response)
                setImage(response.name)
            } catch (error) {
                console.error(error);
            }
        };
        fetchShips();
    }, [url]);

    const setImage = (shipName) => {
        const img = images.filter(item => item.name === shipName)[0].img
        setImg(img);
    }

  return (
    <div className='flex flex-col itemc-center gap-12 py-16 px-64'>
        {
            data.length > 0 && 
            <div className='group/item bg-white rounded-lg flex flex-col gap-3 items-center justify-between transition-all duration-1000 hover:translate-y-negative10 overflow-hidden'>
                <div className='w-full h-96 pb-5'>
                    <img src={img} alt={data.name} className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col gap-3 items-center p-5'>
                    <h5 className='font-extrabold text-xl'>{data.name}</h5>
                    <p className='font-semibold'>Model: <span className='font-normal'> {data.model}</span></p>
                    <p className='font-semibold'>Hyperdrive Rating: <span className='font-normal'> {data.hyperdrive_rating}</span></p>
                    <p className='font-semibold'>Passengers: <span className='font-normal'> {data.passengers}</span></p>
                    <p className='font-semibold'>Max Atmosphering Speed: <span className='font-normal'> {data.max_atmosphering_speed}</span></p>
                    <p className='font-semibold'>Manufacturer: <span className='font-normal'> {data.manufacturer}</span></p>
                    <p className='font-semibold'>Crew: <span className='font-normal'> {data.crew}</span></p>
                    <p className='font-semibold'>Cargo Capacity: <span className='font-normal'> {data.cargo_capacity}</span></p>
                </div>
                <div className='w-full h-8 bg-white rounded-b-lg group-hover/item:bg-gradient-to-t from-red-fire to-yellow-fire group-hover/item:transition-all'></div>
            </div>
        }
        <Link to={'/'} className='bg-white p-4 rounded-lg text-center font-semibold'>Go To Homepage</Link>
    </div>
  )
}

export default ShipDetail