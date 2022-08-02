import React from "react";
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from "../Apollo/request";


function NavLinks(){
const { loading, error, data} = useQuery(GET_CATEGORIES);
if (loading) return <h2>Loading...</h2>;
if (error) return <p>Error :</p>;

return (
    data.categories.map(({name}) => 
    <li key={name}>
        <a href="/">{name.toUpperCase()}</a>
    </li>)
)
}

export default NavLinks;
