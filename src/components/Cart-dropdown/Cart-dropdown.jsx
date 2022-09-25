import React from "react";
import './Cart-dropdown.css';
import { CartContext } from '../../contexts/cart-context';
import CartDropdownItems from "../Cart-dropdown-items/CartDropdownItems";
import { useNavigate } from 'react-router-dom'

class CartDropdown extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state= {
    //     cartTotal : 0
    //     }
    // }
   
    render(){
        const navigate = this.props.navigate;
        const goToCart = () => {
            navigate('/cart')
        };

        const newCartTotal = this.context.cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.prices.find((price) => 
                price.currency.label === this.props.currency).amount, 0);
        
        let symbol
        if (this.context.cartItems.length > 0){
            symbol = this.context.cartItems[0].prices.find((item) => 
            item.currency.label === this.props.currency).currency.symbol;
        } else {symbol = 'USD'}

        return(
            <div className="cart-dropdown-container">
                <b>My Bag,</b>
                <span>{this.context.cartCount} items</span>
                <div className="cart-items">
                {this.context.cartItems.map((item) => (
                    <CartDropdownItems key={item.id} 
                        cartItem={item}
                        currency={this.props.currency}
                        />
                ))}
                </div>
                <div className="total-zone">
                {symbol} 
                {newCartTotal}
                </div>
                <div className="buttons-area">
                    <button className="viev-bag-button"
                            onClick={goToCart}>VIEV BAG</button>
                    <button className="go-to-checkout-button">CHECK OUT</button>
                </div>
            </div>
        )
    }
}

CartDropdown.contextType = CartContext
// export default CartDropdown;
export default (props) => (
    <CartDropdown 
    {...props}
    navigate={useNavigate()}
/>);