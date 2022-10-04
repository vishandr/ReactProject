import React from "react";
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './item.css'
import { CartContext } from '../../contexts/cart-context'


class Item extends React.Component{

render(){
    const {gallery, id, prices, name, brand } = this.props.item
    const addProductToCart = () => this.context.addToCart(this.props.item);
    // console.log(this.context.currentCurrency)
    return (
        <div className="item" >
                <Link to={`/${id}`}
                    className='item-link'>
                <img src={gallery[0]} alt={id} />
                <div className="priceBlock" >
                    <p>{brand} {name}</p>                
                    <p>{this.context.currentCurrencySymbol}
                    {prices.find((item) =>
                    item.currency.label === this.context.currentCurrencyLabel).amount}</p>
                    </div>
                </Link>
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