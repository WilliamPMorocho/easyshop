import React from 'react';
import '../styles/ImagenGallery.css';

const ImageGallery = ({ images }) => {
    console.log('Data response ---> '+images);
    return (
        <div className="image-gallery">
            {
                images.map((image, index) => (
                    <img key={index} src={image.image} alt={`Product ${index}`} className="image-gallery__image"/>
                ))}
        </div>
    );
}

export default ImageGallery;
