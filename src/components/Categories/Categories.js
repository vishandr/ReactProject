import React from "react";
import './categories.css'
import goods from '../Goods/goods.json'
import Item from "./Item";

class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            }
        this.addToOrder=this.addToOrder.bind(this);
    }
    render(){
        return(
            <>
                <h2> Category name </h2>
                <main>
                    <Item currency={this.props.currency}/>
                </main>
            </>
        );
    }

    addToOrder(item){
        this.setState({orders: [...this.state.orders, item]})
    }
}

export default Categories;