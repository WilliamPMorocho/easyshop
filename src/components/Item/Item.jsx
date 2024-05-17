import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className='item'>
            <Link to={`/productodetalle/${props.id}`}> <img onClick={handleClick} src={props.image} alt=""/></Link>
            <p className={`pit_light`}>{props.name}</p><p className={`pit_light`}>{props.id}</p>
            <div className="item-prices">
                <div className={`item-price-new_dark`}>${props.new_price}</div>
                <div className={`item-price-old_dark`}>${props.old_price}</div>
            </div>
        </div>
    )
}

export default Item



