import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from '../views/Home'
import {OfertasDia} from '../views/OfertasDia'
import {Comprar} from '../views/Comprar'
import {ServicioAlCliente} from '../views/ServicioAlCliente'
import {Landing} from '../views/Landing'


function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<Landing />}/>
                <Route path="/ofertasdia" element={<Layout><OfertasDia /></Layout>} />
                <Route path="/comprar" element={<Layout><Comprar /></Layout>} />
                <Route path="/servicioalcliente" element={<Layout><ServicioAlCliente /></Layout>} />
                <Route path="*" element={<Layout><Home></Home></Layout>} />
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