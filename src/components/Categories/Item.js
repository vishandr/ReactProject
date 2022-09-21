import React from "react";
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './item.css'
import { CartContext } from '../../contexts/cart-context'


class Item extends React.Component{
    // constructor(props){
    // super(props);

    // this.state = {
    // cartItems: 0,
    // addToCart: this.addToCart
    // }

    // this.addToCart = () => {
    //     this.setState((state) =>({
    //         cartItems: state.cartItems + 1
    //     }))
    // }
    // }

    // componentDidMount() {
    //     const value = this.context;

render(){
    const {gallery, id, prices, name } = this.props.item
    const addProductToCart = () => this.context.addToCart(this.props.item);
    // console.log(this.context.cartItems.map((item) => item.id + ' ' + item.quantity))
    // console.log(this.props.item)
    // console.log(this.props.item.id + ' ' + this.state.cartItems)
    // console.log(this.state)
    console.log(this.context.cartItems)
    return (
        
        <div className="item" >
                {/* <h2>{name}</h2> */}
                <Link to={`/${id}`}
                    className='item-link'>
                <img src={gallery[0]} alt={id} />
                <div className="priceBlock" >
                        <p>{name}</p>                
                        <p>{prices.filter((item) => {
                        return item.currency.label.includes(this.props.currency)
                        })[0].currency.symbol}  
                        {prices.filter((item) => {
                        return item.currency.label.includes(this.props.currency)
                        })[0].amount}</p>
                    </div>
                </Link>
                {/* <CartContext.Consumer>
                {({addToCart}) => ( */}
                    <div className="addToCart"
                    onClick={addProductToCart}><BsCart2 /></div>
                {/* )}
                </CartContext.Consumer> */}
            </div>
        )
    }
}

Item.contextType = CartContext;
export default Item;