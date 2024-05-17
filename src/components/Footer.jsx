import React from 'react';
import '../styles/Footer.css';
import logo from '../imagenes/logo.jpg'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img className={'footer__img'} src={logo} alt={''}/>
            </div>
            <p className="footer__text">© 2024 Tu Tienda Online EasyShop. Todos los derechos reservados.</p>
        </footer>
    );
}
