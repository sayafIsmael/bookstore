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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import ReactTyped from "react-typed";
import FontAwesome from "react-fontawesome";

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
      cart: false,
      setting: false,
      category: false,
      writer: false,
      reader: false,
      ovijatri: false,
      bookfair: false,
      publisher: false,
      menuOpend: false,
      pmenuOpend: false,
      catclicked: false
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

  sidebar = () => {
    return <div />;
  };

  category = () => {
    if (this.state.category === true) {
      return (
        <nav class="navbar navbar-expand-lg navbar-light nav-category">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#categoryNav"
            aria-controls="categoryNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-center"
            id="categoryNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  নতুন বই
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  ধ্রূপদী সাহিত্য
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  শিশুতোষ
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  বিজ্ঞান
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  রাজনীতি
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  কিশোর সাহিত্য
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  ধর্মীয় বই
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  মুক্তিযুদ্ধ
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  পশিম বঙ্গের বই
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  নিষিদ্ধ বই
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shopGrid">
                  পাঠ্য বই
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  };

  allCategory = () =>{
    if(this.state.catclicked === true){
      return(
        <div class="ml-4">
          <a style={{fontSize: 16}}>নতুন বই</a>
          <a style={{fontSize: 16}}>ধ্রূপদী সাহিত্য</a>
          <a style={{fontSize: 16}}>শিশুতোষ</a>
          <a style={{fontSize: 16}}>বিজ্ঞান</a>
          <a style={{fontSize: 16}}>রাজনীতি</a>
          <a style={{fontSize: 16}}>কিশোর সাহিত্য</a>
          <a style={{fontSize: 16}}>ধর্মীয় বই</a>
          <a style={{fontSize: 16}}>মুক্তিযুদ্ধ</a>
          <a style={{fontSize: 16}}>পশিম বঙ্গের বই</a>
          <a style={{fontSize: 16}}>নিষিদ্ধ বই</a>
          <a style={{fontSize: 16}}>পাঠ্য বই</a>
        </div>
      )
    }
  }

  render() {
    return (
      <header id="wn__header" class="header__area " style={{ zIndex: 1000 }}>
        <BrowserView>
          <div class="sticky__header" style={{ backgroundColor: "#C67935" }}>
            <div class="container-fluid">
              <div class="row d-flex align-items-center">
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
                  <ul class="header__sidebar__right d-flex align-items-center mt-auto mb-auto">
                    <form
                      class="form-inline searchAll"
                      style={{ width: "100%" }}
                    >
                      <div
                        class="row m-0"
                        style={{
                          width: "100%",
                          backgroundColor: "white",
                          borderRadius: 26
                        }}
                      >
                        <ReactTyped
                          // typedRef={typedRef()}
                          loop={true}
                          loopCount={0}
                          typeSpeed={50}
                          startDelay={0}
                          backSpeed={20}
                          backDelay={2}
                          strings={["পছন্দের বই টাইপ করুন সময়ের ব্যবচ্ছেদ"]}
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
                            style={{
                              width: "100%",
                              border: "none",
                              height: 53
                            }}
                            class="form-control mr-sm-2"
                          />
                        </ReactTyped>
                        <button
                          class="btn my-2 my-sm-0 search-btn"
                          type="submit"
                        >
                          <FontAwesome
                            name="search"
                            style={{ color: "white" }}
                          />
                        </button>
                      </div>
                    </form>
                  </ul>
                </div>
                <div class="col-md-4">
                  <ul class="header__sidebar__right d-flex justify-content-center align-items-center">
                    <li class="pr-3">
                      <a href="#">
                        <img
                          src="images/icons/wish.png"
                          style={{ width: 50, height: 50 }}
                        />
                      </a>
                    </li>
                    <li class="shopcart">
                      <a
                        class="cartbox_active"
                        href="#"
                        onClick={() =>
                          this.setState({ cart: !this.state.cart })
                        }
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
          <nav class="navbar navbar-expand-lg navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div
              class="collapse navbar-collapse d-flex "
              id="navbarNav"
              style={{ borderBottom: "2px solid #C67935" }}
            >
              <ul class="navbar-nav ml-auto mr-auto">
                <li
                  class="nav-item"
                  onClick={() =>
                    this.setState({
                      category: true,
                      writer: false,
                      publisher: false,
                      reader: false,
                      ovijatri: false,
                      bookfair: false
                    })
                  }
                >
                  <a class="nav-link" href="#">
                    ক্যাটাগরি <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li
                  class="nav-item "
                  onClick={() =>
                    this.setState({
                      category: false,
                      writer: true,
                      publisher: false,
                      reader: false,
                      ovijatri: false,
                      bookfair: false
                    })
                  }
                >
                  <a class="nav-link" href="#">
                    প্রাতিষ্ঠানিক অর্ডার
                  </a>
                </li>
                <li
                  class="nav-item "
                  onClick={() =>
                    this.setState({
                      category: false,
                      writer: true,
                      publisher: false,
                      reader: false,
                      ovijatri: false,
                      bookfair: false
                    })
                  }
                >
                  <a class="nav-link" href="#">
                    লেখক
                  </a>
                </li>
                <li
                  class="nav-item"
                  onClick={() =>
                    this.setState({
                      category: false,
                      writer: false,
                      publisher: true,
                      reader: false,
                      ovijatri: false,
                      bookfair: false
                    })
                  }
                >
                  <a class="nav-link" href="#">
                    প্রকাশনী
                  </a>
                </li>
                <li
                  class="nav-item"
                  onClick={() =>
                    this.setState({
                      category: false,
                      writer: false,
                      publisher: false,
                      reader: true,
                      ovijatri: false,
                      bookfair: false
                    })
                  }
                >
                  <a class="nav-link" href="#">
                    পাঠক কর্নার
                  </a>
                </li>
                <li
                  class="nav-item"
                  onClick={() =>
                    this.setState({
                      category: false,
                      writer: false,
                      publisher: false,
                      reader: false,
                      ovijatri: true,
                      bookfair: false
                    })
                  }
                >
                  <a class="nav-link" href="#">
                    অভিযাত্রী
                  </a>
                </li>
                <li
                  class="nav-item"
                  onClick={() =>
                    this.setState({
                      category: false,
                      writer: false,
                      publisher: false,
                      reader: false,
                      ovijatri: false,
                      bookfair: true
                    })
                  }
                >
                  <a class="nav-link" href="#">
                    বইমেলা
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {this.category()}
        </BrowserView>
        <MobileView>
          <div
            id="mySidenav"
            class="sidenav"
            style={{ width: this.state.menuOpend ? 250 : 0, zIndex: 2000 }}
          >
            <a
              href="javascript:void(0)"
              class="closebtn"
              onClick={() =>
                this.setState({ menuOpend: !this.state.menuOpend })
              }
            >
              &times;
            </a>
            <div class="row m-0 d-flex justify-content-between align-items-center" onClick={()=> this.setState({catclicked: !this.state.catclicked})} >
            <a href="#">ক্যাটাগরি </a>
            <FontAwesome
        name={this.state.catclicked?'angle-down':'angle-right'}
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingRight: 10}}
      />
            </div>
            
            {this.allCategory()}
            <a href="#">প্রাতিষ্ঠানিক অর্ডার</a>
            <a href="#">লেখক</a>
            <a href="#">প্রকাশনী</a>
            <a href="#">পাঠক কর্নার</a>
            <a href="#">অভিযাত্রী</a>
            <a href="#">বইমেলা</a>
          </div>
          <div
            id="profileSidenav"
            class="sidenav2"
            style={{ width: this.state.pmenuOpend ? 250 : 0, zIndex: 2000 }}
          >
            <a
              href="javascript:void(0)"
              class="closebtn"
              onClick={() =>
                this.setState({ pmenuOpend: !this.state.pmenuOpend })
              }
            >
              &times;
            </a>
            <a href="#">User</a>
            <a href="#">Logout</a>
          </div>
          <div
            class="row m-0 sticky__header d-flex align-items-center"
            style={{ background: "#C67935" }}
          >
            <div class="mt-auto mb-auto pl-3">
              <span
                style={{ fontSize: 30, cursor: "pointer" }}
                onClick={() =>
                  this.setState({ menuOpend: !this.state.menuOpend })
                }
              >
                &#9776;
              </span>
            </div>
            <div class="logo">
              <a href="/">
                <img
                  class="siteLogomb"
                  src="images/logo/logoText.png"
                  alt="Gronthik"
                  id="siteLogo"
                />
              </a>
            </div>
            <div class="row d-flex align-items-center ml-2">
              <img
                class="ml-5"
                src="images/icons/wish.png"
                style={{ width: 50, height: 50 }}
              />

              <a href="/cart">
                <img
                  style={{ width: 30, height: 30 }}
                  src="images/icons/cart.png"
                />
                <span
                  class="badge badge-danger"
                  style={{ position: "relative", right: 8 }}
                >
                  3
                </span>
              </a>

              <FontAwesome
                name="fas fa-user"
                size="2x"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                onClick={() =>
                  this.setState({ pmenuOpend: !this.state.pmenuOpend })
                }
              />
            </div>
          </div>
          <div
                        class="row m-0 d-flex align-items-center ml-3 mt-2"
                        style={{
                          width: "90%",
                          backgroundColor: "white",
                          borderRadius: 26,
                          border: '1px solid gray',
                        }}
                      >
                        <ReactTyped
                          // typedRef={typedRef()}
                          loop={true}
                          loopCount={0}
                          typeSpeed={50}
                          startDelay={0}
                          backSpeed={20}
                          backDelay={2}
                          strings={["পছন্দের বই টাইপ করুন "]}
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
                            style={{
                              width: "100%",
                              border: "none",
                              height: 35,
                            }}
                            class="form-control mr-sm-2"
                          />
                        </ReactTyped>
                        <button
                          class="btn my-2 my-sm-0 search-btn"
                          type="submit"
                          style={{top: 0, position: 'relative', right: 10}}
                        >
                          <FontAwesome
                            name="search"
                            style={{ color: "white" }}
                          />
                        </button>
                      </div>
        </MobileView>
      </header>
    );
  }
}

export default navbar;
