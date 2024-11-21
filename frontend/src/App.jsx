import React, { useState } from 'react'
import Navbar from './componets/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/cart'
import Placeorder from './pages/placeorder/placeorder'
import Home from './pages/home/home'
import Footer from './componets/Footer/Footer'
import LoginPopup from './componets/Loginpopup/LoginPopup'

const App = () => {
  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
