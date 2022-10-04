import React from "react";
import './header.css';
// import Cart from './Cart'
import { BsCart2 } from 'react-icons/bs';
import NavLinks from './NavLinks';
import Currency from "./Currency";
import CartDropdown from '../Cart-dropdown/Cart-dropdown';
// import { CartContext } from '../../contexts/cart-context';
import { Link } from 'react-router-dom'
import { ReactComponent as Shoplogo} from "../../assets/a-logo.svg"


class Header extends React.Component{
  // constructor (props){
  //   super(props)
  //   // this.toggleIsCartOpen = this.toggleIsCartOpen.bind(this)
  //   this.state = {
  //     isCartOpen : false,
  //     setIsCartOpen: () =>{},
  //     // currentCurrency : '',
  //   };
  //   this.toggleIsCartOpen = () => {
  //     this.setState(state => ({
  //       isCartOpen : 
  //         state.isCartOpen === true
  //         ? false
  //         : true,
  //     }))
  //   }
  // };
  
  render(){
    return(
      <header className="header">
        <nav>
          <div>
            <NavLinks chooseCategory={this.props.chooseCategory}/>
          </div>
           <Link to='/' className="logo">
           {/* <img src="https://img.icons8.com/material/344/shopaholic.png" alt="logo"/> */}
           <Shoplogo />
           </Link>
          <div className="cart">
            <Currency />  
            {/* <BsCart2 className="cart-button" onClick={this.toggleIsCartOpen}/> */}
            {/* {this.state.isCartOpen && <CartDropdown />} */}
            <CartDropdown />
          </div>
        </nav>  
      </header>
    )
  }
}

export default Header;