import React, {useContext} from 'react';
import '../styles/Product.css';
import ImagenGallery from "./ImagenGallery";
import {ShopContext} from "../context/ShopContext";
import all_product from "../service/all_product";
import Hero from "./Hero/Hero";
import Popular from "./Popular/Popular";
import Offers from "./Offers/Offers";
import NewCollections from "./NewCollections/NewCollections";

const Product = () => {
    //const {fetchResponse} = useFetch("https://fakestoreapi.com/products");
    const {fetchResponse} = useContext(ShopContext);
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
