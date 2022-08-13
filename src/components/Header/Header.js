import React from "react";
import './header.css'
// import Cart from './Cart'
import { BsCart2 } from 'react-icons/bs'
import NavLinks from './NavLinks'
import Currency from "./Currency";

class Header extends React.Component{
  constructor (props){
    super(props)
    // this.openCart = this.openCart.bind(this)
    this.state = {
      cartOpen : false,
      // currentCurrency : 'USD',
    };
      }

      

  render(){
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
            <BsCart2 className="cart-button" />
          </div>
        </nav>  
      </header>
    )
  }
}

export default Header;