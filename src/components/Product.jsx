import React from 'react';
import '../styles/Product.css';
import Hero from "./Hero/Hero";
import Popular from "./Popular/Popular";
import Offers from "./Offers/Offers";
import NewCollections from "./NewCollections/NewCollections";

const Product = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
        </div>
    );
}

export default Product;
