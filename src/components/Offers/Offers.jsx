import React, { useContext } from 'react'
import './Offers.css'
import exclusive_image from '../../imagenes/exclusive_image.png'


const Offers = () => {

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1 className={`h1_light`}>Exclusivo</h1>
        <h1 className={`h1_light`}>Ofertas para TI</h1>
        <p className={`p_light`}>SOLO EN PRODUCTO MAS VENDIDOS</p>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
