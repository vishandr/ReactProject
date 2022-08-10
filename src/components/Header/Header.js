import React from "react";
import './header.css'
// import Cart from './Cart'
import { BsCart2 } from 'react-icons/bs'
import NavLinks from './NavLinks'
import Currency from "./Currency";

// const nav = ['women', 'men', 'kids'];
// const navLinks = nav.map((link) => <li key={link}><a href="/">{link.toUpperCase()}</a></li>)

class Header extends React.Component{
  constructor (props){
    super(props)
    this.chooseCategory = this.chooseCategory.bind(this);
    // this.openCart = this.openCart.bind(this)
    this.state = {
      cartOpen : false,
      currentCurrency : 'USD',
    };
      }

    onCurrencySelect = (event) => {
      const currentCurrency = event.target.value;
      this.setState(() => {
        return {currentCurrency};
      });
    }
    
  render(){

    return(
    
      <header className="header">
       
        <nav>
          <div>
            <ul>
            <NavLinks chooseCategory={this.chooseCategory}/>
            </ul>
          </div>
            <a href="/" className="logo"><img src="https://img.icons8.com/material/344/shopaholic.png" alt="logo"/></a>
          <div className="cart">
            <Currency 
            onChangeHandler = {this.onCurrencySelect} 
            value = {this.state.currentCurrency} 
            />  
            <BsCart2 className="cart-button" />
          </div>
        </nav>
        
      </header>
    
    )
  }

  chooseCategory(category){
    console.log(category)
  }
  
}

export default Header;