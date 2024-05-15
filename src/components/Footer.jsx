// Footer.js
import React from 'react';
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                Logo de la Tienda
            </div>
            <nav className="footer__nav">
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="/nosotros" className="footer__link">Nosotros</a>
                    </li>
                    <li className="footer__item">
                        <a href="/contacto" className="footer__link">Contacto</a>
                    </li>
                    <li className="footer__item">
                        <a href="/politicas" className="footer__link">Políticas de Privacidad</a>
                    </li>
                    <li className="footer__item">
                        <a href="/terminos" className="footer__link">Términos y Condiciones</a>
                    </li>
                </ul>
            </nav>
            <div className="footer__social">
                <a href="#" className="footer__social-link">Facebook</a>
                <a href="#" className="footer__social-link">Twitter</a>
                <a href="#" className="footer__social-link">Instagram</a>
            </div>
        </footer>
    );
}
