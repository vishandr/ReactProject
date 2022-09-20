import React from "react";
import './categories.css'
import Item from "./Item";
// import Item2 from "./Item2";

class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // orders: [],
            }
        // this.addToOrder=this.addToOrder.bind(this);
    }
    render(){   
        return(
            <>
                <h2> {this.props.categoryName} </h2>
                <main>
                    {this.props.items.map((item) => 
                    <Item key={item.id}
                        item={item}
                        currency={this.props.currency}
                    />
                    )}
                </main>
            </>
        );
    }

    // addToOrder(item){
    //     this.setState({orders: [...this.state.orders, item]})
    // }
}

export default Categories;