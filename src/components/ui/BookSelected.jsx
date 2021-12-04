import React from 'react'
import Ratings from './Ratings'
import Price from './Price'
import { Link } from 'react-router-dom'

export default function BookSelected({addBookToCart, bookExistsOnCart, book}) {
    return (
        <div className="book__selected">
            <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
            </figure>
            <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Ratings rating={book.rating} />
                <div className="book__selected--price">
                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                </div>
                <div className="book__summary">
                    <h3 className="book__summary--title">
                        Summary
                    </h3>
                    <p className="book__summary--para">
                        {book.description}
                    </p>
                </div>
                {
                bookExistsOnCart() ? (
                <Link to={`/cart`} className="book__link">
                    <button className="btn">Checkout</button>
                </Link>
                ) : (
                <button className="btn" onClick={() => addBookToCart(book)}>Add to Cart</button>
                )}
            </div>
        </div>
    )
}
