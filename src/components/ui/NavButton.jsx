import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavButton({closeMenu}) {
    return (
        <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                <FontAwesomeIcon icon="times" />
            </button>
            <ul className="menu__links">
                <li className="menu__list">
                    <Link to="/" className="menu__link">
                        Home
                    </Link>
                </li>
                <li className="menu__list">
                    <Link to="/" className="menu__link">
                        Books
                    </Link>
                </li>
                <li className="menu__list">
                    <Link to="/" className="menu__link">
                        Cart
                    </Link>
                </li>
            </ul>
        </div>
    )
}
