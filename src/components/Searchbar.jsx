import React, { useState } from 'react'
import { useShip } from '../context/ShipContext'

const SearchBar = () => {
    const { setSearchShipValue } = useShip()
    const [inputValue, setInputValue] = useState('')

    const inputChangeHandler = (e) => { // her input girildiğinde değerin atamasını yapar
        setInputValue(e.currentTarget.value)
    }

    const submitHandler = (e) => { // kullanıcı submit ettiğinde context üzerine kitap adını gönderir ve girilmiş değeri sıfırlar
        e.preventDefault()
        setSearchShipValue(inputValue)
        setInputValue('')
    }

    return (
        <div className="py-12 px-40">
            <form onSubmit={submitHandler} className='flex items-center gap-8'>
                <input type="text" className='p-4 w-full text-sm font-bold text-gray-900 bg-gray-50 rounded-lg border-gray-300' placeholder='Search for ships' value={inputValue} onChange={inputChangeHandler} />
                <button type='submit' className='p-4 bg-gray-50 rounded-lg font-bold'>Filter</button>
            </form>
            <div className="lightsaber">
                <input type="checkbox" id="on-off"/>
                <div className="blade"></div>
                <label className="hilt" htmlFor="on-off">
                </label>
            </div>
        </div>
    )
}

export default SearchBar