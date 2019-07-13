import React, { Component } from "react";
import { createStore } from 'redux'
import MainSlider from './../components/mainSlider'

import Product from "./../components/product";

import discountProduct from "./../dummyData/discountProduct";
import publishers from "./../dummyData/publishers";
import FontAwesome from "react-fontawesome";
import loadjs from "loadjs";


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
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
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
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

        <div>
          <div
            class="d-flex justify-content-between pl-2 pr-2"
            style={{ zIndex: 1, position: "relative", top: 115 }}
          >
            <div class="publisher-icon pLeft d-flex justify-content-center">
              <i class="zmdi zmdi-chevron-left pubIcon" />
            </div>
            <div class="publisher-icon p d-flex justify-content-center">
              <i class="zmdi zmdi-chevron-right pubIcon" />
            </div>
          </div>
          <div
            class="containerx itemx-wrapper"
            style={{ zIndex: -1, marginLeft: 70 }}
          >
            {publishers.map((item, index) => {
              return (
                <div class="itemx">
                  <img src={item.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
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
            <div class="row m-0 p-2">
              <img src=""/>
            </div>
            {this.firstRow()}
            {this.firstRow()}
          </div>
        </section>

        {this.sellers()}
      </div>
    );
  }
}

export default Home;
