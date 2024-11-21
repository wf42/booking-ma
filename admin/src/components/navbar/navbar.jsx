import React from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <h1>Almakarem SAAS</h1>
        <img className='profile' src={assets.profile_image} alt="" />
      
    </div>
  )
}

export default Navbar
