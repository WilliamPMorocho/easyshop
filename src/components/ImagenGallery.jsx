import React from 'react';
import '../styles/ImagenGallery.css';
import {Link} from "react-router-dom";

const ImageGallery = ({images}) => {
    console.log('Data response ---> ' + images);
    return (
        <div className="image-gallery">
            {
                images.map((data, index) => (
                    <div key={index} className="image-gallery__item">
                        <img key={index} src={data.image} alt={`Product ${index}`} className="image-gallery__image"/>
                        <div className="image-gallery__details">
                            <h3 className="image-gallery__title">{data.name}</h3>
                            <p className="image-gallery__description">{data.description}</p>
                            <p className="image-gallery__price">${data.new_price}</p>
                            <Link to={`/productodetalle/${data.id}`}>Ver detalle</Link>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default ImageGallery;
