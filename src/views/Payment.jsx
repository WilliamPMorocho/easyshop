import React, {useState, useEffect, useContext} from 'react';
import '../styles/Payment.css';
import {ShopContext} from "../context/ShopContext";
import Modal from "react-modal";
import {Link, useNavigate} from "react-router-dom";

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const {cartItems ,getTotalCartAmount, encerarCart} = useContext(ShopContext);

    const navigate = useNavigate();

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleExpirationDateChange = (e) => {
        setExpirationDate(e.target.value);
    };

    const handleCvvChange = (e) => {
        setCvv(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para procesar el pago
        console.log('Procesando el pago...');
        console.log('Número de tarjeta:', cardNumber);
        console.log('Fecha de expiración:', expirationDate);
        console.log('CVV:', cvv);
        setCardNumber('');
        setExpirationDate('')
        setCvv('');
        setIsSubmitted(true);

        encerarCart();
    };
    const closeModal = () => {
        setIsSubmitted(false);
        navigate('/');
    };


    return (
        <div className="payment-page">
            <div className="payment-page__header">
                <h1 className="payment-page__title">Pago</h1>
            </div>
            <div className="payment-page__content">
                <div className="payment-page__section">
                    <h2 className="payment-page__section-title">Detalles de Pago</h2>
                    <form className="payment-page__form" onSubmit={handleSubmit}>
                        <div className="payment-page__form-group">
                            <label htmlFor="cardNumber" className="payment-page__label">
                                Número de Tarjeta
                            </label>
                            <input
                                type="text"
                                id="cardNumber"
                                className="payment-page__input"
                                placeholder="Ingrese el número de tarjeta"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                            />
                        </div>
                        <div className="payment-page__form-group">
                            <label htmlFor="expirationDate" className="payment-page__label">
                                Fecha de Expiración
                            </label>
                            <input
                                type="text"
                                id="expirationDate"
                                className="payment-page__input"
                                placeholder="MM/YY"
                                value={expirationDate}
                                onChange={handleExpirationDateChange}
                            />
                        </div>
                        <div className="payment-page__form-group">
                            <label htmlFor="cvv" className="payment-page__label">
                                CVV
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                className="payment-page__input"
                                placeholder="CVV"
                                value={cvv}
                                onChange={handleCvvChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="payment-page__submit-button"
                            disabled={!cardNumber || !expirationDate || !cvv}
                        >
                            Pagar Ahora
                        </button>
                    </form>
                </div>
                <div className="payment-page__section">
                    <h2 className="payment-page__section-title">Resumen del Pedido</h2>
                    <div className="payment-page__order-summary">
                        {cartItems.map((item) => (
                            <div key={item.id} className="payment-page__order-item">
                                <span className="payment-page__order-item-name">{item.name}</span>
                                <span className="payment-page__order-item-price">${item.new_price}</span>
                            </div>
                        ))}
                        <div className="payment-page__order-total">
                            <span className="payment-page__order-total-label">Total:</span>
                            <span className="payment-page__order-total-value">
                                ${getTotalCartAmount()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

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
};

export default Payment;