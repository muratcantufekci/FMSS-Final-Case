import React from 'react'
import logo from '../images/starwars-logo.png'

const Header = () => {
  return (
    <div className='flex items-center justify-center'>
        <img src={logo} alt="starwars logo" className='w-52 mt-3'/>
    </div>
  )
}

export default Header