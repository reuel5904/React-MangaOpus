import React from 'react'
import CartMain from '../components/CartMain';
import CartMath from '../components/CartMath';

export default function Cart({ cart, changeQuantity, removeItem }) {
    const total = () => {
        let price = 0;
        cart.forEach((item) => {
            price += +((item.salePrice || item.originalPrice) * item.quantity)
        })
        return price.toFixed(2);
    }


    return (
        <div id="books__body">
            <div id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <CartMain cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>
                        <CartMath cart={cart} total={total()}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
