import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import {Routes, Route} from 'react-router-dom'


class App extends React.Component {
  constructor (props){
    super(props)
    this.chooseCategory = this.chooseCategory.bind(this);
    this.state = { 
      currentCurrency : 'USD',
      items : this.props.data,
      currentItems : [],
      currentCategory: 'ALL'
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
      this.setState({currentCategory: "All products"})
      return
    };
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
    this.setState({currentCategory: category})
    // console.log('currentItems = '+ this.state.currentItems)
      };

  render(){
    return (
      <>
          <Header 
            onChangeHandler = {this.onCurrencySelect}
            chooseCategory = {this.chooseCategory}
            currency={this.state.currentCurrency}
            />
          <Routes>
            <Route path="/" element={<Categories 
            currency={this.state.currentCurrency}
            items = {this.state.currentItems}
            categoryName = {this.state.currentCategory}
            />} />
            <Route path="/:productId" element={<Product 
            items = {this.state.currentItems}
            currency={this.state.currentCurrency}  
            />} />
            <Route path="/cart" element={<Cart
              currency={this.state.currentCurrency}
            />} />
            <Route path="*" element={<h2>Page not found</h2>} />
          </Routes>
      </>
      
    );
  }
}

export default App;
