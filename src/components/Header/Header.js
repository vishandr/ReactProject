import React from "react";
import './header.css'

const nav = ['women', 'men', 'kids'];
const navLinks = nav.map((link) => <li key={link}>{link.toUpperCase()}</li>)

class Header extends React.Component{
  render(){
    return(
    
      <header className="header">
       
        <nav>
          <ul>{navLinks}</ul>
        </nav>
        {/* here will be original logo */}
        <img src="https://img.icons8.com/material/344/shopaholic.png" alt="logo" className="logo"/>
        
        
      </header>
    
    )
  }
}

export default Header;