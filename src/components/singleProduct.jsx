import React, { Component } from "react";
import loadjs from "loadjs";
import Product from "./../components/product";
import productexData from "./../dummyData/productex";
import ProductExtra from "./../components/productextra";
import discountProduct from "./../dummyData/discountProduct";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Slider from "react-slick";

import {
  Link,
  Redirect,
  Prompt
} from "react-router-dom";
import FontAwesome from "react-fontawesome";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
      }}
      onClick={onClick}
    >
      <img class="mr-auto" src="images/icons/nextIcon.png" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: 0,
        zIndex: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
      }}
      onClick={onClick}
    >
      <img class="mr-auto" src="images/icons/prevIcon.png" />
    </div>
  );
}

class Productz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: discountProduct,
    };
    window.scrollTo(0, 0);
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

  firstRow = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 6,
      slidesToShow: 6,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    var settings2 = {
      dots: false,
      infinite: true,
      speed: 500,
      // slidesToScroll: 1,
      slidesToShow: 2,
      variableWidth: true,
      arrows: false
    };
    return (
      <React.Fragment>
        <BrowserView>
        
        <div style={{ background: "#F1F2EE", paddingRight: 25, height: 340}}>
          <div>
            {console.log("Screen width", window.innerWidth)}
            <Slider {...settings}>
              {this.state.books.map((item, index) => {
                // console.log("Items found from dummy: ", item);
                return (
                  <Product
                    key={index}
                    name={item.name}
                    price={item.price}
                    oldPrice={item.oldPrice}
                    discount={item.discount}
                    image={item.image}
                    image2={item.image2}
                    writer={item.writer}
                    history={this.props.history}
                  />
                );
              })}
            </Slider>
          </div>
          </div>
        </BrowserView>
        <MobileView>
          <div style={{ background: "#F1F2EE",}}>
            <Slider {...settings2}>
              {this.state.books.map((item, index) => {
                // console.log("Items found from dummy: ", item);
                return (
                  <Product
                    key={index}
                    name={item.name}
                    price={item.price}
                    oldPrice={item.oldPrice}
                    discount={item.discount}
                    image={item.image}
                    image2={item.image2}
                    writer={item.writer}
                  />
                );
              })}
            </Slider>
          </div>
        </MobileView>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div class="maincontent bg--white pt--40 pb--55">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="wn__single__product">
                <div class="row">
                  <div class="col-lg-6 col-12 d-flex justify-content-center">
                    <div class="book-bg-bg d-flex justify-content-center border-1">
                      <img
                        class="readsome_badge"
                        src="images/badges/lookInside.png"
                      />
                      <div class="book-bg">
                        <div
                          class="book-cover"
                          style={{ height: 344, width: 238 }}
                        >
                          <img
                            class="bookCover"
                            src="images/product/book2.jpg"
                            alt=""
                            style={{ height: 344, width: 238 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="product__info__main">
                      <h1 class="mb-4">হিমু রিমান্ডে</h1>
                      <Link style={{fontSize: 16}} to="/humayon_ahmed">হুমায়ন আহমেদ</Link>
                      <div class="price-box">
                        <span>৳১৫২.০০</span>
                      </div>
                      <p class="text-success">
                        <span class="mr-2"><FontAwesome
                        name="circle"
                        dtyle={{fontSize: 15,}}
                        /></span>
                        অনলাইনে পেমেন্ট বিকাশ করলেই ২০% ইন্সট্যান্ট ক্যাশব্যাক। (শর্ত প্রযোজ্য)</p>
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
                      <div>
                      <div class="product-addto-links clearfix pb-3 row ml-0 d-flex align-items-center">
                         <a class="wishlist" href="#" /> <p class="pl-2">Add to booklist</p> 
                        </div>
                      </div>
                      <div class="box-tocart d-flex">
                      <button type="button" class="btn btn-outline-dark mr-2">একটু পড়ে দেখুন</button>
                        <div class="addtocart__actions">
                          <button
                            class="tocart"
                            type="submit"
                            title="Add to Cart"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div class="product_meta">
                        <span class="posted_in">
                          Categories:
                          <a href="#">Adventure</a>,<a href="#">Kids' Music</a>
                        </span>
                      </div>
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
                    Summary
                  </a>
                  <a
                    class="nav-item nav-link"
                    data-toggle="tab"
                    href="#nav-specification"
                    role="tab"
                  >
                    Specification
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
                    id="nav-specification"
                    role="tabpanel"
                  >
                    <div class="description__attribute">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Title</td>
                            <td>The Miracles Of Your Mind </td>
                          </tr>

                          <tr>
                            <td>Author</td>
                            <td class="author-link">
                              <a class="lnk-1" href="/book/author/23740">
                                Joseph Murphy
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td>Publisher</td>
                            <td class="publisher-link">
                              <a class="lnk-1" href="/book/publisher/6717">
                                An Imprint (India
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td>ISBN</td>
                            <td>9789381529577</td>
                          </tr>

                          <tr>
                            <td>Number of Pages</td>
                            <td>112</td>
                          </tr>

                          <tr>
                            <td>Country</td>
                            <td>India</td>
                          </tr>

                          <tr>
                            <td>Language</td>
                            <td>English</td>
                          </tr>
                        </tbody>
                      </table>
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
              <div class="row m-0 mt-3">
              <h4 class="">
                সর্বোচ্চ ছাড়ের বই {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Productz;
