import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BookSelected from '../components/ui/BookSelected'
import RecBooks from '../components/ui/RecBooks'

export default function BookInfo({ books, addToCart, cart }) {
    const { id } = useParams()
    const book = books.find(book => +book.id === +id);

    function addBookToCart(book) {
        addToCart(book)
    }

    function bookExistsOnCart() {
        return cart.find(book => book.id === +id)
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <BookSelected books={books} addBookToCart={addBookToCart} bookExistsOnCart={bookExistsOnCart} book={book} />
                    </div>
                </div>
                <RecBooks books={books} id={id}/>
            </main>
        </div>
    )
}
