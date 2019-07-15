import React, { Component } from "react";
import {
  Route,
  BrowserRouter
  // Link,
  // NavLink,
  // Redirect,
  // Prompt
} from "react-router-dom";
import Footer from "./components/footer";

import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/home";
import Navbar from "./components/navbar";
import MainSlider from "./components/mainSlider";
import SingleProduct from "./components/singleProduct";
import ShopGrid from "./components/shopGrid";
import Signin from "./components/signin";
import Shopingcart from "./components/shopingcart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class="wrapper" id="wrapper">
          <Navbar />

          <Route
            exact
            path="/"
            exact
            strict
            render={props => <Home {...props} />}
          />

          <Route
            exact
            path="/product"
            exact
            strict
            render={props => <SingleProduct />}
          />

          <Route
            exact
            path="/shopGrid"
            exact
            strict
            render={props => <ShopGrid />}
          />

          <Route
            exact
            path="/signin"
            exact
            strict
            render={props => <Signin />}
          />

          <Route
            exact
            path="/cart"
            exact
            strict
            render={props => <Shopingcart />}
          />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
