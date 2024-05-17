import React, {useContext} from "react";
import "./CartItems.css";
import remove_icon from "../../imagenes/cart_cross_icon.png";
import placeholder_image from "../../imagenes/empty-cart.png";
import {ShopContext} from "../../context/ShopContext";

const CartItems = () => {
    const { cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);


    const calculateTotalPrice = (item) => {
        return item.new_price * item.quantity;
    };

    const isEmptyCart = cartItems.length === 0;

    return (
        <div className="cartitems">
            <div className={`cartitems-format-main ci_dark`}>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Size</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            {isEmptyCart && (
                <div className="empty-cart">
                    <img
                        src={placeholder_image}
                        alt="Empty Cart"
                    />
                    <div>
                        <p className={'empty-cart_color'}>
                            Hey, it feels so light!
                        </p>
                        <p className={'empty-cart_colorLarge'}>
                            There is nothing in your bag. Let's add some items.
                        </p>
                    </div>
                </div>
            )}
            <hr />
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
                        <hr />
                    </div>
                );
            })}
            <div className="cartitems-down">
                <div className={`cartitems-total ci_dark`}>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;