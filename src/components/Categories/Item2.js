import React from "react";
import { useQuery } from '@apollo/client'
import { GET_ALL_PROD } from "../Apollo/request";
import { BsCart2 } from 'react-icons/bs'


function Item2(){
const { loading, error, data} = useQuery(GET_ALL_PROD);
if (loading) return <h2>Loading...</h2>;
if (error) return <p>Error :</p>;
// console.log(data.category.products)
console.log({data})
return (
    data.category.products.map(({id, name, gallery, prices}) => 
    
    <div className="item" key={id} >
        <a href="/product">
            <img src={gallery[0]} alt="" />
            <div className="priceBlock">
                <p>{name}</p>
                <p>{prices[0].currency.symbol}{prices[0].amount}</p>
                <div className="addToCart"><BsCart2 /></div>
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