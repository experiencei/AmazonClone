import React from 'react'
import { useStateValue } from '../../stateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import "./Payment.css";

function Payment() {
    const [ {basket , user} , dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <div className="payment__section">
                   <div className="payment__title">
                      <h3> Delivery Address</h3>
                   </div>
                   <div className="payment__address">
                      <p>{user?.email}</p>
                      <p>123 React lane</p>
                      <p>Los Angeles , CA</p>
                   </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map( ({ id , otherprops})=> (<CheckoutProduct
                            key={id} 
                            {...otherprops}
                        />))}
                    </div>
                </div>
                <div className="payment__section">

                </div>
            </div>
        </div>
    )
}

export default Payment
