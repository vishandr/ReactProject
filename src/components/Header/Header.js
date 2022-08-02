import React from "react";
import './header.css'
// import Cart from './Cart'
import { BsCart2 } from 'react-icons/bs'
import NavLinks from './NavLinks'

// const nav = ['women', 'men', 'kids'];
// const navLinks = nav.map((link) => <li key={link}><a href="/">{link.toUpperCase()}</a></li>)

class Header extends React.Component{
  render(){
    return(
    
      <header className="header">
       
        <nav>
          <div>
            {/* <ul>{navLinks}</ul> */}
            <ul>
            <NavLinks />
            </ul>
          </div>
            <a href="/" className="logo"><img src="https://img.icons8.com/material/344/shopaholic.png" alt="logo"/></a>
          <div className="cart">
            <select name="currency">
              <option className="option" selected disabled>$</option>
              <option className="option" value="usd">$ USD</option>
              <option className="option" value="eur">€ EUR</option>
              <option className="option" value="jpy">¥ JPY</option>
            </select>
            <BsCart2 className="cart-button"/>
            {/* <img src="https://img.icons8.com/windows/344/shopping-cart.png" alt="cart" className="cartLogo"/> */}
          </div>
        </nav>
        
        
        
      </header>
    
    )
  }
}

export default Header;