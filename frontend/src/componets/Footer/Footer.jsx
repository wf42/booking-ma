import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo2} alt="" />
                <p>almakarem is the best</p>
                <div className="footer-social-icons">
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.whatsapp_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>pages</h2>
                <ul>
                    <li>Home</li>
                    <li>About as</li>
                    <li>location</li>
                </ul>
            
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+968 9999999</li>
                    <li>test@gmail.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
      
    </div>
  )
}

export default Footer
