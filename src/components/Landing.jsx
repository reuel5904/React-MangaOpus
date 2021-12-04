import React from 'react'
import UndrawBooks from '../assets/undraw_books.svg'

export default function Landing() {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>The Biggest Manga Retailer</h1>
                        <h2>Fill your hearts content with <span className="purple">Manga Opus</span></h2>
                        <a href="#features">
                            <button className="btn">Browse Manga</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}
