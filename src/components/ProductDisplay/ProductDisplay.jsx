import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import start_icon from "../../imagenes/star_icon.png";
import start_dull_icon from "../../imagenes/star_dull_icon.png";
import {ShopContext} from "../../context/ShopContext";


const ProductDisplay = (props) => {
  const { product } = props;
  const { adicionarCarrito } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1 className={`ph1_dark`}>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p className={`ph1_dark`}>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className={`productdisplay-right-description pdiv_dark`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          aspernatur assumenda cum eligendi tenetur, enim, expedita beatae,
          quasi et esse ipsam. Unde error quae animi distinctio numquam, a
          quidem dicta!
        </div>
        <div className="productdisplay-right-size">
          <h1 className={`ph1_dark`}>Selecciona el tamaño</h1>
          <div className="productdisplay-right-sizes">
            <div
              className={`size-option ${
                selectedSize === "S" ? "selected" : ""
              }`}
              onClick={() => handleSizeChange("S")}
            >
              S
            </div>
            <div
              className={`size-option ${
                selectedSize === "M" ? "selected" : ""
              }`}
              onClick={() => handleSizeChange("M")}
            >
              M
            </div>
            <div
              className={`size-option ${
                selectedSize === "L" ? "selected" : ""
              }`}
              onClick={() => handleSizeChange("L")}
            >
              L
            </div>
            <div
              className={`size-option ${
                selectedSize === "XL" ? "selected" : ""
              }`}
              onClick={() => handleSizeChange("XL")}
            >
              XL
            </div>
            <div
              className={`size-option ${
                selectedSize === "XXL" ? "selected" : ""
              }`}
              onClick={() => handleSizeChange("XXL")}
            >
              XXL
            </div>
          </div>
        </div>
        <div className="productdisplay-right-quantity">
          <h1 className={`ph1_dark`}>Cantidad</h1>
          <input
            type="number"
            min="1"
            value={selectedQuantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            adicionarCarrito(product.id, selectedSize, selectedQuantity);
          }}
        >
          Añadir
        </button>
        <p className={"productdisplay-right-category pdiv_dark"}>
          <span>Categoria : </span>Mujer, Camiseta, Tops
        </p>
        <p className={"productdisplay-right-category pdiv_dark"}>
          <span>Tags : </span>Moderno, Ultimo
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
