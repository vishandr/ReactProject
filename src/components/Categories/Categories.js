import React from "react";
import './categories.css'
import Item from "./Item";

class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            }
    }
    render(){   
        return(
            <>
                <h2> {this.props.categoryName} </h2>
                <main>
                    {this.props.items.map((item) => 
                    <Item key={item.id}
                        item={item}
                    />
                    )}
                </main>
            </>
        );
    }
}

export default Categories;