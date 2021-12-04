import React from 'react'
import { Link } from 'react-router-dom';

export default function CartEmpty({cart, EmptyCart}) {
    return (
        <div>
            { cart.length === 0 &&
                <div className="cart__empty">
                    <img src={EmptyCart} alt="" className="cart__empty--img" />
                    <h2>You don't have any manga in your cart! <br /> Add some manga to get started.</h2>
                    <Link to="/books">
                        <button className="btn">Browse Books</button>
                    </Link>
                </div>
            }
        </div>
    )
}
