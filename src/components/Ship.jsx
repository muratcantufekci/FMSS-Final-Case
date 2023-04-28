import React from 'react'
import { Link } from 'react-router-dom'

// Every ship component that takes props and prints it
const Ship = ({ name, model, rating, img, url, id }) => {
    const clickHandler = () => {
        localStorage.setItem('detail-url', url) // sets detail page api url to localstorage
    }
    return (
        <Link to={`/ship/${id}`} className='group/item bg-white rounded-lg flex flex-col gap-3 items-center justify-between transition-all duration-1000 hover:translate-y-negative10 overflow-hidden' onClick={clickHandler}>
            <div className='w-full h-72 pb-5'>
                <img src={img} alt={name} className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col gap-3 items-center p-5'>
                <h5 className='font-extrabold text-xl'>{name}</h5>
                <p className='font-semibold text-center'>Model: {model}</p>
                <span> Hyperdrive Rating: {rating}</span>
            </div>
            <div className='w-full h-8 bg-white rounded-b-lg group-hover/item:bg-gradient-to-t from-red-fire to-yellow-fire group-hover/item:transition-all'></div>
        </Link>
    )
}

export default Ship