import React, { Component } from "react";
import loadjs from "loadjs";
import axios from "axios";

import {
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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBooks, fetchBook, deleteFromCart} from "../actions/bookActions";

import ReactTyped from "react-typed";
import FontAwesome from "react-fontawesome";
import * as helper from "./../helper";

Array.prototype.sum = function(prop) {
  var total = 0;
  for (var i = 0, _len = this.length; i < _len; i++) {
    total += this[i][prop];
  }
  return total;
};

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
      cart: false,
      setting: false,
      menuOpend: false,
      pmenuOpend: false,
      catclicked: false,
      mouseOverAuthor: false,
      mouseClickedAuthor: false,
      mouseOverPublisher: false,
      mouseClickedPublisher: false,
      authors: null,
      publishers: null
    };
    this.fetch_authors();
    this.fetch_publishers();
    console.log("Cart from state ", this.props.cart);
  }

  // componentWillMount() {
  //   loadjs("js/vendor/modernizr-3.5.0.min.js", function() {
  //     loadjs("js/vendor/jquery-3.2.1.min.js", function() {
  //       loadjs("js/popper.min.js", function() {
  //         loadjs("js/plugins.js", function() {
  //           loadjs("js/bootstrap.min.js", function() {
  //             loadjs("js/active.js", function() {
  //               loadjs("js/main.js");
  //             });
  //           });
  //         });
  //       });
  //     });
  //   });
  // }

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

  cart = () => {
    if (this.state.cart === true && this.props.cart != null) {
      return (
        <div class="block-minicart minicart__active is-visible ">
          <div class="minicart-content-wrapper">
            <div
              class="micart__close"
              onClick={() => this.setState({ cart: !this.state.cart })}
            >
              <span>close</span>
            </div>
            <div style={{height: 380, overflowY: 'scroll'}}>
            {this.props.cart.map((book, index) => {
              return(
                <div class="single__items">
              <div class="miniproduct">
                <div class="item01 d-flex">
                  <div class="thumb">
                    <Link to="/product" 
                    onClick={() => {
                      this.props.fetchBook(
                        helper.prefix + "book/singlebook/" + book.id
                      );
                    }}
                    >
                      <object data={book.cover} type="image/jpg" style={{height: 100, width: 70}} >
                          <img src="images/books/dummy.png" />
                      </object>
                    </Link>
                  </div>
                  <div class="content">
                    <h6>
                      <Link to="/product" onClick={() => {
                      this.props.fetchBook(
                        helper.prefix + "book/singlebook/" + book.id
                      );
                    }}>{book.title}</Link>
                    </h6>
                    <span class="prize">৳{book.new_price}</span>
                    <div class="product_prize d-flex justify-content-between">
                      <span class="qun">Qty: {book.quantity}</span>
                      <ul class="d-flex justify-content-end">
                        <li>
                          <span href="#"
                          onClick={() => {
                            this.props.deleteFromCart(index)
                          }}
                          >
                            <i class="zmdi zmdi-delete" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              )
            })}
            </div>
            <div class="items-total d-flex justify-content-between">
              <span>{this.props.cart.length} items</span>
              <span>Cart Subtotal</span>
            </div>
            <div class="total_amount text-right">
              <span>৳{parseFloat(this.props.cart.sum("new_price")).toFixed(2)}</span>
            </div>
            <div class="mini_action checkout">
              <Link
                class="checkout__btn"
                to={"cart"}
                onClick={() => this.setState({ cart: !this.state.cart })}
              >
                Go to Checkout
              </Link>
            </div>
          </div>
        </div>
      );
    }
  };
  category = () => {
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
          style={{ borderTop: "1px solid #C67935" }}
        >
          <ul class="navbar-nav">
            <li
              class="nav-item"
              onClick={() => {
                this.setState({
                  mouseClickedAuthor: !this.state.mouseClickedAuthor,
                  mouseClickedPublisher: false
                });
              }}
              onMouseOver={() => this.setState({ mouseOverAuthor: true })}
              onMouseOut={() => this.setState({ mouseOverAuthor: false })}
            >
              <p class={"nav-link"} style={{ cursor: "pointer" }}>
                লেখক{" "}
                <FontAwesome
                  name={
                    this.state.mouseClickedAuthor == true
                      ? "angle-up"
                      : "angle-down"
                  }
                  style={{
                    color:
                      this.state.mouseOverAuthor == true ? "#C67935" : "black",
                    fontSize: 14
                  }}
                />
              </p>
            </li>
            <li
              class="nav-item"
              onMouseOver={() => {
                this.setState({ mouseOverPublisher: true });
              }}
              onMouseOut={() => {
                this.setState({ mouseOverPublisher: false });
              }}
              onClick={() => {
                this.setState({
                  mouseClickedPublisher: !this.state.mouseClickedPublisher,
                  mouseClickedAuthor: false
                });
              }}
            >
              <p class={"nav-link"}>
                প্রকাশনী{" "}
                <FontAwesome
                  name={
                    this.state.mouseClickedPublisher == true
                      ? "angle-up"
                      : "angle-down"
                  }
                  style={{
                    color:
                      this.state.mouseOverPublisher == true
                        ? "#C67935"
                        : "black",
                    fontSize: 14
                  }}
                />
              </p>
            </li>
            <li class="nav-item">
              <Link class={"nav-link"} to="/shopGrid">
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
  };

  fetch_authors = () => {
    fetch(helper.prefix + "authors", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // 'Authorization': 'Bearer ' + user.success.token,
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          let authors = helper
            .breakArrayIntoGroups(responseJson.authors, 8)
            .slice(0, 4);
          console.log("Is found authors", authors);
          this.setState({ authors: authors });
        }
      })
      .catch(error => {
        //this.setState({loading:false})
        console.log(error);
      });
  };
  fetch_publishers = () => {
    fetch(helper.prefix + "publishers", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // 'Authorization': 'Bearer ' + user.success.token,
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          let publishers = helper
            .breakArrayIntoGroups(responseJson.publishers, 8)
            .slice(0, 4);
          console.log(publishers);
          this.setState({ publishers: publishers });
        }
      })
      .catch(error => {
        //this.setState({loading:false})
        console.log(error);
      });
  };
  authors = () => {
    if (this.state.mouseClickedAuthor == true && this.state.authors != null) {
      return (
        <div class="row ml-5 mr-5 mega-menu">
          {this.state.authors.map((group, i) => {
            return (
              <div class="col-md-3 " key={i}>
                <ul>
                  {group.map((author, index) => {
                    return (
                      <li class="mt-2 mb-2" key={index}>
                        <Link
                          to="/shopGrid"
                          onClick={() => {
                            this.setState({ mouseClickedAuthor: false });
                            this.props.fetchBooks(
                              helper.prefix + "author/books/" + author.id
                            );
                          }}
                        >
                          <FontAwesome
                            name="circle"
                            style={{
                              color: "black",
                              marginRight: 10,
                              fontSize: 7
                            }}
                          />{" "}
                          {author.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      );
    }
  };

  publishers = () => {
    if (
      this.state.mouseClickedPublisher == true &&
      this.state.publishers != null
    ) {
      return (
        <div class="row ml-5 mr-5 mega-menu">
          {this.state.publishers.map((group, i) => {
            return (
              <div class="col-md-3 " key={i}>
                <ul>
                  {group.map((publisher, index) => {
                    return (
                      <li class="mt-2 mb-2 nav-sub-item" key={index}>
                        <Link
                          to="/shopGrid"
                          onClick={() => {
                            this.setState({ mouseClickedPublisher: false });
                            this.props.fetchBooks(
                              helper.prefix + "publisher/books/" + publisher.id
                            );
                          }}
                        >
                          <FontAwesome
                            name="circle"
                            style={{
                              color: "black",
                              marginRight: 10,
                              fontSize: 7
                            }}
                          />{" "}
                          {publisher.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      );
    }
  };

  allCategory = () => {
    if (this.state.catclicked === true) {
      return (
        <div class="ml-4">
          <a style={{ fontSize: 16 }}>নতুন বই</a>
          <a style={{ fontSize: 16 }}>ধ্রূপদী সাহিত্য</a>
          <a style={{ fontSize: 16 }}>শিশুতোষ</a>
          <a style={{ fontSize: 16 }}>বিজ্ঞান</a>
          <a style={{ fontSize: 16 }}>রাজনীতি</a>
          <a style={{ fontSize: 16 }}>কিশোর সাহিত্য</a>
          <a style={{ fontSize: 16 }}>ধর্মীয় বই</a>
          <a style={{ fontSize: 16 }}>মুক্তিযুদ্ধ</a>
          <a style={{ fontSize: 16 }}>পশিম বঙ্গের বই</a>
          <a style={{ fontSize: 16 }}>নিষিদ্ধ বই</a>
          <a style={{ fontSize: 16 }}>পাঠ্য বই</a>
        </div>
      );
    }
  };

  cart_total = () => {
    try {
      if (this.props.cart != undefined) {
        return this.props.cart.length;
      } else {
        return 0;
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <header id="wn__header" class="header__area " style={{ zIndex: 3000 }}>
        <BrowserView>
          <div class="sticky__header" style={{ backgroundColor: "white" }}>
            <div class="container">
              <div class="row d-flex align-items-center" style={{ height: 70 }}>
                <div class="col-md-3">
                  <div class="logo pt-2">
                    <Link to="/">
                      <img
                        class="siteLogo"
                        src="images/logo/logoText.png"
                        alt="Gronthik"
                        id="siteLogo"
                      />
                    </Link>
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
                          border: "1px solid black",
                          width: "100%",
                          backgroundColor: "white",
                          borderRadius: 26,
                          position: "relative"
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
                              height: 40
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
                  <ul class="header__sidebar__right d-flex justify-content-end align-items-center">
                    <li class="pr-3">
                      <a href="#">
                        <img
                          src="images/icons/wish.png"
                          style={{ width: 40, height: 40 }}
                        />
                      </a>
                    </li>
                    <li
                      class="shopcart"
                      onClick={() => this.setState({ cart: !this.state.cart })}
                    >
                      <div class="cartIcon" to="">
                        <span class="product_qun">{this.cart_total()}</span>
                      </div>

                      {this.cart()}
                    </li>
                    <li
                      class=""
                      onClick={() =>
                        this.setState({ setting: !this.state.setting })
                      }
                    >
                      <FontAwesome
                        name="fas fa-user"
                        // size="2x"
                        style={{ color: "black", fontSize: 24 }}
                      />
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
            <div class="collapse navbar-collapse d-flex " id="navbarNav">
              <ul
                class="navbar-nav ml-auto mr-auto"
                style={{ position: "relative", top: 17 }}
              >
                <li
                  class={
                    window.location.pathname == "/"
                      ? "nav-item nav-sub active"
                      : "nav-sub nav-item"
                  }
                >
                  <p class="nav-link" href="/">
                    বিষয়<span class="sr-only">(current)</span>
                  </p>
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
          {this.authors()}
          {this.publishers()}
        </BrowserView>
        <MobileView>
          {/* {this.authors()} */}
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
            <div
              class="row m-0 d-flex justify-content-between align-items-center"
              onClick={() =>
                this.setState({ catclicked: !this.state.catclicked })
              }
            >
              <a href="#">বিষয় </a>
              <FontAwesome
                name={this.state.catclicked ? "angle-down" : "angle-right"}
                size="2x"
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                  paddingRight: 10
                }}
              />
            </div>

            {this.allCategory()}
            <a href="#">লেখক</a>
            <a href="#">প্রকাশনী</a>
            <a href="#">পাঠক কর্নার</a>
            <a href="#">প্রাতিষ্ঠানিক অর্ডার</a>
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
            style={{ background: "white" }}
          >
            <div class="mt-auto mb-auto pl-3">
              <span
                style={{ fontSize: 24, cursor: "pointer" }}
                onClick={() =>
                  this.setState({ menuOpend: !this.state.menuOpend })
                }
              >
                &#9776;
              </span>
            </div>
            <div class="logo d-flex align-items-center">
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
                style={{ width: 35, height: 35 }}
              />

              <a href="/cart">
                <img
                  style={{ width: 24, height: 24 }}
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
                style={{ fontSize: 24 }}
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
              border: "1px solid gray"
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
                  height: 20
                }}
                class="form-control mr-sm-2"
              />
            </ReactTyped>
            <button
              class="btn my-2 my-sm-0 search-btn-mb"
              type="submit"
              style={{ top: 0, position: "relative", right: 10 }}
            >
              <FontAwesome name="search" style={{ color: "white" }} />
            </button>
          </div>
        </MobileView>
      </header>
    );
  }
}

navbar.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  fetchBook: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.books.cart
});

export default connect(
  mapStateToProps,
  { fetchBooks, fetchBook, deleteFromCart}
)(navbar);
