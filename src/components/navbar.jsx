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
      <header id="wn__header" class="header__area sticky__header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-6 col-lg-2">
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
            <div class="col-md-5 d-none d-lg-block">
              <nav class="mainmenu__nav">
                <ul class="meninmenu d-flex justify-content-center">
                  {/* <li class="drop with--one--item ">
                    <a href="index.html">Home</a>
                  </li> */}

                  <li class="drop">
                    <a>ক্যাটাগরী</a>
                    <div class="megamenu mega03">
                      <ul class="item item03">
                        <li class="title">নতুন বই</li>
                        <li>
                          <Link to={"/shopGrid"}>মুক্তিযুদ্ধ </Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>বিজ্ঞান </Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>পশ্চিম বঙ্গের বই </Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>শিশুতোষ </Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>কিশোর সাহিত্য </Link>
                        </li>
                      </ul>
                      <ul class="item item03">
                        <li>বেস্ট সেলার বই</li>
                        <li>
                          <Link to={"/shopGrid"}>ধর্মিয় বই</Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>নিষিদ্ধ বই</Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>পাঠক কর্নার</Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>ব্লগ</Link>
                        </li>
                      </ul>
                      {/* <ul class="item item03">
                        <li>Collections</li>
                        <li>
                          <Link to={"/shopGrid"}>Science </Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>Fiction/Fantasy</Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>Self-Improvemen</Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>Home & Garden</Link>
                        </li>
                        <li>
                          <Link to={"/shopGrid"}>Humor Books</Link>
                        </li>
                      </ul> */}
                    </div>
                  </li>

                  <li class="drop">
                    <a href="#">প্রকাশনী</a>
                    <div class="megamenu dropdown">
                      <ul class="item item01">
                        <li>
                          <a href="#">বাতিঘর প্রকাশনী</a>
                        </li>
                        <li>
                          <a href="#">জ্ঞান আলো প্রকাশনী</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">লেখক</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-md-6 col-sm-6 col-6 col-lg-5">
              <ul class="header__sidebar__right d-flex justify-content-end align-items-center">
                <form class="form-inline searchAll">
                  <div class="row" style={{ width: 400 }}>
                    <ReactTyped
                      // typedRef={typedRef()}
                      loop={true}
                      loopCount={0}
                      typeSpeed={50}
                      startDelay={0}
                      backSpeed={20}
                      backDelay={2}
                      strings={["পছন্দের বই খুজতে এখানে টাইপ করুন", "Search by books (ex. সময়ের ব্যাবচ্ছেদ)", "Search by Authors (ex. জাফর ইকবাল)", "Search by Publishers (ex. বাতিঘর)"]}
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
                        style={{ width: 300 }}
                        class="form-control mr-sm-2"
                      />
                    </ReactTyped>
                    <button class="btn my-2 my-sm-0" type="submit">
                      Search
                    </button>
                  </div>
                </form>

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

          <div class="row d-none">
            <div class="col-lg-12 d-none">
              <nav class="mobilemenu__nav">
                <ul class="meninmenu">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="about.html">About Page</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                        <ul>
                          <li>
                            <a href="portfolio.html">Portfolio</a>
                          </li>
                          <li>
                            <a href="portfolio-details.html">
                              Portfolio Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout Page</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist Page</a>
                      </li>
                      <li>
                        <a href="error404.html">404 Page</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq Page</a>
                      </li>
                      <li>
                        <a href="team.html">Team Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a to={"/shopGrid"}>Shop</a>
                    <ul>
                      <li>
                        <a to={"/shopGrid"}>Shop Grid</a>
                      </li>
                      <li>
                        <a href="single-product.html">Single Product</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                    <ul>
                      <li>
                        <a href="blog.html">Blog Page</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="mobile-menu d-block d-lg-none" />
        </div>
      </header>
    );
  }
}

export default navbar;
