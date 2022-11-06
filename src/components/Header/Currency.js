import React from "react";
import { useQuery } from '@apollo/client'
import { GET_CURRENCY } from '../Apollo/request'
import { CartContext } from '../../contexts/cart-context'
import { useEffect, useRef, useContext, useState } from 'react'
import './currency.css'

function Currency(props){
    const ref = useRef();
    const ref1 = useRef();
    // const[isOpen, setIsOpen] = useState(false);
    const { isOpen, toggleDropdown, closeCurrencyMenu, onCurrencySelect, currentCurrencySymbol } = useContext(CartContext);
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if(isOpen && ref.current && !ref.current.contains(event.target) && !ref1.current.contains(event.target)){
                closeCurrencyMenu()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen]);

    const { loading, error, data} = useQuery(GET_CURRENCY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    let className = "dropdown-currency";
    if (isOpen){className += ' isActive'}

    return(
        <>
            <div className={className}
                ref={ref1}
                onClick={toggleDropdown}
                >{currentCurrencySymbol}
            </div>
            {isOpen && (<ul className="currency-select" ref={ref}
                onClick={onCurrencySelect}
                >
                {data.currencies.map(({label, symbol}) => 
                <li className="currency-select-option" key={symbol} value={label} symbol={symbol}> {symbol} {label} </li>)}
            </ul>)}
        </>
    )
}

export default Currency