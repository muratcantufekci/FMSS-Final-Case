import React from 'react'

const Ship = ({ name, model, rating, img, url }) => {
    return (
        <a href={url} className='group/item bg-white rounded-lg flex flex-col gap-3 items-center transition-all duration-1000 hover:translate-y-negative10'>
            <div className='w-full h-28 p-5'>
                <img src={img} alt={name} className='w-full h-full object-contain' />
            </div>
            <div className='flex flex-col gap-3 items-center p-5'>
                <h5 className='font-extrabold text-xl'>{name}</h5>
                <p className='font-semibold'>Model: {model}</p>
                <span> Hyperdrive Rating: {rating}</span>
            </div>
            <div className='w-full h-8 bg-white rounded-b-lg group-hover/item:bg-gradient-to-t from-red-fire to-yellow-fire group-hover/item:transition-all'></div>
        </a>
    )
}

export default Ship