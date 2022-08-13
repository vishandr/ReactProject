import React from "react";
import './categories.css'
import goods from '../Goods/goods.json'
// import Items from "./Items";
import Item2 from "./Item2";

class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            items: goods
            }
        this.addToOrder=this.addToOrder.bind(this);
        // console.log(this.props.currency)
    }
    render(){
        return(
            <>
                <h2> Category name </h2>
                {/* <Items items={this.state.items} onAdd={this.addToOrder}/> */}
                <main>
                    <Item2 currency={this.props.currency}/>
                </main>
            </>
        );
    }

    addToOrder(item){
        this.setState({orders: [...this.state.orders, item]})
    }
}

export default Categories;