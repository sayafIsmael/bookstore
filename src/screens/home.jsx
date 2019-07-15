import React, { Component } from "react";
import { createStore } from 'redux'
import MainSlider from './../components/mainSlider'

import Product from "./../components/product";

import discountProduct from "./../dummyData/discountProduct";
import publishers from "./../dummyData/publishers";
import FontAwesome from "react-fontawesome";
import loadjs from "loadjs";


function counter(state = [], action) {
  switch (action.type) {
    case 'INCREMENT':
      state.push({id: 1, name: "xxx"})
      return state
    case 'DECREMENT':
    state.push({id: 2, name: "zzzz"})
    return state
    default:
    state.push({id: 0, name: "yyyy"})
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log("Redux consoling",store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// 1
class Home extends Component {
  
  constructor(props){
    super(props);
    this.state={
      books: discountProduct
    }
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

  firstRow = () => {
    return (
      <div class="furniture--4 border--round arrows_style owl-carousel owl-theme row mt--50">
        {this.state.books.map((item, index) => {
          console.log("Items found from dummy: ",item)
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
      <div class="container-fluid publisher-slider pb-5">
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
    <div id="carouselExample" class="carousel slide" data-ride="carousel" data-interval="9000">
        <div class="carousel-inner carousel-innerx row w-100 mx-auto" role="listbox">
            <div class="carousel-item carousel-itemx col-md-3  active">
               <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a href="#" title="image 1" class="thumb">
                      <img class="img-fluid mx-auto d-block" src="images/publishers/3.jpg" alt="slide 1" style={{height: 200, width: 'auto'}}/>
                    </a>
                  </div>
                </div>
            </div>
            {publishers.map((item, index) => {
              return (
                <div class="carousel-item carousel-itemx col-md-3  ">
                <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a href="#" title="image 2" class="thumb">
                     <img class="img-fluid mx-auto d-block" src={item.image} alt="slide 8" style={{height: 200, width: 'auto'}}/>
                    </a>
                  </div>
                  
                </div>
            </div>
              );
            })}
             
        </div>
        <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <div class="sliderBtn d-flex justify-content-center mr-5">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </div>
        </a>
        <a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
        <div class="sliderBtn d-flex justify-content-center ml-5">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </div>

        </a>
    </div>
</div>

    );
  };

 
  

  render() {
    return (
      <div>
        <MainSlider/>
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
            <div class="row m-0 pb-4 pt-2" >
              <img src="images/ad/1.jpg" style={{height: 250, width: '100%'}}/>
            </div>

            <div class="row" style={{marginTop: 70}}>
              <div class="col-lg-12">
                <div class="section__title text-center">
                  <h2 class="title__be--2">
                    সর্বোচ্চ <span class="color--theme">বিক্রিত বই</span>
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
            <div class="row m-0 pb-4 pt-2" >
              <img src="images/ad/2.jpg" style={{height: 250, width: '100%'}}/>
            </div>

            <div class="row" style={{marginTop: 70}}>
              <div class="col-lg-12">
                <div class="section__title text-center">
                  <h2 class="title__be--2">
                    আসন্ন <span class="color--theme"> বই সমূহ</span>
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
            <div class="row m-0 pb-4 pt-2" >
              <img src="images/ad/3.jpg" style={{height: 250, width: '100%'}}/>
            </div>
          </div>
        </section>

        {this.sellers()}

        <div class="modal fade" id="productmodal" tabindex="-1" role="dialog">
		        <div class="modal-dialog modal__container" role="document">
		            <div class="modal-content">
		                <div class="modal-header modal__header">
		                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		                </div>
		                <div class="modal-body">
		                    <div class="modal-product">
		                        <div class="product-images">
		                            <div class="main-image images">
		                                <img alt="big images" src="images/product/big-img/1.jpg"/>
		                            </div>
		                        </div>
		                        <div class="product-info">
		                            <h1>Simple Fabric Bags</h1>
		                            <div class="rating__and__review">
		                                <ul class="rating">
		                                    <li><span class="ti-star"></span></li>
		                                    <li><span class="ti-star"></span></li>
		                                    <li><span class="ti-star"></span></li>
		                                    <li><span class="ti-star"></span></li>
		                                    <li><span class="ti-star"></span></li>
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
		                                Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern look.
		                            </div>
		                            <div class="select__color">
		                                <h2>Select color</h2>
		                                <ul class="color__list">
		                                    <li class="red"><a title="Red" href="#">Red</a></li>
		                                    <li class="gold"><a title="Gold" href="#">Gold</a></li>
		                                    <li class="orange"><a title="Orange" href="#">Orange</a></li>
		                                    <li class="orange"><a title="Orange" href="#">Orange</a></li>
		                                </ul>
		                            </div>
		                            <div class="select__size">
		                                <h2>Select size</h2>
		                                <ul class="color__list">
		                                    <li class="l__size"><a title="L" href="#">L</a></li>
		                                    <li class="m__size"><a title="M" href="#">M</a></li>
		                                    <li class="s__size"><a title="S" href="#">S</a></li>
		                                    <li class="xl__size"><a title="XL" href="#">XL</a></li>
		                                    <li class="xxl__size"><a title="XXL" href="#">XXL</a></li>
		                                </ul>
		                            </div>
		                            <div class="social-sharing">
		                                <div class="widget widget_socialsharing_widget">
		                                    <h3 class="widget-title-modal">Share this product</h3>
		                                    <ul class="social__net social__net--2 d-flex justify-content-start">
		                                        <li class="facebook"><a href="#" class="rss social-icon"><i class="zmdi zmdi-rss"></i></a></li>
		                                        <li class="linkedin"><a href="#" class="linkedin social-icon"><i class="zmdi zmdi-linkedin"></i></a></li>
		                                        <li class="pinterest"><a href="#" class="pinterest social-icon"><i class="zmdi zmdi-pinterest"></i></a></li>
		                                        <li class="tumblr"><a href="#" class="tumblr social-icon"><i class="zmdi zmdi-tumblr"></i></a></li>
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
      </div>
    );
  }
}

export default Home;
