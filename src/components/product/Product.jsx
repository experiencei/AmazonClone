import React from 'react'
import "./Product.css";

function Product({ title , imageUrl ,price , rating}) {
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
<<<<<<< HEAD
       <p>⭐</p>
       ))}
       {Array(rating).fill().map((_, i) => ( '<p>⭐</p>' ))} 
=======
       <p>⭐</p>))
       } 
>>>>>>> amazon1
     </div>
    </div>

    <img
   src={imageUrl}
   alt="electronics"
    />
    
    <button>Shop Now</button>
    </div>
    )
}

export default Product;