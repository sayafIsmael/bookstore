import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";

class ListBook extends Component {
   constructor(props){
       super(props);
   }
  
  render() {
    return (
        <div class="list__view mt--40">
        <div class="thumb">
          <a class="first__img" href="product">
            <img
              src={this.props.image}
              alt="product images"
              style={{height: '100%'}}
            />
          </a>
          <a class="second__img animation1" href="product">
            <img
              src={this.props.image}
              alt="product images"
              style={{height: '100%'}}
            />
          </a>
        </div>
        <div class="content">
          <h2>
            <a href="product">{this.props.name}</a>
          </h2>
          <ul class="rating d-flex">
            <li class="on">
              <i class="fa fa-star-o" />
            </li>
            <li class="on">
              <i class="fa fa-star-o" />
            </li>
            <li class="on">
              <i class="fa fa-star-o" />
            </li>
            <li class="on">
              <i class="fa fa-star-o" />
            </li>
            <li>
              <i class="fa fa-star-o" />
            </li>
            <li>
              <i class="fa fa-star-o" />
            </li>
          </ul>
          <ul class="prize__box">
          <li>৳{this.props.price}</li>
          <li class="old__prize">৳{this.props.oldprice}</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nam fringilla augue nec est tristique auctor.
            Donec non est at libero vulputate rutrum. Morbi ornare
            lectus quis justo gravida semper. Nulla tellus mi,
            vulputate adipiscing cursus eu, suscipit id nulla.
          </p>
          <ul class="cart__action d-flex">
            <li class="cart">
              <a href="cart.html">Add to cart</a>
            </li>
            <li class="wishlist">
              <a href="cart.html" />
            </li>
            <li class="compare">
              <a href="cart.html" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListBook;