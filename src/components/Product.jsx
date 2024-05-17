import React from 'react';
import '../styles/Product.css';
import Hero from "./Hero/Hero";
import Popular from "./Popular/Popular";
import Offers from "./Offers/Offers";
import NewCollections from "./NewCollections/NewCollections";

const Product = () => {
    //const {fetchResponse} = useFetch("https://fakestoreapi.com/products");
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
