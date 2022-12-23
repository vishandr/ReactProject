import React from "react";
import './Product.css'
import { useParams } from "react-router-dom";
import { CartContext } from '../../contexts/cart-context';

class Product extends React.Component{
    constructor(){
        super();
        this.state = {
            img: '',
        }
    }
    
    setMainImg = (item) => () => {
        this.setState({img: item}); 
    };
    
    render(){
        const { currentCurrencySymbol, 
            currentCurrencyLabel,
            addAttributesToCart,
            addToCartPDP,
            cartItemsAttributes,
            cartItems
        } = this.context;
        
        const {productId} = this.props.params;
        
        const item = this.props.items.find((el) => 
        el.id.includes(productId)
        );

        const addProductToCart = () => {
            addToCartPDP(item);
            console.log(cartItems)
        };

        const addAttr = (item) => {
            addAttributesToCart(item)
        }

        function createMarkup() { 
            return {__html: item.description}; };

        return(
            <div className="product-description-page">
                <div className="gallery">
                    {item.gallery.map((image) =>
                    <img key={image} src={image} className="pdp_img" alt={item.id} onClick={this.setMainImg(image)}/>
                    )}
                </div>
                <div className="main-img-box">
                    <img src={(this.state.img === '' ) ? item.gallery[0] : this.state.img} alt="" className="main_img"/>
                </div>
                <div className="pdp-description-box">
                    <p className="item-brand">{item.brand}</p>
                    <p className="item-name">{item.name}</p>
 
    <div className="pdp-attributes-box">
        {item.attributes.map((el) => 
        <div key={el.id} value={el.id}>
            <p className="attribute-name">{el.name.toUpperCase()}:</p>
            <div className="pdp-attributes-values">
                {el.items.map((attr) => 
                <div key={attr.id} value={attr.value} 
                className={(el.id === 'Color'
                ? ((cartItemsAttributes.find(item => 
                    item.id === el.name && item.item === attr.value))) ? 'size_color active-color' : "size_color"
                :((cartItemsAttributes.find(item => 
                    item.id === el.name && item.item === attr.value))) ? 'size active' : "size")} 
                style={{backgroundColor: attr.value}} 
                onClick={addAttr}
                >
                {(el.name === 'Color') ? null: attr.value }
                </div>)}
            </div>
        </div>)}
    </div>      
                    <p className="attribute-name">PRICE:</p>
                    <div className="price">{currentCurrencySymbol}
                    {item.prices.find((item) =>
                        item.currency.label === currentCurrencyLabel).amount}
                    </div>
                    <button className="button_add_to_cart"
                            onClick={addProductToCart}>ADD TO CART</button>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                </div>
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