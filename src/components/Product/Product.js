import React from "react";
import './Product.css'
import { useParams } from "react-router-dom";
import { CartContext } from '../../contexts/cart-context';

class Product extends React.Component{
    
    render(){
        const { currentCurrencySymbol, currentCurrencyLabel } = this.context
        const {productId} = this.props.params;
        const item = this.props.items.find((el) => 
        el.id.includes(productId)
        );
        const addProductToCart = () => this.context.addToCart(item);
        function createMarkup() { 
            return {__html: item.description}; };

        return(
            <div>
                <div className="gallery">
                    {item.gallery.map((image) =>
                    <img key={image} src={image} className="pdp_img" alt={item.id}/>
                    )}
                </div>
                <img src={item.gallery[0]} alt="" className="main_img"/>
                
                <p>{item.name}</p>
                
                    {item.attributes.map((el) => 
                    <div key={el.id}><p className="attribute-name">{el.name.toUpperCase()}:</p>
                    {el.items.map((attr) => 
                    <div key={attr.id} className="size">{attr.value}</div>)}
                    </div>)}
                
                <p className="attribute-name">PRICE:</p>
                <p className="price">{currentCurrencySymbol}
                {item.prices.find((item) =>
                    item.currency.label === currentCurrencyLabel).amount}
                </p>
                <button className="button_add_to_cart"
                        onClick={addProductToCart}>ADD TO CART</button>
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
            )
    }
}

Product.contextType = CartContext;

export default (props) => (
    <Product 
    {...props}
    params={useParams()}
/>);