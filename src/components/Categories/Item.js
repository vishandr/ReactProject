import React from "react";
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './item.css'
import { CartContext } from '../../contexts/cart-context'


class Item extends React.Component{

render(){
    const {gallery, id, prices, name } = this.props.item
    const addProductToCart = () => this.context.addToCart(this.props.item);

    return (
        
        <div className="item" >
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