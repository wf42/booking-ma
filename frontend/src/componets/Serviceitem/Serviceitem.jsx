import React, { useContext } from 'react';
import './Serviceitem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Serviceitem = ({ id, name, price, description, image }) => {
    const { cartItems, addTocart, removeFromCart,url } = useContext(StoreContext);
    const navigate = useNavigate();
    return (
        <div className='service-item'>
            <div className="service-item-img-container">
                <img className="service-item-image" src={url+"/images/"+image} alt="" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addTocart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='service-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p> person {cartItems[id]}</p>
                        <img onClick={() => addTocart(id)} src={assets.add_icon_green} alt="" />

                    </div>


                }
            </div>
            <div className="service-item-info">
                {/* <div className='service-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>*/}
                <p className="service-item-desc">{description}</p>
                <p className="service-item-price">{price} OR</p>
                <p className='service-item-note'> يجب ان تحدد عدد الاشخاص قبل الضغط على الزر</p>
                <button
                    onClick={() => navigate('/order')}
                    disabled={!cartItems[id] || cartItems[id] === 0}  // اجعل الزر غير نشط إذا كانت الكمية صفر
                    className={!cartItems[id] || cartItems[id] === 0 ? 'disabled': ''}
                >
                    BOOK
                </button>



            </div>

        </div>
    )
}

export default Serviceitem
