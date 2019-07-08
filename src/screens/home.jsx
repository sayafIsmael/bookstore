import React, { Component } from "react";
import Product from "./../components/product";

import discountProduct from "./../dummyData/discountProduct";
import publishers from "./../dummyData/publishers";

class Home extends Component {
  footer = () => {
    return (
      <footer id="wn__footer" class="footer__area bg__cat--8 brown--color">
        <div class="footer-static-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="footer__widget footer__menu">
                  <div class="ft__logo">
                    <a href="index.html">
                      <img src="images/logo/logoText.png" alt="logo" />
                    </a>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered duskam
                      alteration variations of passages
                    </p>
                  </div>
                  <div class="footer__content">
                    <ul class="social__net social__net--2 d-flex justify-content-center">
                      <li>
                        <a href="#">
                          <i class="bi bi-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-google" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-youtube" />
                        </a>
                      </li>
                    </ul>
                    <ul class="mainmenu d-flex justify-content-center">
                      <li>
                        <a href="index.html">Trending</a>
                      </li>
                      <li>
                        <a href="index.html">Best Seller</a>
                      </li>
                      <li>
                        <a href="index.html">All Product</a>
                      </li>
                      <li>
                        <a href="index.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="index.html">Blog</a>
                      </li>
                      <li>
                        <a href="index.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright__wrapper">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="copyright">
                  <div class="copy__right__inner text-left">
                    <p>
                      Copyright <i class="fa fa-copyright" />{" "}
                      <a href="https://freethemescloud.com/">
                        Free themes Cloud.
                      </a>{" "}
                      All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="payment text-right">
                  <img src="images/icons/payment.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  firstRow = () => {
    return (
      <div class="furniture--4 border--round arrows_style owl-carousel owl-theme row mt--50">
        {discountProduct.map((item, index) => {
          return (
            <Product
              key={index}
              name={item.name}
              price={item.price}
              oldPrice={item.oldPrice}
              discount={item.discount}
              image={item.image}
              image2={item.image2}
            />
          );
        })}
      </div>
    );
  };

  sellers = () => {
    return (
      <section class="best-seel-area pt--80 pb--60">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__title text-center pb--50">
                <h2 class="title__be--2">
                  প্রকাশনী <span class="color--theme">সমূহ </span>
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered lebmid alteration in
                  some ledmid form
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="containerx itemx-wrapper">
          {publishers.map((item, index) => {
            return (
              <div class="itemx">
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  navBar = () => {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-6 col-lg-2">
            <div class="logo">
              <a href="index.html">
                <img
                  class="siteLogo"
                  src="images/logo/logoText.png"
                  alt="Gronthik"
                />
              </a>
            </div>
          </div>
          <div class="col-md-5 d-none d-lg-block">
            <nav class="mainmenu__nav">
              <ul class="meninmenu d-flex justify-content-center">
                <li class="drop with--one--item ">
                  <a href="index.html">Home</a>
                </li>

                <li class="drop">
                  <a href="shop-grid.html">Books</a>
                  <div class="megamenu mega03">
                    <ul class="item item03">
                      <li class="title">Categories</li>
                      <li>
                        <a href="shop-grid.html">Biography </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Business </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Cookbooks </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Health & Fitness </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">History </a>
                      </li>
                    </ul>
                    <ul class="item item03">
                      <li class="title">Customer Favourite</li>
                      <li>
                        <a href="shop-grid.html">Mystery</a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Religion & Inspiration</a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Romance</a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Fiction/Fantasy</a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Sleeveless</a>
                      </li>
                    </ul>
                    <ul class="item item03">
                      <li class="title">Collections</li>
                      <li>
                        <a href="shop-grid.html">Science </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Fiction/Fantasy</a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Self-Improvemen</a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Home & Garden</a>
                      </li>
                      <li>
                        <a href="shop-grid.html">Humor Books</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="drop">
                  <a href="blog.html">Blog</a>
                  <div class="megamenu dropdown">
                    <ul class="item item01">
                      <li>
                        <a href="blog.html">Blog Page</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-md-6 col-sm-6 col-6 col-lg-5">
            <ul class="header__sidebar__right d-flex justify-content-end align-items-center">
              <form class="form-inline">
                <div class="row" style={{ width: 400 }}>
                  <input
                    style={{ width: 300 }}
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="পছন্দের বই খুজতে এখানে টাইপ করুন"
                    aria-label="Search"
                  />
                  <button class="btn my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </div>
              </form>

              <li class="wishlist">
                <a href="#" />
              </li>
              <li class="shopcart">
                <a class="cartbox_active" href="#">
                  <span class="product_qun">3</span>
                </a>

                <div class="block-minicart minicart__active">
                  <div class="minicart-content-wrapper">
                    <div class="micart__close">
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
                      <a class="checkout__btn" href="cart.html">
                        Go to Checkout
                      </a>
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
                              <a href="product-details.html">Voyage Yoga Bag</a>
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
                              <a href="product-details.html">Impulse Duffle</a>
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
                      <a class="cart__btn" href="cart.html">
                        View and edit cart
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="setting__bar__icon">
                <a class="setting__active" href="#" />
                <div class="searchbar__content setting__block">
                  <div class="content-inner">
                    <div class="switcher-currency">
                      <strong class="label switcher-label">
                        <span>Currency</span>
                      </strong>
                      <div class="switcher-options">
                        <div class="switcher-currency-trigger">
                          <span class="currency-trigger">USD - US Dollar</span>
                          <ul class="switcher-dropdown">
                            <li>GBP - British Pound Sterling</li>
                            <li>EUR - Euro</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="switcher-currency">
                      <strong class="label switcher-label">
                        <span>Language</span>
                      </strong>
                      <div class="switcher-options">
                        <div class="switcher-currency-trigger">
                          <span class="currency-trigger">English01</span>
                          <ul class="switcher-dropdown">
                            <li>English02</li>
                            <li>English03</li>
                            <li>English04</li>
                            <li>English05</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="switcher-currency">
                      <strong class="label switcher-label">
                        <span>Select Store</span>
                      </strong>
                      <div class="switcher-options">
                        <div class="switcher-currency-trigger">
                          <span class="currency-trigger">Fashion Store</span>
                          <ul class="switcher-dropdown">
                            <li>Furniture</li>
                            <li>Shoes</li>
                            <li>Speaker Store</li>
                            <li>Furniture</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="switcher-currency">
                      <strong class="label switcher-label">
                        <span>My Account</span>
                      </strong>
                      <div class="switcher-options">
                        <div class="switcher-currency-trigger">
                          <div class="setting__menu">
                            <span>
                              <a href="#">Compare Product</a>
                            </span>
                            <span>
                              <a href="#">My Account</a>
                            </span>
                            <span>
                              <a href="#">My Wishlist</a>
                            </span>
                            <span>
                              <a href="#">Sign In</a>
                            </span>
                            <span>
                              <a href="#">Create An Account</a>
                            </span>
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
                          <a href="portfolio-details.html">Portfolio Details</a>
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
                  <a href="shop-grid.html">Shop</a>
                  <ul>
                    <li>
                      <a href="shop-grid.html">Shop Grid</a>
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
    );
  };

  slider = () => {
    return (
      <div id="wowslider-container1">
	<div class="ws_images mt-3"><ul>
		<li><img src="data1/images/angry2880_2400_2400.jpg" alt="angry2880_2400_2400" title="angry2880_2400_2400" id="wows1_0"/></li>
		<li><a><img src="data1/images/bookad.jpg" alt="slider html" title="book-ad" id="wows1_1"/></a></li>
		<li><img src="data1/images/cdreissadinsert1.jpg" alt="cdreissadinsert-1" title="cdreissadinsert-1" id="wows1_2"/></li>
	</ul></div>
<div class="ws_script" style={{left:"-99%"}}><a>responsive slider</a> by WOWSlider.com v8.8</div>
	<div class="ws_shadow"></div>
	</div>
    );
  };

  render() {
    return (
      <div class="wrapper" id="wrapper">
        <header
          id="wn__header"
          class="header__area sticky__header"
        >
          {this.navBar()}
        </header>

        {this.slider()}

        <section class="wn__product__area brown--color pt--80  pb--30">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section__title text-center">
                  <h2 class="title__be--2">
                    সর্বোচ্চ <span class="color--theme">ছাড়ের বই</span>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered lebmid alteration
                    in some ledmid form
                  </p>
                </div>
              </div>
            </div>

            {this.firstRow()}
            {this.firstRow()}
            {this.firstRow()}
          </div>
        </section>

        {this.sellers()}

        {this.footer()}
      </div>
    );
  }
}

export default Home;
