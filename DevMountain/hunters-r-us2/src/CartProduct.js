import React from "react";
import "./CartProduct.css";
import { useStateValue } from "./StateProvider";

function CartProduct({ id, image, title, price }) {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }
  return (
    <div className="cartProduct">
      <img className="cartProduct-image" src={image} />
      <div className="cartProduct-info">
        <p className="cartProduct-title">{title}</p>
        <p className="cartProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <button onClick={removeFromCart}>Remove from Cart!</button>
    </div>
  );
}

export default CartProduct;
