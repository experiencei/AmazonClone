import React from 'react'
import { useStateValue } from '../../stateProvider';
import "./Product.css";

function Directory({id ,title , imageUrl ,price , rating}) {

    const [ state , dispatch] = useStateValue();
     const addToBasket = () => {
       dispatch({
         type : "ADD_TO_BASKET",
         item : {
           id , 
           title,
           imageUrl,
           price,
           rating
         },
       });
     }
    return ( 
    <div className='product'>
     <div className="product__info">
     <p>{title}</p>
     <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>    
      </p>
     <div className="product__rating">
     {Array(rating)
     .fill()
     .map((_, i) => ( 
       <p>⭐</p>
       ))}
       {Array(rating).fill().map((_, i) => ( '<p>⭐</p>' ))} 
     </div>
    </div>

    <img
   src={imageUrl}
   alt="electronics"
    />
    
    <button onClick={addToBasket}>Add to Basket</button>
    </div>
        
    )
}

export default Directory
