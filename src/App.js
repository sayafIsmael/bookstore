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
import { Style } from "react-style-tag";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import loadjs from "loadjs";

class App extends Component {
  componentWillMount() {
    loadjs("js/vendor/modernizr-3.5.0.min.js", function() {
      loadjs("js/vendor/jquery-3.2.1.min.js", function() {
        loadjs("js/popper.min.js", function() {
          loadjs("js/plugins.js", function() {
            loadjs("js/bootstrap.min.js", function() {
              loadjs("js/active.js", function() {
                loadjs("js/main.js");
              });
            });
          });
        });
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div class="wrapper" id="wrapper">

        <MobileView>
        {/* <Style>{`
          .slick-slide{
            width: 125px;
          }
        `}</Style> */}
        </MobileView>

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
            render={props => <SingleProduct {...props}/>}
          />

          <Route
            exact
            path="/shopGrid"
            exact
            strict
            render={props => <ShopGrid {...props}/>}
          />

          <Route
            exact
            path="/signin"
            exact
            strict
            render={props => <Signin {...props}/>}
          />

          <Route
            exact
            path="/cart"
            exact
            strict
            render={props => <Shopingcart {...props}/>}
          />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
