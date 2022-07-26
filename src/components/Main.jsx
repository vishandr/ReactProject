import React from "react";
import { useQuery } from '@apollo/client'
import { GET_ALL_PROD } from "./Apollo/request";
import App from '../App'
import {CartProvider} from '../contexts/cart-context'

function Main(){
    
    const { loading, error, data} = useQuery(GET_ALL_PROD);
    if (loading) return <h2>Loading...</h2>;
    if (error) return <p>Error :</p>;

    return (
        <CartProvider>
            <App data = {data.category.products}/>
        </CartProvider>
    )
}

export default Main;