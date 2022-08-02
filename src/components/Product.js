import React from "react";
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from "./Apollo/request";


function ProductDescription(){
const { loading, error, data} = useQuery(GET_CATEGORIES);
if (loading) return <h2>Loading...</h2>;
if (error) return <p>Error :</p>;

// console.log(data.categories.map((name) => `name is`+ {name}));
return (
    data.categories.map(({name}) => 
    <div key={name}>
        {name}
    </div>)
)
}


class Product extends React.Component{
    render(){
        return(
            <div>
                This is Product Description
                {/* <ul> */}
                <ProductDescription />
                {/* </ul> */}
            </div>
        )
    }
}

export default Product;