import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../stateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import "./Payment.css";
import { CardElement , useStripe , useElements } from '@stripe/react-stripe-js';

function Payment() {
    const [ {basket , user} , dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    return (
        <div className="payment">
            <div className="payment__container">
            <h1>
              Checkout (
                  <Link to="/checkout">{basket?.length}items</Link>
              )
            </h1>
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
                        {basket.map( item => (<CheckoutProduct
                            key={item.id} 
                            id={item.id}
                            imageUrl={item.imageUrl}
                            price={item.price}
                            rating={item.rating}
                        />))}
                    </div>
                </div>
                <div className="payment__section">
                   <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form>
                            <CardElement/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
