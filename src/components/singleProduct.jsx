import React, { Component } from "react";
import loadjs from "loadjs";
import ProductEx  from "./../components/productex"
import productexData from "./../dummyData/productex"
// import {
//   HashRouter as Router,
//   Route,
//   Link,
//   NavLink,
//   Redirect,
//   Prompt
// } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div class="maincontent bg--white pt--80 pb--55">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-12">
              <div class="wn__single__product">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="wn__fotorama__wrapper">
                      <div
                        class="fotorama wn__fotorama__action"
                        data-nav="thumbs"
                      >
                        <a href="1.jpg">
                          <img src="images/product/book2.jpg" alt="" />
                        </a>
                        <a href="2.jpg">
                          <img src="images/publishers/1.png" alt="" />
                        </a>
                        <a href="3.jpg">
                          <img src="images/product/book2.jpg" alt="" />
                        </a>
                        <a href="4.jpg">
                          <img src="images/product/harryporter.jpg" alt="" />
                        </a>
                        <a href="5.jpg">
                          <img src="images/product/book2.jpg" alt="" />
                        </a>
                        <a href="6.jpg">
                          <img src="images/publishers/1.png" alt="" />
                        </a>
                        <a href="7.jpg">
                          <img src="images/product/harryporter.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="product__info__main">
                      <h1>হিমু রিমান্ডে</h1>
                      <div class="product-reviews-summary d-flex">
                        <ul class="rating-summary d-flex">
                          <li>
                            <i class="zmdi zmdi-star-outline" />
                          </li>
                          <li>
                            <i class="zmdi zmdi-star-outline" />
                          </li>
                          <li>
                            <i class="zmdi zmdi-star-outline" />
                          </li>
                          <li class="off">
                            <i class="zmdi zmdi-star-outline" />
                          </li>
                          <li class="off">
                            <i class="zmdi zmdi-star-outline" />
                          </li>
                        </ul>
                      </div>
                      <div class="price-box">
                        <span>৳১৫২.০০</span>
                      </div>
                      <div class="product__overview">
                        <p>
                          Ideal for cold-weather training or work outdoors, the
                          Chaz Hoodie promises superior warmth with every wear.
                          Thick material blocks out the wind as ribbed cuffs and
                          bottom band seal in body heat.
                        </p>
                        <p>
                          Ideal for cold-weather training or work outdoors, the
                          Chaz Hoodie promises superior warmth with every wear.{" "}
                        </p>
                      </div>
                      <div class="box-tocart d-flex">
                        <span>Qty</span>
                        <input
                          id="qty"
                          class="input-text qty"
                          name="qty"
                          min="1"
                          value="1"
                          title="Qty"
                          type="number"
                        />
                        <div class="addtocart__actions">
                          <button
                            class="tocart"
                            type="submit"
                            title="Add to Cart"
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div class="product-addto-links clearfix">
                          <a class="wishlist" href="#" />
                          <a class="compare" href="#" />
                        </div>
                      </div>
                      <div class="product_meta">
                        <span class="posted_in">
                          Categories:
                          <a href="#">Adventure</a>,<a href="#">Kids' Music</a>
                        </span>
                      </div>
                      <div class="product-share">
                        <ul>
                          <li class="categories-title">Share :</li>
                          <li>
                            <a href="#">
                              <i class="icon-social-twitter icons" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-social-tumblr icons" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-social-facebook icons" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-social-linkedin icons" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__info__detailed">
                <div
                  class="pro_details_nav nav justify-content-start"
                  role="tablist"
                >
                  <a
                    class="nav-item nav-link active"
                    data-toggle="tab"
                    href="#nav-details"
                    role="tab"
                  >
                    Details
                  </a>
                  <a
                    class="nav-item nav-link"
                    data-toggle="tab"
                    href="#nav-review"
                    role="tab"
                  >
                    Reviews
                  </a>
                </div>
                <div class="tab__container">
                  <div
                    class="pro__tab_label tab-pane fade show active"
                    id="nav-details"
                    role="tabpanel"
                  >
                    <div class="description__attribute">
                      <p>
                        Ideal for cold-weather training or work outdoors, the
                        Chaz Hoodie promises superior warmth with every wear.
                        Thick material blocks out the wind as ribbed cuffs and
                        bottom band seal in body heat.Ideal for cold-weather
                        training or work outdoors, the Chaz Hoodie promises
                        superior warmth with every wear. Thick material blocks
                        out the wind as ribbed cuffs and bottom band seal in
                        body heat.Ideal for cold-weather training or work
                        outdoors, the Chaz Hoodie promises superior warmth with
                        every wear. Thick material blocks out the wind as ribbed
                        cuffs and bottom band seal in body heat.Ideal for
                        cold-weather training or work outdoors, the Chaz Hoodie
                        promises superior warmth with every wear. Thick material
                        blocks out the wind as ribbed cuffs and bottom band seal
                        in body heat.
                      </p>
                      <ul>
                        <li>• Two-tone gray heather hoodie.</li>
                        <li>• Drawstring-adjustable hood. </li>
                        <li>• Machine wash/dry.</li>
                      </ul>
                    </div>
                  </div>

                  <div
                    class="pro__tab_label tab-pane fade"
                    id="nav-review"
                    role="tabpanel"
                  >
                    <div class="review__attribute">
                      <h1>Customer Reviews</h1>
                      <h2>Hastech</h2>
                      <div class="review__ratings__type d-flex">
                        <div class="review-ratings">
                          <div class="rating-summary d-flex">
                            <span>Quality</span>
                            <ul class="rating d-flex">
                              <li>
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li>
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li>
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                            </ul>
                          </div>

                          <div class="rating-summary d-flex">
                            <span>Price</span>
                            <ul class="rating d-flex">
                              <li>
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li>
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li>
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                            </ul>
                          </div>
                          <div class="rating-summary d-flex">
                            <span>value</span>
                            <ul class="rating d-flex">
                              <li>
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li>
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li>
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="review-content">
                          <p>Hastech</p>
                          <p>Review by Hastech</p>
                          <p>Posted on 11/6/2018</p>
                        </div>
                      </div>
                    </div>
                    <div class="review-fieldset">
                      <h2>You're reviewing:</h2>
                      <h3>Chaz Kangeroo Hoodie</h3>
                      <div class="review-field-ratings">
                        <div class="product-review-table">
                          <div class="review-field-rating d-flex">
                            <span>Quality</span>
                            <ul class="rating d-flex">
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                            </ul>
                          </div>
                          <div class="review-field-rating d-flex">
                            <span>Price</span>
                            <ul class="rating d-flex">
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                            </ul>
                          </div>
                          <div class="review-field-rating d-flex">
                            <span>Value</span>
                            <ul class="rating d-flex">
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                              <li class="off">
                                <i class="zmdi zmdi-star" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="review_form_field">
                        <div class="input__box">
                          <span>Nickname</span>
                          <input
                            id="nickname_field"
                            type="text"
                            name="nickname"
                          />
                        </div>
                        <div class="input__box">
                          <span>Summary</span>
                          <input
                            id="summery_field"
                            type="text"
                            name="summery"
                          />
                        </div>
                        <div class="input__box">
                          <span>Review</span>
                          <textarea name="review" />
                        </div>
                        <div class="review-form-actions">
                          <button>Submit Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wn__related__product pt--80 pb--50">
                <div class="section__title text-center">
                  <h2 class="title__be--2">সম্পর্কিত বই সমূহ</h2>
                </div>
                <div class="row mt--60">
                  <div class="productcategory__slide--2 arrows_style owl-carousel owl-theme">
                    {productexData.map((item, index)=>{
                        return(
                          <ProductEx
                          key={index}
                            image={item.image}
                            scndimage={item.scndimage}
                            tag={item.tag}
                            price={item.price}
                            oldprice={item.oldprice}
                            name={item.name}
                          />
                        )
                    })}
                  </div>
                </div>
              </div>
              <div class="wn__related__product pt--80 pb--50">
                <div class="section__title text-center">
                  <h2 class="title__be--2">সর্বচ্চ বিক্রিত বই সমূহ</h2>
                </div>
                <div class="row mt--60">
                  <div class="productcategory__slide--2 arrows_style owl-carousel owl-theme">
                    {productexData.map((item, index)=>{
                        return(
                          <ProductEx
                          key={index}
                            image={item.image}
                            scndimage={item.scndimage}
                            tag={item.tag}
                            price={item.price}
                            oldprice={item.oldprice}
                            name={item.name}
                          />
                        )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-12 md-mt-40 sm-mt-40">
              <div class="shop__sidebar">
                <aside class="wedget__categories poroduct--cat">
                  <h3 class="wedget__title">ক্যাটাগরী সমূহ</h3>
                  <ul>
                    <li>
                      <a href="#">
                        মুক্তিযুদ্ধ <span>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        বিজ্ঞান <span>(4)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        পশ্চিম বঙ্গের বই <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        শিশুতোষ <span>(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        কিশোর সাহিত্য <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        বেস্ট সেলার বই <span>(9)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        ধর্মিয় বই <span>(13)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        নিষিদ্ধ বই <span>(20)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        পাঠক কর্নার <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        ব্লগ <span>(13)</span>
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside class="wedget__categories pro--range">
                  <h3 class="wedget__title">Filter by price</h3>
                  <div class="content-shopby">
                    <div class="price_filter s-filter clear">
                      <form action="#" method="GET">
                        <div id="slider-range" />
                        <div class="slider__range--output">
                          <div class="price__output--wrap">
                            <div class="price--output">
                              <span>Price :</span>
                              <input type="text" id="amount" readonly="" />
                            </div>
                            <div class="price--filter">
                              <a href="#">Filter</a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </aside>
              
                <aside class="wedget__categories poroduct--tag">
                  <h3 class="wedget__title">Book Tags</h3>
                  <ul>
                    <li>
                      <a href="#"> নিষিদ্ধ বই</a>
                    </li>
                    <li>
                      <a href="#"> বেস্ট সেলার বই</a>
                    </li>
                    <li>
                      <a href="#">পাঠক কর্নার</a>
                    </li>
                    <li>
                      <a href="#">ধর্মিয় বই</a>
                    </li>
                    <li>
                      <a href="#">মুক্তিযুদ্ধ</a>
                    </li>
                    <li>
                      <a href="#">পশ্চিম বঙ্গের বই</a>
                    </li>
                    <li>
                      <a href="#">কিশোর সাহিত্য</a>
                    </li>
                    <li>
                      <a href="#">বিজ্ঞান</a>
                    </li>
                  </ul>
                </aside>
                <aside class="wedget__categories sidebar--banner">
                  <img
                    src="images/books/newProduct.jpg"
                    alt="banner images"
                    style={{maxHeight: 350}}
                  />
                  <div class="text">
                    <h2>new products</h2>
                    <h6>
                      save up to <br /> <strong>40%</strong>off
                    </h6>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
