import React, {useContext} from 'react'
import './NewCollections.css'

import Item from '../Item/Item'
import {ShopContext} from "../../context/ShopContext";

const NewCollections = () => {
const {newCollections} = useContext(ShopContext)
    return (
        <div className='new-collections'>
            <h1 className={`h1_dark`}>NUEVAS COLECCIONES</h1>
            <hr className={`hr_dark`} />
            <div className="collections">
            {newCollections.map((item,i)=>{
                return <Item key={i}   id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
            </div>

        </div>
    )
}

export default NewCollections
