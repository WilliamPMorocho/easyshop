import React, {useContext} from 'react';
import '../styles/Product.css';
import ImagenGallery from "./ImagenGallery";
import {ShopContext} from "../context/ShopContext";
import all_product from "../service/all_product";

const Product = () => {
    //const {fetchResponse} = useFetch("https://fakestoreapi.com/products");
  const {fetchResponse} = useContext(ShopContext);
    return (
        <div className="product">
            <h2>OFERTAS DEL DIA</h2>
            {
                //fetchResponse!=='...'?(<ImagenGallery images={fetchResponse} />):('')
                <ImagenGallery images={all_product}></ImagenGallery>
            }
        </div>
    );
}

export default Product;
