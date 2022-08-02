import React from "react";
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from "../Apollo/request";

function ProductDescription(){
const { loading, error, data} = useQuery(GET_CATEGORIES);
    return (
        <div> Hello from ProductDescription 
        </div>
    )
}


export default ProductDescription;