import React, { useState } from 'react'
import { useShip } from '../context/ShipContext'

const SearchBar = () => {
    const { setShipList } = useShip()
    const [inputValue, setInputValue] = useState('')
    const copyShiplist = JSON.parse(localStorage.getItem('ships'))

    const inputChangeHandler = (e) => { // her input girildiğinde değerin atamasını yapar
        setInputValue(e.currentTarget.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const filteredShips = copyShiplist.filter(item => item.name.toLowerCase().includes(inputValue) || item.model.toLowerCase().includes(inputValue))
        setShipList(filteredShips)
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