import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Inicio} from '../views/Inicio'
import {Hombre} from '../views/Hombre'
import {Carrito} from '../views/Carrito'
import {Mujer} from '../views/Mujer'
import {Header} from "../components/Header";
import {NotFound} from "../views/NotFound";
import {Contacto} from "../views/Contacto";
import ProductoDetalle from "../views/ProductoDetalle";
import men_banner from '../imagenes/banner_mens.png'
import women_banner from '../imagenes/banner_women.png'


function GlobalRouter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Layout><Inicio/></Layout>} />
                <Route path="/hombre" element={<Layout><Hombre banner={men_banner} category="men" /></Layout>} />
                <Route path="/mujer" element={<Layout><Mujer banner={women_banner} category="women" /></Layout>} />
                <Route path="/contacto" element={<Layout><Contacto/></Layout>} />
                <Route path="/carrito" element={<Layout><Carrito/></Layout>} />
                <Route path="/productodetalle/:productId" element={<Layout><ProductoDetalle/></Layout>} />
                <Route path="*" element={<Layout><NotFound></NotFound></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header></Header>
        {children}
    </>
);

export default GlobalRouter;