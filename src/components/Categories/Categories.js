import React from "react";
import './categories.css'
import Item from "./Item";

class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            }
        // this.addToOrder=this.addToOrder.bind(this);
    }
    render(){
        // console.log(this.props.items.category)
        return(
            <>
                <h2> {this.props.categoryName} </h2>
                <main>
                    <Item 
                    currency={this.props.currency}
                    items={this.props.items}
                    />
                </main>
            </>
        );
    }

    // addToOrder(item){
    //     this.setState({orders: [...this.state.orders, item]})
    // }
}

export default Categories;