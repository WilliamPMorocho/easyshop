import React, {useContext, useState} from "react";
import {ShopContext} from "../context/ShopContext";
import Item from "../components/Item/Item";
import  "../styles/ShopCategory.css"

export const Mujer = (props) => {
    const {all_product} = useContext(ShopContext);
    const [sorting, setSorting] = useState('');
    let filteredProducts;

    filteredProducts = all_product.filter(item => item.category === props.category);
    while (filteredProducts.length < 76) {
        filteredProducts = [...filteredProducts, ...filteredProducts];
    }


    if (sorting === '0') {
        filteredProducts.sort((a, b) => a.new_price - b.new_price);
    } else if (sorting === '1') {
        filteredProducts.sort((a, b) => b.new_price - a.new_price);
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