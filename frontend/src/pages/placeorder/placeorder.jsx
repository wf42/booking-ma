import React, { useContext, useState } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext'

const placeorder = () => {
    const [quantity, setQuantity] = useState(1); // قيمة البداية تكون 1
    const { getTotalcartAmount } = useContext(StoreContext)

    return (
        <form className='Place-order'>
            <div className="place-order-left">
                <p className="title">Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="email" placeholder='Email' />

                {/* <div className="multi-fields">
                <input
                 type="number" 
                 min="1" max="8" 
                 placeholder='Number of people' />
            </div>*/}
                <input type="text" placeholder='phone number' />
            </div>
            <div className="place-order-right">
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
                    <div className="cart-promocode">
                        <div>
                            <p>if you have a promo code,Enter it here</p>
                            <div className="cart-promocode-input">
                                <input type="text" placeholder='PROMOCODE' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                    <button>PROCCED TO PAYMENT</button>
                </div>

            </div>


        </form>
    )
}

export default placeorder
