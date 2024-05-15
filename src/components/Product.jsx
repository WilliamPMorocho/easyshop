import React from 'react';
import '../styles/Product.css';
import {useFetch} from "../hooks/useFetch";
import ImagenGallery from "./ImagenGallery";

const Product = () => {
    const {fetchResponse} = useFetch("https://fakestoreapi.com/products");

    return (
        <div className="product">
            <h2>Nombre del Producto</h2>
            {
                fetchResponse!=='...'?(<ImagenGallery images={fetchResponse} />):('')
            }

        </div>
    );
}

export default Product;
