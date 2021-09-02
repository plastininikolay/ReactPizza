import React from "react";
import logo from '../../img/pizza-logo.svg';
import {Link} from "react-router-dom";
import Cart from "../Cart/Cart";
function Header({cartTotalPrice, cartCount}) {
    return(
        <div className="header">
            <div className="container">
                <Link to='/'>
                <div className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo"/>
                    <div>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                </Link>
                <Cart cartTotalPrice={cartTotalPrice} cartCount={cartCount}/>
            </div>
        </div>
    )
}
export default Header