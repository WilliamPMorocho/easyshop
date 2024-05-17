import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import {usePopular} from "../../hooks/usePopular";

const Popular = () => {
    const popularItems = usePopular();
    return (
        <div className='popular'>
            <h1 className={`h1p_dark`}>POPULAR EN LAS MUJERES</h1>
            <hr className={`hrp_dark`} />
            <div className="popular-item">
                {popularItems.map((item,i)=>{
                    return<Item key={i}  id={item.id}   name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular
