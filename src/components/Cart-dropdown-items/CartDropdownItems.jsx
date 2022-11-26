import './CartDropdownItems.css';
import React from 'react';
import {CartContext} from '../../contexts/cart-context'

class CartDropdownItems extends React.Component{
    render(){
        const {brand, gallery, attributes, prices, name, quantity, selectedAttr } = this.props.cartItem
        const { currentCurrencySymbol, currentCurrencyLabel, changeSelectedAttribute, cartItems } = this.context
        const addItemHandler = () => this.context.addToCart(this.props.cartItem);
        const removeItemHandler = () => this.context.removeItemFromCart(this.props.cartItem);
        const changeAttribute = (event) => {
            changeSelectedAttribute(cartItems, this.props.cartItem, event)
        }
        
        return(
            <div className='cart-item-box'>
                <div className='cart-item-description-container'>
                <p className="dropdown-p">{brand}</p>
                <p className="dropdown-p">{name}</p>
                <p className='cart-dropdown-price dropdown-p'>{currentCurrencySymbol}
                    {prices.find((item) => {
                        return item.currency.label === currentCurrencyLabel
                    }).amount}
                </p>

                    <div className='cart-dropdown-attributes'>
                        {attributes.map((el) => 
                        <div key={el.id}>
                            <p className="cart-dropdown-attribute-name">{el.name}:</p>
                            <div className='cart-dropdown-attributes-container'>
                                {el.items.map((attr) => 
                                <div key={attr.id} 
                                className={(el.id === 'Color'
                                ? ((selectedAttr.find(item => 
                item.item === attr.value && item.id === el.name))) ? 'cart-dropdown-attribute-color cart-dropdown-attribute-color-active' : "cart-dropdown-attribute-color"
                :((selectedAttr.find(item => 
                item.id === el.name && item.item === attr.value))) ? 'cart-dropdown-attribute-size active' : "cart-dropdown-attribute-size")}
                                 
                                style={{backgroundColor: attr.value}}
                                onClick={changeAttribute}>
                                {attr.value}
                                </div>)}
                            </div>
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

CartDropdownItems.contextType = CartContext;
export default CartDropdownItems;