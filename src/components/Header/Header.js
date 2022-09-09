import React from "react";
import './header.css';
// import Cart from './Cart'
import { BsCart2 } from 'react-icons/bs';
import NavLinks from './NavLinks';
import Currency from "./Currency";
import CartDropdown from '../Cart-dropdown/Cart-dropdown';
import { CartContext } from '../../contexts/cart-context';


class Header extends React.Component{
  static contextType = CartContext;
  constructor (props){
    super(props)
    // this.toggleIsCartOpen = this.toggleIsCartOpen.bind(this)
    this.state = {
      isCartOpen : false,
      setIsCartOpen: () =>{},
      currentCurrency : 'USD',
    };
    this.toggleIsCartOpen = () => {
      this.setState(state => ({
        isCartOpen : 
          state.isCartOpen === true
          ? false
          : true,
      }))
    }
  };
  
  render(){
        let value = this.context;
        // console.log(value.isCartOpen)
        // console.log(value.setIsCartOpen)
        console.log(this.state.isCartOpen)

    return(
      <header className="header">
        <nav>
          <div>
            <NavLinks chooseCategory={this.props.chooseCategory}/>
          </div>
            <a href="/" className="logo"><img src="https://img.icons8.com/material/344/shopaholic.png" alt="logo"/></a>
          <div className="cart">
            <Currency 
            onChangeHandler = {this.props.onChangeHandler} 
            value = {this.state.currentCurrency} 
            />  
            <BsCart2 className="cart-button" onClick={this.toggleIsCartOpen}/>
            {this.state.isCartOpen && <CartDropdown />}
            {/* {value.isCartOpen && <CartDropdown />} */}
          </div>
        </nav>  
      </header>
    )
  }
}

export default Header;