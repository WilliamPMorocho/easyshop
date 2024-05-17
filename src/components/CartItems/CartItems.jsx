import React, {useContext} from "react";
import "./CartItems.css";
import remove_icon from "../../imagenes/cart_cross_icon.png";
import placeholder_image from "../../imagenes/empty-cart.png";
import {ShopContext} from "../../context/ShopContext";
import {Link} from "react-router-dom";

const CartItems = () => {
    const {cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);


    const calculateTotalPrice = (item) => {
        return item.new_price * item.quantity;
    };

    const isEmptyCart = cartItems.length === 0;
console.log("Informacion Carrito =====>"+cartItems)
    return (
        <div className="cartitems">
            <div className={`cartitems-format-main ci_dark`}>
                <p>Producto</p>
                <p>Titulo</p>
                <p>Precio</p>
                <p>Tamaño</p>
                <p>Cantidad</p>
                <p>Total</p>
                <p>Remover</p>
            </div>
            {isEmptyCart && (
                <div className="empty-cart">
                    <img
                        src={placeholder_image}
                        alt="Empty Cart"
                    />
                    <div>
                        <p className={'empty-cart_color'}>
                            No has realizado ninguna, compra!
                        </p>
                    </div>
                </div>
            )}
            <hr/>
            {cartItems.map((item) => {
                return (
                    <div key={item.id}>
                        <div
                            className={`cartitems-format cartitems-format-main ci_dark`}
                        >
                            <img
                                src={item.image}
                                alt=""
                                className="carticon-product-icon"
                            />
                            <p>{item.name}</p>
                            <p className="text-Align">${item.new_price}</p>
                            <p className="text-Align">{item.size}</p>
                            <p className="cartitems-quantity">{item.quantity}</p>
                            <p className="text-Align">${calculateTotalPrice(item)}</p>{" "}
                            {/* Display total price for each item */}
                            <img
                                className="cartitems-remove-icon"
                                src={remove_icon}
                                onClick={() => {
                                    removeFromCart(item.id);
                                }}
                                alt=""
                            />
                        </div>
                        <hr/>
                    </div>
                );
            })}
            <div className="cartitems-down">
                <div className={`cartitems-total ci_dark`}>
                    <h1>Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Envio</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <Link to={'/pagar'}>
                        <button>PAGAR</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CartItems;
