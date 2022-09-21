import './CartItems.css';
import React from 'react';
import {CartContext} from '../../contexts/cart-context'

class CartItems extends React.Component{
    render(){
        const {gallery, attributes, prices, name, quantity } = this.props.cartItem
        const addItemHandler = () => this.context.addToCart(this.props.cartItem);
        const removeItemHandler = () => this.context.removeItemFromCart(this.props.cartItem);

        return(
            <div className='cart-item-container'>
                <div className='cart-item-description-container'>
                {/* <div className="priceBlock"> */}
                <p>{name}</p>
                <p>
                    {prices.find((item) => {
                        return item.currency.label === this.props.currency
                    }).currency.symbol
                    } 
                    {prices.find((item) => {
                        return item.currency.label === this.props.currency
                    }).amount}
                </p>
                    <div>
                    {attributes.map((el) => 
                    <div key={el.id}><p className="attribute-name">{el.name.toUpperCase()}:</p>
                    {el.items.map((attr) => 
                    <div key={attr.id} className="size">{attr.value}</div>)}
                    </div>)}
                    </div>
                </div>

                <div className='cart-item-quantity-container'>
                    <div className='cart-item-quantity-box' 
                    onClick={addItemHandler}
                    >+</div>
                    <div>{quantity}</div>
                    <div className='cart-item-quantity-box' 
                    onClick={removeItemHandler}
                    >-</div>
                </div>

                <div className='cart-item-image-container'>
                <img src={gallery[0]} alt="" />
                
                </div>
            </div>
        )
    }
}

CartItems.contextType = CartContext;
export default CartItems;