import React from "react";
import './header.css';
// import Cart from './Cart'
import { BsCart2 } from 'react-icons/bs';
import NavLinks from './NavLinks';
import Currency from "./Currency";
import CartDropdown from '../Cart-dropdown/Cart-dropdown';
// import { CartContext } from '../../contexts/cart-context';
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Shoplogo} from "../../assets/a-logo.svg"


class Header extends React.Component{
  render(){
    return(
      <header className="header">
          {/* <div className="nav-links"> */}
            <NavLinks chooseCategory={this.props.chooseCategory}/>
          {/* </div> */}
          <div className="logo-wrapper">
           <Link to='/' className="logo">
           {/* <img src="https://img.icons8.com/material/344/shopaholic.png" alt="logo"/> */}
           <Shoplogo />
           </Link>
           </div>
          <div className="actions">
            <Currency />   
            <CartDropdown />
          </div>
          <Outlet />
      </header>
    )
  }
}

export default Header;