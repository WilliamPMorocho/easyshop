import React from 'react';
import '../styles/Header.css';
import {Link, Route} from "react-router-dom";

export const Header = () => {
    return (
        <nav className="header">
            <ul className="header__list">
                <li className="header__item">
                    <Link to="/inicio" className="header__link">Inicio</Link>
                </li>
                <li className="header__item">
                    <Link to="/hombre" className="header__link">Hombre</Link>
                </li>
                <li className="header__item">
                    <Link to="/Mujer" className="header__link">Mujer</Link>
                </li>
                <li className="header__item">
                    <Link to="/contacto" className="header__link">Contactos</Link>
                </li>
            </ul>
            <form className="header__search-form">
                <input type="text" placeholder="Buscar productos..." className="header__search-input"/>
                <button type="submit" className="header__search-button">Buscar</button>
            </form>
        </nav>
    );
}
