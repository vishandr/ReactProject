import React from "react";
// import './Product.css'
import './Product.css'

class Product extends React.Component{
    render(){
        const item = this.props.items[2]
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
                <p className="price">{item.prices.filter((price)=>price.currency.label.includes(this.props.currency))[0].currency.symbol}
                {item.prices.filter((price)=>price.currency.label.includes(this.props.currency))[0].amount}
                </p>
                <button className="button_add_to_cart">ADD TO CART</button>
                <p>{item.description}</p>
            </div>
            )
    }
}

export default Product;