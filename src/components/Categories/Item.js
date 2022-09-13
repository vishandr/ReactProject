import React from "react";
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './item.css'

class Item2 extends React.Component{
    constructor(props){
    super(props)
    // this.state = {
    //     cartItems: [],
    // }
    
}
render(){
// console.log(this.props.item)
const {gallery, id, prices, name } = this.props.item
    return (
        
        <div className="item" >
            {/* <h2>{name}</h2> */}
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
            <div className="addToCart"><BsCart2 /></div>
        </div>
    )
}
}
export default Item2;