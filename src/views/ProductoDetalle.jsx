import React, {useContext} from 'react'
import {useParams} from 'react-router-dom';
import Breadcrum from "../components/Breadcrums/Breadcrum";
import {useFetch} from "../hooks/useFetch";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import all_product from "../service/all_product";


const ProductoDetalle = () => {
    const {productId} = useParams();
    //const {fetchResponse} = useFetch(`https://fakestoreapi.com/products/${productId}`);
    //const product = fetchResponse;
    const product = all_product.find((e)=> e.id === Number(productId));
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
