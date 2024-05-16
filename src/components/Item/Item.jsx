import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/productodetalle/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <p className={`pit_light`}>{props.title}</p><p className={`pit_light`}>{props.id}</p>
            <div className="item-prices">
                <div className={`item-price-new_dark`}>${props.price}</div>
                <div className={`item-price-old_dark`}>${props.price}</div>
            </div>
        </div>
    )
}

export default Item



