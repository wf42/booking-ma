import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  const { getTotalcartAmount, token, setToken } = useContext(StoreContext)
  const logout = ()=> {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

  }



  return (
    <div className='Navbar'>
      <Link to={'/'}> <h1>Almakarem</h1> </Link>
      {/*<Link to={'/'}><img src={assets.logo} alt="" className='logo'
        height="50"
        width="70" /></Link>*/}
      <ul className="navbar-menu">
        <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore' onClick={() => setMenu("beach trips")} className={menu === "beach trips" ? "active" : ""}>our service</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
        <a href='/add' onClick={() => setMenu("admin")} className={menu === "admin" ? "active" : ""}>admin</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalcartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li><img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>

            </ul>

          </div>}

      </div>

    </div>
  )
}

export default Navbar
