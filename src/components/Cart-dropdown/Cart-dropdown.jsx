import React from "react";
import './Cart-dropdown.css';
import { CartContext } from '../../contexts/cart-context';
import CartItems from "../Cart-items/CartItems";

class CartDropdown extends React.Component{
    render(){
        // console.log(this.props.currency)
        return(
            <div className="cart-dropdown-container">
                <b>My Bag,</b>
                <span>0 items</span>
                <div className="cart-items">
                {this.context.cartItems.map((item) => (
                    <CartItems key={item.id} 
                        cartItem={item}
                        currency={this.props.currency}
                        />
                ))}
                </div>
                <div className="total-zone">
                    <span>Total:</span>
                    <span> $200</span>
                </div>
                <div className="buttons-area">
                    <button className="viev-bag-button">VIEV BAG</button>
                    <button className="go-to-checkout-button">CHECK OUT</button>
                </div>
            </div>
        )
    }
}

CartDropdown.contextType = CartContext
export default CartDropdown;