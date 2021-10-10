import React from 'react'
import "./Directory.css";

function DIrectory() {
    return (
    <div className='product'>
     <div className="product__info">
     <p>Electronics</p>
     <p className="product__price">
        <small>$</small>
        <strong>119.0</strong>    
      </p>
     <div className="product__rating">
           <p>⭐</p>
           <p>⭐</p>
     </div>
    </div>

    <img
   src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
   alt="electronics"
    />
    
    <button>Shop Now</button>
    </div>
    )
}

export default DIrectory
