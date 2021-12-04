import React from 'react'
import Book from './Book'

export default function RecBooks({books, id}) {
    return (
        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="book__selected--title--top">
                        Recommended Books
                    </h2>
                </div>
                <div className="books">
                {
                    books
                    .filter(book => book.rating === 5 && +book.id !== +id)
                    .slice(0, 4)
                    .map(book => <Book book={book} key={book.id} />)
                }
                </div>
            </div>
        </div>
    )
}
