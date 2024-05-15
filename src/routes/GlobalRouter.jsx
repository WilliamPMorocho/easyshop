import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Inicio} from '../views/Inicio'
import {Hombre} from '../views/Hombre'
import {Carrito} from '../views/Carrito'
import {Mujer} from '../views/Mujer'
import {Landing} from '../views/Landing'
import {Header} from "../components/Header";
import {NotFound} from "../views/NotFound";
import {Contacto} from "../views/Contacto";


function GlobalRouter() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/inicio" element={<Layout><Inicio/></Layout>} />
                <Route path="/hombre" element={<Layout><Hombre /></Layout>} />
                <Route path="/mujer" element={<Layout><Mujer /></Layout>} />
                <Route path="/contacto" element={<Layout><Contacto/></Layout>} />
                <Route path="/carrito" element={<Layout><Carrito/></Layout>} />
                <Route path="/landing" element={<Landing />}/>
                <Route path="*" element={<Layout><NotFound></NotFound></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        {children}
    </>
);

export default GlobalRouter;