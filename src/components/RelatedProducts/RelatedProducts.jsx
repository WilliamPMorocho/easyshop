import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import data_product from "../../service/data";


const RelatedProducts = () => {
    //const {fetchResponse} = useFetch("https://fakestoreapi.com/products?limit=4");
    return (
        <div className='relatedproducts'>
            <h1 className={`h1_dark`}>Related Products</h1>
            <hr className={`hr_dark`}/>
            <div className="relatedproducts-item">
                {
                    /*fetchResponse !== '...' ? (fetchResponse.map((item, i) => {
                            return <Item key={i} id={item.id} name={item.title} image={item.image} new_price={item.price}
                                         old_price={item.price}/>
                        }))
                        : ('Procesando')*/
                    data_product.map((item,i)=>{
                        return <Item key={i}   id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProducts
