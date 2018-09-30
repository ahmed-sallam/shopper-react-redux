import React, { Component } from "react";
import Products from "./components/Products";
import ShoppingList from "./components/ShoppingList";
import Summary from "./components/Summary";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shopper</h1>
        <div className="row">
          <Products />
          <ShoppingList />
          <Summary />
        </div>
      </div>
    );
  }
}

export default App;
