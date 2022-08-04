import React from "react";
import { useQuery } from '@apollo/client'
import { GET_CURRENCY } from '../Apollo/request'
import { useState } from 'react'


function Currency(){
    const [value, setValue] = useState('USD');
    
    function changeSelect(event) {
        setValue(event.target.value);
     }

    const { loading, error, data} = useQuery(GET_CURRENCY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return(
        <select value={value} onChange={(event) => setValue(event.target.value)}>
            {data.currencies.map(({label, symbol}) => 
            <option className="option" key={label} value= {label}> {symbol} {label} </option>)}
        </select>
    )
}

export default Currency