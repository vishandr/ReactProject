import React from "react";
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './item.css'

class Item extends React.Component{
  
render(){
    return (
        this.props.items.map(({id, name, gallery, prices}) => 
            <div className="item" key={id} >
                <Link to={`/${id}`}
                className='item-link'>
            
                <img src={gallery[0]} alt={id} />
                <div className="priceBlock">
                    <p>{name}</p>
                
                    <p>{prices.filter((item) => {
                    return item.currency.label.includes(this.props.currency)
                    })[0].currency.symbol}  
                    {prices.filter((item) => {
                    return item.currency.label.includes(this.props.currency)
                    })[0].amount}</p>

                    <div className="addToCart"><BsCart2 /></div>
                </div>
            </Link>
        </div>
    )
    )
}
}

export default Item;