import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../../imagenes/breadcrum_arrow.png'


const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className={`breadcrum_dark`}>
      Inicio <img src={arrow_icon} alt="" />SHOP<img src={arrow_icon} alt="" /> {product.category === "women"?"Mujer":"Hombre"} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
