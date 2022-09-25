import React from "react";
import './cart.css'
import { CartContext } from '../../contexts/cart-context'
import CartPageItem from "../CartPageItem/CartPageItem";

class Cart extends React.Component{

    render(){
        return(
            <>
                <h1>CART</h1>
                {this.context.cartItems.map((item) => (
                    <CartPageItem key={item.id} 
                        cartItem={item}
                        currency={this.props.currency}
                        />
                ))}
                <div className="order-box">
                    <p>Tax 21%: </p>
                    <p>Quantity: <b>{this.context.cartCount}</b> </p>
                    <p>Total: </p>
                    <button>ORDER</button>
                </div>
            </>
        )
    }
}


Cart.contextType = CartContext;
export default Cart