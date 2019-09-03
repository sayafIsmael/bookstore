import React, { Component } from "react";
import loadjs from "loadjs";
import Product from "./../components/product";
import productexData from "./../dummyData/productex";
import ProductExtra from "./../components/productextra";
import discountProduct from "./../dummyData/discountProduct";
import StarRatings from "react-star-ratings";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Slider from "react-slick";

import { Link, Redirect, Prompt } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import * as helper from "./../helper";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBook, fetchBooks, addtoCart} from "../actions/bookActions";

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
      books: discountProduct
    };
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    // this.props.fetchBook();
  }

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
          <div style={{ background: "#F1F2EE", paddingRight: 25, height: 340 }}>
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
          <div style={{ background: "#F1F2EE" }}>
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
  title = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.title;
      }
    } catch (error) {
      console.log(error);
    }
  };
  category_id = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.category_id;
      }
    } catch (error) {
      console.log(error);
    }
  };
  summary = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.summary;
      }
    } catch (error) {
      console.log(error);
    }
  };
  new_price = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.new_price;
      }
    } catch (error) {
      console.log(error);
    }
  };
  old_price = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.old_price;
      }
    } catch (error) {
      console.log(error);
    }
  };
  description = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.description;
      }
    } catch (error) {
      console.log(error);
    }
  };

  category = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.category;
      }
    } catch (error) {
      console.log(error);
    }
  };
  rating = () => {
    try {
      if (this.props.book.book) {
        return (
          <StarRatings
            rating={parseFloat(this.props.book.book.rating)}
            starRatedColor="#FF9900"
            starDimension="12px"
            changeRating={this.changeRating}
            numberOfStars={5}
            name="rating"
          />
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  cover = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.cover;
      }
    } catch (error) {
      console.log(error);
    }
  };
  country = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.country;
      }
    } catch (error) {
      console.log(error);
    }
  };
  page = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.page;
      }
    } catch (error) {
      console.log(error);
    }
  };
  language = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.language;
      }
    } catch (error) {
      console.log(error);
    }
  };
  author_id = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.author_id;
      }
    } catch (error) {
      console.log(error);
    }
  };
  publisher_id = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.publisher_id;
      }
    } catch (error) {
      console.log(error);
    }
  };
  discount = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.discount;
      }
    } catch (error) {
      console.log(error);
    }
  };
  upcoming = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.upcoming;
      }
    } catch (error) {
      console.log(error);
    }
  };

  author = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.author;
      }
    } catch (error) {
      console.log(error);
    }
  };

  publisher = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.publisher;
      }
    } catch (error) {
      console.log(error);
    }
  };

  publisher_id = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.publisher_id;
      }
    } catch (error) {
      console.log(error);
    }
  };

  stock = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.stock;
      }
    } catch (error) {
      console.log(error);
    }
  };

  discount = () => {
    try {
      if (this.props.book.book) {
        return this.props.book.book.discount;
      }
    } catch (error) {
      console.log(error);
    }
  };

  addtoCart = () =>{
    try {
      if (this.props.book.book) {
        this.props.addtoCart(this.props.book.book);
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <React.Fragment>
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
                            style={{ height: 344, width: 238, backgroundImage: 'url(images/books/dummy.png)',
                              backgroundSize: 'cover'}}
                          >
                            <img
                              class="bookCover"
                              src={this.cover()}
                              alt=""
                              style={{ height: 344, width: 238 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <div class="product__info__main">
                        {console.log("mother fuck ", this.title())}
                        <h1 class="mb-4">{this.title()}</h1>
                        {/**/}
                        <Link
                          style={{ fontSize: 16 }}
                          to="/shopGrid"
                          onClick={() => {
                            this.props.fetchBooks(
                              helper.prefix +
                                "author/books/" +
                                this.publisher_id()
                            );
                          }}
                        >
                          {this.author()}
                        </Link>
                        <div class="price-box">
                          <p class="details-book-info__content-book-price">
                            TK. {this.new_price()}
                            <strike class="original-price">
                              TK. {this.old_price()}
                            </strike>
                            <span class="price-off">
                              {this.discount() ? "(" : null}
                              <span class="js--save-message">
                                {this.discount() ? "You can Save " : null}
                              </span>
                              {this.discount() ? this.discount() + "%)" : null}
                            </span>
                          </p>
                        </div>
                        {/* <p class="text-success">
                        <span class="mr-2">
                          <FontAwesome name="circle" dtyle={{ fontSize: 15 }} />
                        </span>
                        অনলাইনে পেমেন্ট বিকাশ করলেই ২০% ইন্সট্যান্ট ক্যাশব্যাক।
                        (শর্ত প্রযোজ্য)
                      </p> */}
                        <div class="product__overview">
                          <p>{this.description()}</p>
                        </div>
                        <div>
                          <div class="product-addto-links clearfix pb-3 row ml-0 d-flex align-items-center">
                            <a class="wishlist" href="#" />{" "}
                            <p class="pl-2">Add to booklist</p>
                          </div>
                        </div>
                        <div class="box-tocart d-flex">
                          <button
                            type="button"
                            class="btn btn-outline-dark mr-2"
                          >
                            একটু পড়ে দেখুন
                          </button>
                          <div class="addtocart__actions">
                            <button
                              class="tocart"
                              type="submit"
                              title="Add to Cart"
                              onClick={() => {this.addtoCart()}}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <div class="product_meta">
                          <span class="posted_in">
                            Category:
                            <Link
                              to="/shopGrid"
                              onClick={() => {
                                this.props.fetchBooks(
                                  helper.prefix +
                                    "category/" +
                                    this.category_id()
                                );
                              }}
                            >
                              {this.category()}
                            </Link>
                          </span>
                        </div>
                        <div class="product-reviews-summary d-flex">
                          <ul class="rating-summary d-flex">{this.rating()}</ul>
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
                        <p>{this.summary()}</p>
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
                              <td>{this.title()} </td>
                            </tr>

                            <tr>
                              <td>Author</td>
                              <td class="author-link">
                                <Link
                                  class="lnk-1"
                                  to="/shopGrid"
                                  onClick={() => {
                                    this.props.fetchBooks(
                                      helper.prefix +
                                        "author/books/" +
                                        this.publisher_id()
                                    );
                                  }}
                                >
                                  {this.author()}
                                </Link>
                              </td>
                            </tr>

                            <tr>
                              <td>Publisher</td>
                              <td class="publisher-link">
                                <Link
                                  class="lnk-1"
                                  to="/shopGrid"
                                  onClick={() => {
                                    this.props.fetchBooks(
                                      helper.prefix +
                                        "publisher/books/" +
                                        this.publisher_id()
                                    );
                                  }}
                                >
                                  {this.publisher()}
                                </Link>
                              </td>
                            </tr>

                            {/* <tr>
                            <td>ISBN</td>
                            <td>9789381529577</td>
                          </tr> */}

                            <tr>
                              <td>Number of Pages</td>
                              <td>{this.page()}</td>
                            </tr>

                            <tr>
                              <td>Country</td>
                              <td>{this.country()}</td>
                            </tr>

                            <tr>
                              <td>Language</td>
                              <td>{this.language()}</td>
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
      </React.Fragment>
    );
  }
}

Productz.propTypes = {
  fetchBook: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired,
  addtoCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  book: state.books.item
});

export default connect(
  mapStateToProps,
  { fetchBook, fetchBooks, addtoCart}
)(Productz);
