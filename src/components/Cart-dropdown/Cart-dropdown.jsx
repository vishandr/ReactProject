import React from "react";
import './Cart-dropdown.css';
import { CartContext } from '../../contexts/cart-context';
import CartDropdownItems from "../Cart-dropdown-items/CartDropdownItems";
import { useNavigate } from 'react-router-dom'

class CartDropdown extends React.Component{
   
    render(){
        const { currentCurrencySymbol, cartTotal, cartCount, cartItems } = this.context
        const navigate = this.props.navigate;
        const goToCart = () => {
            navigate('/cart')
        };
      
        return(
            <div className="cart-dropdown-container">
                <b>My Bag,</b>
                <span>{cartCount} items</span>
                <div className="cart-items">
                {cartItems.map((item) => (
                    <CartDropdownItems key={item.id} 
                        cartItem={item}
                        currency={this.props.currency}
                        />
                ))}
                </div>
                <div className="total-zone">
                {currentCurrencySymbol} 
                {cartTotal}
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