import React, { Component } from "react";
import { createStore } from "redux";
import MainSlider from "./../components/mainSlider";

import Product from "./../components/product";

import discountProduct from "./../dummyData/discountProduct";
import publishers from "./../dummyData/publishers";
import FontAwesome from "react-fontawesome";
import loadjs from "loadjs";

import Slider from "react-slick";

import { Style } from "react-style-tag";


import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function counter(state = [], action) {
  switch (action.type) {
    case "INCREMENT":
      state.push({ id: 1, name: "xxx" });
      return state;
    case "DECREMENT":
      state.push({ id: 2, name: "zzzz" });
      return state;
    default:
      state.push({ id: 0, name: "yyyy" });
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log("Redux consoling", store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// 1

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

class Home extends Component {
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

  componentDidMount() {
    // Jquery here $(...)...
   
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
                    history={this.props.history}
                  />
                );
              })}
            </Slider>
          </div>
        </MobileView>
      </React.Fragment>
    );
  };

  adRow = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 3,
      autoplay: true,
      pauseOnHover: true,
      variableWidth: true,
      arrows: false
    };
    var settings2 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 1,
      autoplay: true,
      pauseOnHover: true,
      variableWidth: true,
      arrows: false
    };
    return (
      <React.Fragment>
        <BrowserView>
          <Slider {...settings}>
            <div>
              <img class="ad-banner" src="images/ad/1.png" />
            </div>
            <div>
              <img class="ad-banner" src="images/ad/2.png" />
            </div>
            <div>
              <img class="ad-banner" src="images/ad/3.png" />
            </div>
            <div>
              <img class="ad-banner" src="images/ad/1.png" />
            </div>
            <div>
              <img class="ad-banner" src="images/ad/2.png" />
            </div>
            <div>
              <img class="ad-banner" src="images/ad/3.png" />
            </div>
          </Slider>
        </BrowserView>
        <MobileView>
        <div style={{height: 100}}>
        <Slider {...settings2}>
            <div>
              <img class="ad-banner" src="images/ad/1.png" />
            </div>
            <div>
              <img class="ad-banner" src="images/ad/2.png" />
            </div>
            <div>
              <img class="ad-banner" src="images/ad/3.png" />
            </div>
            <div>
              <img class="ad-banner" src="images/ad/1.png" />
            </div>
            <div>
              <img class="ad-banner" src="images/ad/2.png" />
            </div>
            <div>
              <img class="ad-banner" src="images/ad/3.png" />
            </div>
          </Slider>
</div>
        
        </MobileView>
      </React.Fragment>
    );
  };

  sellers = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 2,
      slidesToShow: 6,
      variableWidth: true,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    var settings2 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 2,
      slidesToShow: 2,
      variableWidth: true,
      arrows: false,
    };
    return (
      <div class="container mt-2">
        <div class="row m-0 mt-4">
          <h4 class="">
            প্রকাশনী সমূহ{/* <span class="color--theme"></span> */}
          </h4>
        </div>
          <BrowserView>
          <div style={{ background: "#F1F2EE", paddingRight: 25 }}>
            <div>
              {console.log("Screen width", window.innerWidth)}
              <Slider {...settings}>
                {publishers.map((item, index) => {
                  return (
                    <div>
                      <div class="crp-item">
                        <img
                          class="m-pubp-img"
                          src={item.image}
                          style={{ borderRadius: "100%" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            </div>
          </BrowserView>
          <MobileView>
          <div style={{ background: "#F1F2EE"}}>
            <div style={{ background: "#F1F2EE" }}>
              {console.log("Screen width", window.innerWidth)}
              <Slider {...settings2}>
                {publishers.map((item, index) => {
                  return (
                    <div>
                      <div class="cr-item-mb" style={{width: 97}}>
                        <img
                          class="m-pub-img"
                          src={item.image}
                          style={{ borderRadius: "100%" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            </div>
          </MobileView>
      </div>
    );
  };

  bestWrtiters = () => {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    var settings2 = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      arrows: false,
      variableWidth: true,
    };
    return (
      <div class="container">
        <h4 class="">সাপ্তাহিক সেরা লেখক</h4>

        <BrowserView>
          <div style={{ background: "#F1F2EE", paddingRight: 25 }}>
            <Slider {...settings}>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/1.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/2.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/1.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/2.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/1.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/2.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/1.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
            </Slider>
          </div>
        </BrowserView>

        <MobileView>
          <div style={{ background: "#F1F2EE" }}>
            <Slider {...settings2}>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/1.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/2.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/2.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/2.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/1.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/2.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div>
                <div class="crw-item">
                  <img
                    class="mw-pub-img"
                    src="images/writers/1.jpg"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
            </Slider>
          </div>
        </MobileView>
      </div>
    );
  };

  subscribe = () => {
    return (
      <React.Fragment>
        <BrowserView>
      <div class="container">
        <div class="" style={{ background: "#EED7C2" }}>
          <div class="row d-flex justify-content-center mt-3">
            <h4 class="c-black " style={{ fontSize: 18 }}>
              সাবস্ক্রাইব করে জিতে নিন আকর্ষনীয়{" "}
              <span style={{ color: "#02A868", fontSize: 25 }}>অফার</span>
            </h4>
          </div>
          <div class="row d-flex justify-content-center mt-2 pb-3">
            <input
              class="col-md-5 subs-input pl-2 pr-2"
              placeholder="ইমেইল/মোবাইল নম্বর"
              style={{ height: 55 }}
            />
            <div class="row mt-auto mb-auto ml-0">
              <div class="male-btn">
                <p>পুরুষ</p>
              </div>
              <div class="female-btn">
                <p>মহিলা</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </BrowserView>
      <MobileView>
        <div class="container">
        <div class="" style={{ background: "#EED7C2" }}>
          <div class="row d-flex justify-content-center pt-2">
            <h4 class="c-black " style={{ fontSize: 18, fontWeight: 'normal'}}>
              সাবস্ক্রাইব করে জিতে নিন 
            </h4>
            <h4 class="c-black " style={{ fontSize: 18, fontWeight: 'normal'}}>
              <span style={{ color: "#02A868", fontSize: 22 }}>আকর্ষনীয় অফার</span>
            </h4>
          </div>
          <div class="row d-flex justify-content-center mt-2 pb-3">
            <input
              class="col-md-5 subs-input "
              placeholder="ইমেইল/মোবাইল নম্বর"
              style={{ height: 55, marginLeft: 29, marginRight: 28}}
            />
            <div class="row mt-2 ml-0">
            <button type="button" class="btn btn-primary mr-2">পুরুষ</button>
            <button type="button" class="btn btn-success mr-2">মহিলা</button>
            <button type="button" class="btn btn-warning mr-2">অন্যান্য</button>

            </div>
          </div>
        </div>
      </div>
      </MobileView>
      </React.Fragment>
    );
  };

  services = () => {
    return (
      <div class="container">
      <BrowserView>
      <div class="pt-3 pb-3 mb-3" style={{ background: "#F1F2EE" }}>
          <div class="row">
            <div className="row col-sm-3">
              <img
                class="mr-auto ml-auto"
                src="images/icons/phone.png"
                style={{ height: 76 }}
              />
              <div class="mt-auto mb-auto">
                <p class="service-text">হেল্প লাইন</p>
                <p class="service-text">+৮৮ ০২ ৭১৯ ১৭৪৭</p>
                <p class="service-text">০১৬১৬ ৩১৩ ৯৫৭</p>
              </div>
            </div>
            <div className="row col-sm-3">
              <img
                class="mr-auto ml-auto"
                src="images/icons/cash_on.png"
                style={{ height: 76 }}
              />
              <div class="mt-auto mb-auto">
                <p class="service-text">কেশ অন</p>
                <p class="service-text">ডেলিভারি</p>
              </div>
            </div>
            <div className="row col-sm-3">
              <img
                class="mr-auto ml-auto"
                src="images/icons/delivery_cycle.png"
                style={{ height: 76 }}
              />
              <div class="mt-auto mb-auto">
                <p class="service-text">ঢাকায়</p>
                <p class="service-text">হোম ডেলিভারি</p>
              </div>
            </div>
            <div className="row col-sm-3">
              <img
                class="mr-auto ml-auto"
                src="images/icons/delivery.png"
                style={{ height: 90 }}
              />
              <div class="mt-auto mb-auto">
                <p class="service-text">সেবা</p>
                <p class="service-text">সারা বাংলাদেশ</p>
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
      <div class="pt-3 pb-3 mb-3" style={{ background: "#F1F2EE" }}>
          <div class="row">
            <div className="row col-sm-3 mb-2">
              <div class="d-flex justify-content-center" style={{width: '40%'}}>
              <img
                class=""
                src="images/icons/phone.png"
                style={{ height: 76 }}
              />
              </div>
              <div class="mt-auto mb-auto">
                <p class="service-text">হেল্প লাইন</p>
                <p class="service-text">+৮৮ ০২ ৭১৯ ১৭৪৭</p>
                <p class="service-text">০১৬১৬ ৩১৩ ৯৫৭</p>
              </div>
            </div>
            <div className="row col-sm-3 mb-2">
            <div class="d-flex justify-content-center" style={{width: '40%'}}>
            <img
                class=""
                src="images/icons/cash_on.png"
                style={{ height: 76 }}
              />
            </div>
              
              <div class="mt-auto mb-auto">
                <p class="service-text">কেশ অন</p>
                <p class="service-text">ডেলিভারি</p>
              </div>
            </div>
            <div className="row col-sm-3 mb-2">
            <div class="d-flex justify-content-center" style={{width: '40%'}}>
              <img
                class=""
                src="images/icons/delivery_cycle.png"
                style={{ height: 76 }}
              />
              </div>
              <div class="mt-auto mb-auto">
                <p class="service-text">ঢাকায়</p>
                <p class="service-text">হোম ডেলিভারি</p>
              </div>
            </div>
            <div className="row col-sm-3 mb-2">
            <div class="d-flex justify-content-center" style={{width: '40%'}}>
              <img
                class=""
                src="images/icons/delivery.png"
                style={{ height: 90 }}
              />
              </div>
              <div class="mt-auto mb-auto">
                <p class="service-text">সেবা</p>
                <p class="service-text">সারা বাংলাদেশ</p>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
      </div>
    );
  };

  recentlySearched = () => {
    return (
      <div class="container mt-3">
        <h4>সাম্প্রতি খোজা বই</h4>
        {this.firstRow()}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <MainSlider />
        <div class="container">
          {this.adRow()}
        </div>
        <section class="wn__product__area brown--color pt--20  pb--20">
          <div class="container">
            <div class="row m-0 mt-3">
              <h4 class="">
                সর্বোচ্চ ছাড়ের বই {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}

            <div class="row m-0 mt-3">
              <h4 class="">
                বিজ্ঞান {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}

            <div class="row m-0 mt-3">
              <h4 class="">
                ইতিহাস {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}

            <div>{this.adRow()}</div>

            <div class="row m-0 mt-3">
              <h4 class="">
                সর্বোচ্চ বিক্রিত বই {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}

            <div class="row m-0 mt-3">
              <h4 class="">
                অবশ্য পাঠ্য {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}

            <div class="row m-0 mt-3">
              <h4 class="">
                গ্রন্থিক প্রকাশনের বই {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}

            <div class="row m-0 mt-3">
              <h4 class="">
                শিশুতোষ {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}

            <div>{this.adRow()}</div>

            <div class="row m-0 mt-3">
              <h4 class="">
                প্রবন্ধ {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}

            <div class="row m-0 mt-3">
              <h4 class="">
                সমাজ বিজ্ঞান {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}

            <div class="row m-0 mt-3">
              <h4 class="">
                অর্থনীতি {/* <span class="color--theme"></span> */}
              </h4>
            </div>

            {this.firstRow()}

            <div>{this.adRow()}</div>
          </div>
        </section>

        {this.bestWrtiters()}

        {this.subscribe()}

        {this.sellers()}

        {this.services()}

        <div class="modal fade" id="productmodal" tabindex="-1" role="dialog">
          <div class="modal-dialog modal__container" role="document">
            <div class="modal-content">
              <div class="modal-header modal__header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="modal-product">
                  <div class="product-images">
                    <div class="main-image images">
                      <img
                        alt="big images"
                        src="images/product/big-img/1.jpg"
                      />
                    </div>
                  </div>
                  <div class="product-info">
                    <h1>Simple Fabric Bags</h1>
                    <div class="rating__and__review">
                      <ul class="rating">
                        <li>
                          <span class="ti-star" />
                        </li>
                        <li>
                          <span class="ti-star" />
                        </li>
                        <li>
                          <span class="ti-star" />
                        </li>
                        <li>
                          <span class="ti-star" />
                        </li>
                        <li>
                          <span class="ti-star" />
                        </li>
                      </ul>
                      <div class="review">
                        <a href="#">4 customer reviews</a>
                      </div>
                    </div>
                    <div class="price-box-3">
                      <div class="s-price-box">
                        <span class="new-price">$17.20</span>
                        <span class="old-price">$45.00</span>
                      </div>
                    </div>
                    <div class="quick-desc">
                      Designed for simplicity and made from high quality
                      materials. Its sleek geometry and material combinations
                      creates a modern look.
                    </div>
                    <div class="select__color">
                      <h2>Select color</h2>
                      <ul class="color__list">
                        <li class="red">
                          <a title="Red" href="#">
                            Red
                          </a>
                        </li>
                        <li class="gold">
                          <a title="Gold" href="#">
                            Gold
                          </a>
                        </li>
                        <li class="orange">
                          <a title="Orange" href="#">
                            Orange
                          </a>
                        </li>
                        <li class="orange">
                          <a title="Orange" href="#">
                            Orange
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="select__size">
                      <h2>Select size</h2>
                      <ul class="color__list">
                        <li class="l__size">
                          <a title="L" href="#">
                            L
                          </a>
                        </li>
                        <li class="m__size">
                          <a title="M" href="#">
                            M
                          </a>
                        </li>
                        <li class="s__size">
                          <a title="S" href="#">
                            S
                          </a>
                        </li>
                        <li class="xl__size">
                          <a title="XL" href="#">
                            XL
                          </a>
                        </li>
                        <li class="xxl__size">
                          <a title="XXL" href="#">
                            XXL
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="social-sharing">
                      <div class="widget widget_socialsharing_widget">
                        <h3 class="widget-title-modal">Share this product</h3>
                        <ul class="social__net social__net--2 d-flex justify-content-start">
                          <li class="facebook">
                            <a href="#" class="rss social-icon">
                              <i class="zmdi zmdi-rss" />
                            </a>
                          </li>
                          <li class="linkedin">
                            <a href="#" class="linkedin social-icon">
                              <i class="zmdi zmdi-linkedin" />
                            </a>
                          </li>
                          <li class="pinterest">
                            <a href="#" class="pinterest social-icon">
                              <i class="zmdi zmdi-pinterest" />
                            </a>
                          </li>
                          <li class="tumblr">
                            <a href="#" class="tumblr social-icon">
                              <i class="zmdi zmdi-tumblr" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="addtocart-btn">
                      <a href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.recentlySearched()}
      </React.Fragment>
    );
  }
}

export default Home;
