import React, {useState} from "react";
import Modal from 'react-modal';

import '../styles/Contact.css'

export const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí colocar la lógica para enviar el formulario
        console.log('Data enviada:', formData);
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(true);
    };

    const closeModal = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="contact-form">
            <h2 className="contact-form__title">Contacto</h2>
            <form onSubmit={handleSubmit} className="contact-form__form">
                <div className="contact-form__group">
                    <label htmlFor="name" className="contact-form__label">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-form__input"
                        required
                    />
                </div>
                <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-form__input"
                        required
                    />
                </div>
                <div className="contact-form__group">
                    <label htmlFor="message" className="contact-form__label">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-form__textarea"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="contact-form__button">Enviar</button>
            </form>

            <Modal
                isOpen={isSubmitted}
                onRequestClose={closeModal}
                contentLabel="Transaction Successful"
                className="contact-form__modal"
                overlayClassName="contact-form__overlay"
            >
                <h2 className="contact-form__modal-title">Transacción Realizada Correctamente</h2>
                <button onClick={closeModal} className="contact-form__modal-button">Cerrar</button>
            </Modal>
        </div>
    );
}