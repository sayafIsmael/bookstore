import React, { Component } from "react";
import loadjs from "loadjs";

import {
  HashRouter as Router,
  Route,
  Link
  // NavLink,
  // Redirect,
  // Prompt
} from "react-router-dom";
import ReactTyped from "react-typed";
import FontAwesome from "react-fontawesome";

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
      cart: false,
      setting: false
    };
  }

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

  logedIn = () => {
    if (this.state.logedIn === true) {
      return (
        <React.Fragment>
          <strong class="label switcher-label">
            <span>My Account</span>
          </strong>
          <span>
            <a href="#">My Wishlist</a>
          </span>
          <span>
            <a href="#">Logout</a>
          </span>
        </React.Fragment>
      );
    }
  };

  logIn = () => {
    if (this.state.logedIn === false) {
      return (
        <React.Fragment>
          <span>
            <Link to={"signin"}>Sign In</Link>
          </span>
          <span>
            <Link to={"signin"}>Create An Account</Link>
          </span>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <header id="wn__header" class="header__area ">
        <div style={{backgroundColor: '#C67935'}}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="logo">
                <a href="/">
                  <img
                    class="siteLogo"
                    src="images/logo/logoText.png"
                    alt="Gronthik"
                    id="siteLogo"
                  />
                </a>
              </div>
            </div>
           
            <div class="col-md-5">
              <ul class="header__sidebar__right d-flex align-items-center">
                <form class="form-inline searchAll"  style={{ width: "100%" }}>
                  <div class="row m-0"  style={{ width: "100%", backgroundColor: 'white', borderRadius: 26}}>
                    <ReactTyped
                      // typedRef={typedRef()}
                      loop={true}
                      loopCount={0}
                      typeSpeed={50}
                      startDelay={0}
                      backSpeed={20}
                      backDelay={2}
                      strings={["পছন্দের বই টাইপ করুন সময়ের ব্যবচ্ছেদ", ]}
                      stopped={null}
                      smartBackspace
                      shuffle={false}
                      fadeOut={false}
                      fadeOutDelay={100}
                      attr="placeholder"
                      bindInputFocusEvents={false}
                    >
                      <input
                        type="search"
                        style={{ width: "100%", border: 'none', height: 53}}
                        class="form-control mr-sm-2"
                      />
                    </ReactTyped>
                    <button class="btn my-2 my-sm-0 search-btn" type="submit" >
                    <FontAwesome name='search' style={{color: 'white'}}/>
                    </button>
                  </div>
                </form>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="header__sidebar__right d-flex justify-content-center align-items-center">
                <li class="wishlist">
                  <a href="#" />
                </li>
                <li class="shopcart">
                  <a
                    class="cartbox_active"
                    href="#"
                    onClick={() => this.setState({ cart: !this.state.cart })}
                  >
                    <span class="product_qun">3</span>
                  </a>

                  <div
                    class={
                      this.state.cart === true
                        ? "block-minicart minicart__active is-visible "
                        : "block-minicart minicart__active  "
                    }
                  >
                    <div class="minicart-content-wrapper">
                      <div
                        class="micart__close"
                        onClick={() =>
                          this.setState({ cart: !this.state.cart })
                        }
                      >
                        <span>close</span>
                      </div>
                      <div class="items-total d-flex justify-content-between">
                        <span>3 items</span>
                        <span>Cart Subtotal</span>
                      </div>
                      <div class="total_amount text-right">
                        <span>$66.00</span>
                      </div>
                      <div class="mini_action checkout">
                        <Link
                          class="checkout__btn"
                          to={"cart"}
                          onClick={() =>
                            this.setState({ cart: !this.state.cart })
                          }
                        >
                          Go to Checkout
                        </Link>
                      </div>
                      <div class="single__items">
                        <div class="miniproduct">
                          <div class="item01 d-flex">
                            <div class="thumb">
                              <a href="product-details.html">
                                <img
                                  src="images/product/sm-img/1.jpg"
                                  alt="product images"
                                />
                              </a>
                            </div>
                            <div class="content">
                              <h6>
                                <a href="product-details.html">
                                  Voyage Yoga Bag
                                </a>
                              </h6>
                              <span class="prize">$30.00</span>
                              <div class="product_prize d-flex justify-content-between">
                                <span class="qun">Qty: 01</span>
                                <ul class="d-flex justify-content-end">
                                  <li>
                                    <a href="#">
                                      <i class="zmdi zmdi-settings" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="zmdi zmdi-delete" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="item01 d-flex mt--20">
                            <div class="thumb">
                              <a href="product-details.html">
                                <img
                                  src="images/product/sm-img/3.jpg"
                                  alt="product images"
                                />
                              </a>
                            </div>
                            <div class="content">
                              <h6>
                                <a href="product-details.html">
                                  Impulse Duffle
                                </a>
                              </h6>
                              <span class="prize">$40.00</span>
                              <div class="product_prize d-flex justify-content-between">
                                <span class="qun">Qty: 03</span>
                                <ul class="d-flex justify-content-end">
                                  <li>
                                    <a href="#">
                                      <i class="zmdi zmdi-settings" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="zmdi zmdi-delete" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="item01 d-flex mt--20">
                            <div class="thumb">
                              <a href="product-details.html">
                                <img
                                  src="images/product/sm-img/2.jpg"
                                  alt="product images"
                                />
                              </a>
                            </div>
                            <div class="content">
                              <h6>
                                <a href="product-details.html">
                                  Compete Track Tote
                                </a>
                              </h6>
                              <span class="prize">$40.00</span>
                              <div class="product_prize d-flex justify-content-between">
                                <span class="qun">Qty: 03</span>
                                <ul class="d-flex justify-content-end">
                                  <li>
                                    <a href="#">
                                      <i class="zmdi zmdi-settings" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="zmdi zmdi-delete" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mini_action cart">
                        <Link
                          class="cart__btn"
                          to={"cart"}
                          onClick={() =>
                            this.setState({ cart: !this.state.cart })
                          }
                        >
                          View and edit cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="setting__bar__icon"
                  onClick={() =>
                    this.setState({ setting: !this.state.setting })
                  }
                >
                  <a class="setting__active is-visible" href="#" />
                  <div
                    class={
                      this.state.setting === true
                        ? "searchbar__content setting__block is-visible"
                        : "searchbar__content setting__block"
                    }
                  >
                    <div class="content-inner">
                      <div class="switcher-currency">
                        <div class="switcher-options">
                          <div class="switcher-currency-trigger">
                            <div class="setting__menu">
                              {this.logedIn()}
                              {this.logIn()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>


          <div class="mobile-menu d-block d-lg-none" />
        </div>
        </div>
      </header>
    );
  }
}

export default navbar;
