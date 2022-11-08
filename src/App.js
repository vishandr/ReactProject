import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import {Routes, Route, useNavigate} from 'react-router-dom';


class App extends React.Component {
  constructor (props){
    super(props)
    this.chooseCategory = this.chooseCategory.bind(this);
    this.state = { 
      items : this.props.data,
      currentItems : [],
      currentCategory: 'ALL'
    };
    this.state.currentItems = this.state.items;
  }
  
  chooseCategory(category){
    const navigate = this.props.navigate;
    navigate('/');
    if (category === 'all'){
      this.setState({currentItems: this.state.items})
      this.setState({currentCategory: "All products"})
      return
    };
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
    this.setState({currentCategory: category})
      };

  render(){
    
    return (
      <>
          <Routes>
            <Route path="/" element={<Header chooseCategory = {this.chooseCategory}/>}>
              <Route index element={<Categories 
              items = {this.state.currentItems}
              categoryName = {this.state.currentCategory}
              />} />
              <Route path="/:productId" element={<Product 
              items = {this.state.currentItems}
              />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="*" element={<h2>Page not found</h2>} />
            </Route>
          </Routes>
      </>
      
    );
  }
}

// export default App;

export default (props) => (
  <App 
  {...props}
  navigate={useNavigate()}
/>);
