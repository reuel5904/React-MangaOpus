import React from 'react'
import CartBody from './ui/CartBody';
import CartEmpty from './ui/CartEmpty';
import EmptyCart from "../assets/empty_cart.svg"

export default function CartMain({cart, removeItem, changeQuantity}) {
    return (
        <div className="cart">
            <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
            </div>
            <CartBody cart={cart} removeItem={removeItem} changeQuantity={changeQuantity}/>
            <CartEmpty cart={cart} EmptyCart={EmptyCart}/>
        </div>
    )
}
