import React from 'react'
import './Hero.css'
import hero_image from '../../imagenes/hero_image.png'

const Hero = () => {
    return (
        <div className="hero_dark">
            <div className="hero-left">
                <div>
                    <div className="hero-hand-icon">
                        <p className={'ph_dark'}>Nueva</p>
                    </div>
                    <p className={'ph_dark'}>Coleccion</p>
                    <p className={'ph_dark'}>Para todos</p>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt=""/>
            </div>
        </div>
    )
}

export default Hero
