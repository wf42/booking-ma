import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const cart = () => {
    const { cartItems, service_list, removeFromCart , getTotalcartAmount , url} =  useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {service_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div><div className="cart-items-title cart-items-item">
                                <img src={url+"/images/"+item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.price} OM</p>
                                <p>{cartItems[item._id]}</p>
                                <p>{item.price * cartItems[item._id]} OM</p>
                                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                            </div>
                                <hr /></div>


                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalcartAmount()} OM</p>

                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>taxes</p>
                            <p>{0}</p>

                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>{getTotalcartAmount()} OM</b>

                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>PROCCED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>if you have a promo code,Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='PROMOCODE' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default cart
