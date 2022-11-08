import React from "react";
import './header.css';
import NavLinks from './NavLinks';
import Currency from "./Currency";
// import CartDropdown from '../Cart-dropdown/Cart-dropdown';
import { CartContext } from '../../contexts/cart-context';
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Shoplogo} from "../../assets/a-logo.svg"
import CartIcon from '../Cart-icon/Cart-icon'
import CartDropdown1 from "../Cart-dropdown/Cart-dropdown1";

class Header extends React.Component{

  render(){
    const { isCartOpen, cartCount } = this.context;
    return(
      <header className="header">
            <NavLinks chooseCategory={this.props.chooseCategory}/>
          <div className="logo-wrapper">
           <Link to='/' className="logo">
           <Shoplogo />
           </Link>
           </div>
          <div className="actions">
            <Currency />   
            <CartIcon />
            {(cartCount > 0) && <div className="cart-count">{cartCount}</div>}
          </div>
            {isCartOpen && <CartDropdown1 />}
          <Outlet />
      </header>
    )
  }
}
Header.contextType = CartContext;
export default Header;

