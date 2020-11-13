import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price}) {
    const [{ cart }, dispatch] = useStateValue();
    console.log('this is the cart', cart)
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price

            },
        });
    };

    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

            </div>
            <img src={image}></img>
            <button onClick={addToCart}>Add to Cart!</button>
        </div>
    )
}

export default Product
