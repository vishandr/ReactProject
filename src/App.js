import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Product from "./components/Product";
import Cart from "./components/Cart";
import {Routes, Route} from 'react-router-dom'

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = { currentCurrency : 'USD'};
      }

      onCurrencySelect = (event) => {
        const currentCurrency = event.target.value;
        this.setState(() => {
          return {currentCurrency};
        });
      }

  render(){
    return (
      <>
          <Header onChangeHandler = {this.onCurrencySelect}/>
          <Routes>
            <Route path="/" element={<Categories/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
      </>
      
    );
  }
}

export default App;
