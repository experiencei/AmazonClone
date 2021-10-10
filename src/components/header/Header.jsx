import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search"
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
    return (
        <div  className="header">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="logo"/>
            <div className="header__search">
               <input 
               className="header__searchInput"
                   type="search"
               />
               <SearchIcon  className="search__icon" />
            </div>
            <div  className="header__nav">
              <div className="header__option">
                <span className="option__one"> Hello Guest</span>
                <span className="option__two">SignIn</span>
              </div>

              <div className="header__option">
                <span className="option__one"> returns</span>
                <span className="option__two">& Orders </span>
              </div>

              <div className="header__option">
                <span className="option__one">Your</span>
                <span className="option__two">Prime</span>
              </div>

              <div className="header__basket">
                <ShoppingBasket  className="" />
                <span className="option__two header__basketCount">0</span>
            </div>
            </div>
        </div>
    )
}

export default Header
