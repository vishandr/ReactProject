import React from "react";
import './Product.css'

class Product extends React.Component{
    render(){
        // console.log(this.props.items[4])
        const item = this.props.items[2]
        // console.log(item.gallery)
        return(
            <div>
                <div className="gallery">
                    {item.gallery.map((image) =>
                    <img key={image} src={image} className="pdp_img" alt={item.id}/>
                    )}
                </div>
                <p>{item.name}</p>
                
                    {item.attributes.map((el) => 
                    <div key={el.id}>{el.name}
                    {el.items.map((attr) => 
                    <div key={attr.id}>{attr.value}</div>)}
                    </div>)}
                
                <p>PRICE:</p>
                <p>{item.prices.filter((price)=>price.currency.label.includes(this.props.currency))[0].currency.symbol}
                {item.prices.filter((price)=>price.currency.label.includes(this.props.currency))[0].amount}
                </p>
                <button>ADD TO CART</button>
                <p>{item.description}</p>
            </div>
            )
    }
}

export default Product;