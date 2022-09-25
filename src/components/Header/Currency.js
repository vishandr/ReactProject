import React from "react";
import { useQuery } from '@apollo/client'
import { GET_CURRENCY } from '../Apollo/request'
import { CartContext } from '../../contexts/cart-context'
import { useContext } from 'react'

function Currency(props){
    const { onCurrencySelect } = useContext(CartContext);

    const { loading, error, data} = useQuery(GET_CURRENCY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return(
          <select 
            onChange={onCurrencySelect}>
            {data.currencies.map(({label, symbol}) => 
            <option className="option" key={symbol} value={label + symbol}> {symbol} {label} </option>)}
        </select>
    )
}

export default Currency