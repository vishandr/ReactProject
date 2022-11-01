import React from "react";
import './Cart-dropdown1.css';
import CartDropdownItems from "../Cart-dropdown-items/CartDropdownItems";
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart-context';

class CartDropdown1 extends React.Component{
    constructor(props){
        super(props)
        this.cartRef = React.createRef;
        this.setCartRef = this.setCartRef.bind(this);
        this.setCartRef2 = this.setCartRef2.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    };
        
        componentDidMount(){
            document.addEventListener('mousedown', this.handleClickOutside);
        };
        
        componentWillUnmount(){
            document.removeEventListener('mousedown', this.handleClickOutside);
        };
        
        setCartRef(node){
            this.cartRef = node;
        };

        setCartRef2(node){
            this.cartRef2 = node;
        };
        
        handleClickOutside(event){
            const { isCartOpen } = this.context;
            // console.log(event.target)
            if(this.cartRef.contains(event.target) && !this.cartRef2.contains(event.target)){
                    this.context.setIsCartOpen(!isCartOpen)
                }

                // const closeCartDropdown = () => this.context.setIsCartOpen(!isCartOpen);
            }

        render(){
            const { currentCurrencySymbol, cartTotal, cartCount, cartItems } = this.context;
            const navigate = this.props.navigate;
            const goToCart = () => {
                navigate('/cart')
            };

        return(
            <div className="cart-overlay" ref={this.setCartRef}>
                <div className="cart-dropdown-container" ref={this.setCartRef2}> 
                    <p className="dropdown-p"><b>My Bag,</b><span> {cartCount} items</span></p>
                    <div className="cart-items-container">
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
            </div>
        )
    }
};

CartDropdown1.contextType = CartContext;
// export default CartDropdown1;

export default (props) => (
    <CartDropdown1 
    {...props}
    navigate={useNavigate()}
/>);
