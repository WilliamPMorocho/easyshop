import React from 'react';
import '../styles/Header.css';

export const Header = () => {
    return (
        <nav className="header">
            <ul className="header__list">
                <li className="header__item">
                    <a href="/" className="header__link">Inicio</a>
                </li>
                <li className="header__item">
                    <a href="/productos" className="header__link">Productos</a>
                </li>
                <li className="header__item">
                    <a href="/ofertas" className="header__link">Ofertas</a>
                </li>
                <li className="header__item">
                    <a href="/contacto" className="header__link">Contacto</a>
                </li>
                <li className="header__item">
                    <a href="/carrito" className="header__link">Carrito</a>
                </li>
                <li className="header__item">
                    <a href="/perfil" className="header__link">Perfil</a>
                </li>
            </ul>
            <form className="header__search-form">
                <input type="text" placeholder="Buscar productos..." className="header__search-input"/>
                <button type="submit" className="header__search-button">Buscar</button>
            </form>
        </nav>
    );
}
