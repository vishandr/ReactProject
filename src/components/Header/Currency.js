import React from "react";
import { useQuery } from '@apollo/client'
import { GET_CURRENCY } from '../Apollo/request'
import { CartContext } from '../../contexts/cart-context'
import { useContext, useState } from 'react'
import './currency.css'

function Currency(props){
    const[isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        (isOpen) ? setIsOpen(false) : setIsOpen(true);
    }

    const { onCurrencySelect, currentCurrencyLabel, currentCurrencySymbol } = useContext(CartContext);

    const { loading, error, data} = useQuery(GET_CURRENCY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return(
        <div className='dropdown-currency' onClick={toggleDropdown}>
        {currentCurrencySymbol}
        {isOpen ? (<ul className="currency-select"
            onClick={onCurrencySelect}
            >
            {data.currencies.map(({label, symbol}) => 
            /* <li className="currency-select-option" key={symbol} value={label + symbol}> {symbol} {label} </li>)} */
            <li className="currency-select-option" key={symbol} value={label} symbol={symbol}> {symbol} {label} </li>)}
         </ul>) 
         : null}
          
        </div>
    )
}

export default Currency