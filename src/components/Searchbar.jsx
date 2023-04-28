import React, { useState } from 'react'
import { useShip } from '../context/ShipContext'
import { getShips } from '../services/getShips'

const SearchBar = () => {
    const { setShipList, setIsLoading, setHasError, setShipsNextPage } = useShip()
    const [inputValue, setInputValue] = useState('')

    // sets input on every change
    const inputChangeHandler = (e) => {
        setInputValue(e.currentTarget.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response = await getShips(`https://swapi.dev/api/starships/?search=${inputValue}`); // makes a request to the api for the search with the user input value
            setShipList(response.results)
            setIsLoading(false)

            // sets next page visibilty to avoid load more after search
            if(inputValue !== '') {
                setShipsNextPage(null)
            } else {
                setShipsNextPage(response.next)
            }

            // sets error for 0 mached items
            if (response.count <= 0) {
                setHasError(true)
            } else {
                setHasError(false)
            }

            setInputValue('') // clear input
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="py-12 px-6 md:px-16  lg:px-40">
            <form onSubmit={submitHandler} className='flex items-center gap-8'>
                <input type="text" className='p-4 w-full text-sm font-bold text-gray-900 bg-gray-50 rounded-lg border-gray-300' placeholder='Please enter ship name or model...(Submit empty for reset filter)' value={inputValue} onChange={inputChangeHandler} />
                <button type='submit' className='p-4 bg-gray-50 rounded-lg font-bold'>Filter</button>
            </form>
            <div className="lightsaber">
                <input type="checkbox" id="on-off" />
                <div className="blade"></div>
                <label className="hilt" htmlFor="on-off">
                </label>
            </div>
        </div>
    )
}

export default SearchBar