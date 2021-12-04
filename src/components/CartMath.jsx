import React from 'react'

export default function CartMath({cart, total}) {
    return (
        <div>
            {cart.length > 0 &&
                <div className="total">
                    <div className="total__item total__sub-total">
                        <span>Subtotal</span>
                        <span>${(total * 0.9).toFixed(2)}</span>
                    </div>
                    <div className="total__item total__tax">
                        <span>Tax</span>
                        <span>${(total * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="total__item total__price">
                        <span>Total</span>
                        <span>${total}</span>
                    </div>
                    <button className="btn btn__checkout no-cursor" onClick={() => alert(`Haven't done this yet :(`)}>
                        Proceed to Checkout
                    </button>
                </div>
            } 
        </div>
    )
}
