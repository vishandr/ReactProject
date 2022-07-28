import React from "react";

class Item extends React.Component{
    render(){
        return(
            <div className="item">
                <a href="/product">
                <img src={this.props.item.image} alt={this.props.item.title} />
                <div className="priceBlock">
                    <p>{this.props.item.title}</p>
                    <h3>{this.props.item.price}</h3>
                </div>
                </a>
            </div>
            )}        
    }


export default Item;