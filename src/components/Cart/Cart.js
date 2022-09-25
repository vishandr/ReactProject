import React from "react";
import './cart.css'
import { CartContext } from '../../contexts/cart-context'
import CartPageItem from "../CartPageItem/CartPageItem";

class Cart extends React.Component{

    render(){
        const { currentCurrencySymbol, cartCount, cartTotal, cartItems } = this.context
        return(
            <>
                <h1>CART</h1>
                {cartItems.map((item) => (
                    <CartPageItem key={item.id} 
                        cartItem={item}
                        />
                ))}
                <div className="order-box">
                    <p>Tax 21%: {currentCurrencySymbol} {cartTotal * 0.21}</p>
                    <p>Quantity: <b>{cartCount}</b> </p>
                    <p>Total: <b> {currentCurrencySymbol}  { cartTotal }</b></p>
                    <button>ORDER</button>
                </div>
            </>
        )
    }
}


Cart.contextType = CartContext;
export default Cart