import React from "react";
import './Cart-dropdown.css';
import { CartContext } from '../../contexts/cart-context';
import CartDropdownItems from "../Cart-dropdown-items/CartDropdownItems";
import { useNavigate } from 'react-router-dom'
import { ReactComponent as CartLogo} from '../../assets/cart.svg'

class CartDropdown extends React.Component{
    constructor(props){
        super(props);
        this.cartRef = React.createRef;
        this.cartRef2 = React.createRef;
        
        this.state = {
            isCartOpen : false,
        };
        this.toggleIsCartOpen = () => {
            this.setState(state => ({
                isCartOpen : 
                state.isCartOpen === true
                ? false
                : true,
            }))
        };

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
        // console.log(this.cartRef)
        if(this.state.isCartOpen && this.cartRef && this.cartRef.contains(event.target) && !this.cartRef2.contains(event.target)){
            this.setState({
                isCartOpen : false
                });
        }
    }


    render(){
        const { currentCurrencySymbol, cartTotal, cartCount, cartItems } = this.context
        const navigate = this.props.navigate;
        const goToCart = () => {
            navigate('/cart')
        };

        return(
            <div className="cart-dropdown-wrapper" >
                <CartLogo onClick={this.toggleIsCartOpen}/>
                {this.state.isCartOpen && <div className="cart-overlay" ref={this.setCartRef}>
                <div className="cart-dropdown-container" ref={this.setCartRef2}>
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
                </div> 
                }
            </div>
        )
    }
}

CartDropdown.contextType = CartContext
export default (props) => (
    <CartDropdown 
    {...props}
    navigate={useNavigate()}
/>);
