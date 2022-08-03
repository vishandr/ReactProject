import React from "react";
import { useQuery } from '@apollo/client'
import { GET_CURRENCY } from '../Apollo/request'

function Currency(){
    const { loading, error, data} = useQuery(GET_CURRENCY);
    if (loading) return <h2>Loading...</h2>;
    if (error) return <p>Error :</p>;
    return(
        <select>
            {data.currencies.map(({label, symbol}) => 
            <option className="option" key={label} value= {label}> {symbol} {label} </option>)}
        </select>
    )
}


// class  extends React.Component{
//     constructor (props){
//         super(props)
//         this.state = {
//             currencies: 
//                 {
//                 "label": "USD",
//                 "symbol": "$"
//                 }
//         }
//         componentDidMount(){
//             fetch("http://localhost:4000/")
//             .then((response) => console.log(response))
//             // .then(console.log)
//             // .then(currenciesList => {
//             //     this.setState({ currencies: currenciesList });
//             // });
//             }
//         }
//         // console.log(fetchCurrencies)
//     }

    
//     render(){
        
//     }
// };


export default Currency