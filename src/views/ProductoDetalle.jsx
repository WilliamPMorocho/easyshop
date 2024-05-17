import React, {useContext} from 'react'
import {useParams} from 'react-router-dom';
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import {ShopContext} from "../context/ShopContext";


const ProductoDetalle = () => {
    const {productId} = useParams();
    //const {fetchResponse} = useFetch(`https://fakestoreapi.com/products/${productId}`);
    //const product = fetchResponse;

    const {allProducts} = useContext(ShopContext);

    const product = allProducts.find((e)=> e.id === Number(productId));
    return (
        <div>{
            product !== '...' ? (
                <>
                    <Breadcrum product={product}/>
                    <ProductDisplay product={product}></ProductDisplay>
                    <DescriptionBox></DescriptionBox>

                </>
            ) : 'Procesando...'
        }
        </div>
    )
}

export default ProductoDetalle
