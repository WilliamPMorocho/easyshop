import React from "react";
import '../styles/NotFound.css'
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__content">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__message">Página no encontrada</p>
                <Link to={'/'}>
                    Volver a la página principal
                </Link>
            </div>
        </div>
    );
}