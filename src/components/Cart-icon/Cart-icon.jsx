import React from "react";
import './Cart-icon.css';
import { CartContext } from '../../contexts/cart-context';
import { ReactComponent as CartLogo} from '../../assets/cart.svg';

class CartIcon extends React.Component{

    render(){
        const { isCartOpen } = this.context;
        const toggleIsCartOpen = () => {
            this.context.setIsCartOpen(!isCartOpen);
        }

        return(
            <div className="cart-icon-container" onClick={toggleIsCartOpen}>
                <CartLogo />
            </div>
        )
    }
};
CartIcon.contextType = CartContext;
export default CartIcon;