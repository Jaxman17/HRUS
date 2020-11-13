import React from 'react'
import CartProduct from './CartProduct';
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
            </div>
            <div>
                <h3>Hello! {user?.email}</h3>
                <h2 className="checkout-title">Your Shopping Cart</h2>

                {cart.map(item => (
                    <CartProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    />
                ))}
                {/* CartProduct */}
                {/* CartProduct */}
                {/* CartProduct */}
                {/* CartProduct */}
                {/* CartProduct */}


            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

