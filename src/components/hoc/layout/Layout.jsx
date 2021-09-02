import React from 'react';
import Header from '../../Header/Header';
import {useSelector} from 'react-redux';
function Layout(props) {
    const cartTotalPrice = useSelector((state)=>state.cart.totalPrice)
    const cartCount = useSelector((state)=>state.cart.count)
    return(
        <div className="wrapper">
            <Header cartTotalPrice={cartTotalPrice} cartCount={cartCount}/>
            <div className="content">
                <div className="container">
                    {props.children}
                </div>
            </div>
            
        </div>
    )
}
export default Layout;