import React from "react";
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from "../Apollo/request";


function NavLinks(props){
const { loading, error, data} = useQuery(GET_CATEGORIES);
if (loading) return <h2>Loading...</h2>;
if (error) return <p>Error :</p>;

return (
    data.categories.map(({name}) => 
    <div key={name} className="navLinks" onClick={()=>props.chooseCategory(name)}>
    {name.toUpperCase()}
    </div>)
)
}

export default NavLinks;
