import React, {useContext} from 'react';
import '../styles/Header.css';
import icon from '../imagenes/cart_icon_dark.png'
import {Link, Route} from "react-router-dom";
import {ShopContext} from "../context/ShopContext";
import SearchComponent from "./SearchComponent";

export const Header = () => {
    const {getTotalCartItems} = useContext(ShopContext);
    return (
        <nav className="header">
            <ul className="header__list">
                <li className="header__item">
                    <Link to="/" className="header__link">Inicio</Link>
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
                <Link to='/carrito'><img src={icon} alt="" className='cart'/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                <input type="text" placeholder="Buscar productos..." className="header__search-input"/>
                <SearchComponent></SearchComponent>
                <button type="submit" className="header__search-button">Buscar</button>
            </form>
        </nav>
    );
}
