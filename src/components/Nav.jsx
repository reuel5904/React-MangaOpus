import React from 'react'
import LibraryLogo from '../assets/manga-opus.png'
import { Link } from 'react-router-dom';
import NavLinks from './ui/NavLinks';
import NavButton from './ui/NavButton';

export default function Nav({ numberOfItems }) {

    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open")
    }

    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={LibraryLogo} alt="" className="logo" />
                </Link>
                <NavLinks numberOfItems={numberOfItems} openMenu={openMenu} />
                <NavButton closeMenu={closeMenu} />
            </div>
        </nav>
    )
}

