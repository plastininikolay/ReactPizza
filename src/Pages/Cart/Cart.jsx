import React from 'react';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import FullCart from '../../components/FullCart/FullCart';
import {useSelector} from 'react-redux';
function Cart(){
    const pizzas = useSelector((state)=>state.cart.items);
    const totalPrice = useSelector((state)=>state.cart.totalPrice);
    const count = useSelector((state)=>state.cart.count);

    return (
        
        <>
        {pizzas.length === 0 ?
            <EmptyCart/> :
            <FullCart pizzas = {pizzas} totalPrice={totalPrice} count={count} />
        }
        
        </>
    )
   
}

export default Cart;