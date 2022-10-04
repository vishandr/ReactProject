import React from "react";
import { useQuery } from '@apollo/client'
import { GET_CURRENCY } from '../Apollo/request'
import { CartContext } from '../../contexts/cart-context'
import { useEffect, useRef, useContext, useState } from 'react'
import './currency.css'

function Currency(props){
    const ref = useRef();
    const[isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the menu is open and the clicked target is not within the menu,
      // then close the menu
            if(isOpen && ref.current && !ref.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen]);

    const toggleDropdown = () => {
        (isOpen) ? setIsOpen(false) : setIsOpen(true);
    }

    const { onCurrencySelect, currentCurrencyLabel, currentCurrencySymbol } = useContext(CartContext);

    const { loading, error, data} = useQuery(GET_CURRENCY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return(
        <div className='dropdown-currency' ref={ref} onClick={toggleDropdown}>
        {currentCurrencySymbol}
        {isOpen && (<ul className="currency-select"
            onClick={onCurrencySelect}
            >
            {data.currencies.map(({label, symbol}) => 
            /* <li className="currency-select-option" key={symbol} value={label + symbol}> {symbol} {label} </li>)} */
            <li className="currency-select-option" key={symbol} value={label} symbol={symbol}> {symbol} {label} </li>)}
         </ul>)}
        </div>
    )
}

export default Currency