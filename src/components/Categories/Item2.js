import React from "react";
import { useQuery } from '@apollo/client'
import { GET_ALL_PROD } from "../Apollo/request";


function Item2(){
const { loading, error, data} = useQuery(GET_ALL_PROD);
if (loading) return <h2>Loading...</h2>;
if (error) return <p>Error :</p>;
return (
    data.category.products.map(({id, name, gallery}) => 
    
    <div className="item" key={id} >
        <a href="/product">
            <img src={gallery[0]} alt="" />
            <div className="priceBlock">
                <p>{name}</p>
                {/* <h3>{this.props.item.price}</h3> */}
                </div>
        </a>
    </div>
    )
    // data.category.map(({name}) => 
    // <li key={name}>
    //     <a href="/">{name.toUpperCase()}</a>
    // </li>)
)
}

export default Item2;