import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";

class Product extends Component {
   constructor(props){
       super(props);
   }
  
  render() {
    return (
      <div class="product product__style--3">
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="product__thumb">
            <Link to={"product"} class="first__img" style={{height: 300}}>
              <img src={this.props.image} alt="product image" />
            </Link>
            <Link to={"product"} class="second__img animation1">
              <img src={this.props.image2} alt="product image" />
            </Link>
            <div class="hot__box">
              <p class="hot-label mt-2">{this.props.discount}</p>
            </div>
            <div class="hot__box1 read_little">
              <span class="hot-label">একটু পড়ে দেখুন</span>
            </div>
          </div>
          <div class="product__content content--center">
            <h4>
              <Link to={"product"}>{this.props.name}</Link>
            </h4>
            <ul class="prize d-flex">
              <li>৳{this.props.price}</li>
              <li class="old_prize">৳{this.props.oldPrice}</li>
            </ul>
            <div class="action">
              <div class="actions_inner">
                <ul class="add_to_links">
                  <li>
                    <a class="cart" href="cart.html">
                      <i class="bi bi-shopping-bag4" />
                    </a>
                  </li>
                  <li>
                    <a class="wishlist" href="wishlist.html">
                      <i class="bi bi-shopping-cart-full" />
                    </a>
                  </li>
                  <li>
                    <a class="compare" href="#">
                      <i class="bi bi-heart-beat" />
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="modal"
                      title="Quick View"
                      class="quickview modal-view detail-link"
                      href="#productmodal"
                    >
                      <i class="bi bi-search" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product__hover--content">
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
                <li>
                  <i class="fa fa-star-o" />
                </li>
                <li>
                  <i class="fa fa-star-o" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;