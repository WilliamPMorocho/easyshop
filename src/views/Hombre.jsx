import React, {useContext} from "react";
import {ShopContext} from "../context/ShopContext";
import Item from "../components/Item/Item";
import  "../styles/ShopCategory.css"

export const Hombre = (props) => {
    const {allProducts} = useContext(ShopContext);
    let filteredProducts;

    filteredProducts = allProducts.filter(item => item.category === props.category);
    while (filteredProducts.length < 76) {
        filteredProducts = [...filteredProducts, ...filteredProducts];
    }

        return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt=''/>

            <div className='shopcategory-products'>
                {filteredProducts.map((item, i) => (
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
                          old_price={item.old_price}/>
                ))}
            </div>

        </div>
    );
}