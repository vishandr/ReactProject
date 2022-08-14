import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Product from "./components/Product";
import Cart from "./components/Cart";
import {Routes, Route} from 'react-router-dom'

class App extends React.Component {
  constructor (props){
    super(props)
    this.chooseCategory = this.chooseCategory.bind(this);
    this.state = { 
      currentCurrency : '',
      items : this.props.data,
      currentItems : [],
    };
    this.state.currentItems = this.state.items;
  }
  
  onCurrencySelect = (event) => {
    const currentCurrency = event.target.value;
    this.setState(() => {
      return {currentCurrency};
    });
  };
  
  chooseCategory(category){
    if (category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    };
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
    // console.log('currentItems = '+ this.state.currentItems)
      };

  render(){
    return (
      <>
          <Header 
            onChangeHandler = {this.onCurrencySelect}
            chooseCategory = {this.chooseCategory}
            />
          <Routes>
            <Route path="/" element={<Categories 
            currency={this.state.currentCurrency}
            items = {this.state.currentItems}
            />} />
            <Route path="/product" element={<Product 
            items = {this.state.currentItems}
            currency={this.state.currentCurrency}  
            />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
      </>
      
    );
  }
}

export default App;
