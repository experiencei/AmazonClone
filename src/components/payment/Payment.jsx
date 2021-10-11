import React , { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../stateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import "./Payment.css";
import { CardElement , useStripe , useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer/reducer';
function Payment() {
    const [ {basket , user} , dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [processing , setProcessing] = useState("");
    const [succeeded , setSucceeded] = useState(false);
    const [error , setError] = useState(null);
    const [disabled , setDisabled] = useState(true);
    const [clientSecret , setclientSecret] = useState(true);

     useEffect(() => {
         const getClientSecret = async () => {
                const response = await axios({
                     method :"post",
                     url : `/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                setclientSecret(response.data.clientSecret)
         }

         getClientSecret();
     }, [basket])

    const handleSubmiit  = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method : {
                card: elements.getElement(CardElement)
            }
        })
    }

    const handleChange  = event => {
        setError(event.empty);
        setDisabled( event.error ? event.error.message : '');
    }
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
                        <form onSubmit={handleSubmiit}>
                            <CardElement  onChange={handleChange}/>
                            <div className="payment__priceContainer">
                               <CurrencyFormat
                            renderText={(value) => (
                              <h3>Order Total: {value}</h3>
                              )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                               />
                               <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                               </button>
                            </div>
                            {
                                error && <div>{error}</div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
