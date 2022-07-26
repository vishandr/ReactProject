import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";

class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <Categories />
      </>

    );
  }
}

export default App;
