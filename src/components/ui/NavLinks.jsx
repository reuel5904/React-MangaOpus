import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinks({ openMenu, numberOfItems }) {
    return (
        <ul className="nav__links">
            <li className="nav__list">
                <Link to="/" className="nav__link">
                    Home
                </Link>
            </li>
            <li className="nav__list nav__link--primary">
                <Link to="/books" className="nav__link">
                    Books
                </Link>
            </li>
            <button className="btn__menu" onClick={openMenu}>
                <FontAwesomeIcon icon="bars" />
            </button>
            <li className="nav__icon">
                <Link to="/cart" className="nav__link">
                    <FontAwesomeIcon icon="shopping-cart" />
                </Link>
                {
                    numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>
                }
            </li>
        </ul>
    )
}
