import React from "react";
import { useQuery } from '@apollo/client'
import { GET_ALL_PROD } from "../Apollo/request";
import { BsCart2 } from 'react-icons/bs'


function Item(props){
    
    const { loading, error, data} = useQuery(GET_ALL_PROD);
    if (loading) return <h2>Loading...</h2>;
    if (error) return <p>Error :</p>;
    

    return (
        data.category.products.map(({id, name, gallery, prices}) => 
            // const filteredCurrency = prices.filter((item) => {
            //     return item.currency.label.includes(props.currency)});
        // console.log(filteredCurrency);

        <div className="item" key={id} >
        <a href="/product">
            <img src={gallery[0]} alt={id} />
            <div className="priceBlock">
                <p>{name}</p>
              
                <p>{prices.filter((item) => {
                return item.currency.label.includes(props.currency)
                })[0].currency.symbol}  
                {prices.filter((item) => {
                return item.currency.label.includes(props.currency)
                })[0].amount}</p>


                <div className="addToCart"><BsCart2 /></div>
            </div>
        </a>
    </div>

    )
    )
}

export default Item;