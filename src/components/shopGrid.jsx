import React, { Component } from "react";
// import loadjs from "loadjs";

import ProductExtra from "./../components/productextra";
import ListBook from "./../components/listbook";
import productexData from "./../dummyData/productex";
import FontAwesome from "react-fontawesome";
import { Checkbox } from "react-bootstrap";
import * as helper from "./../helper";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';

import {
  // Route,
  Link
  // NavLink,
  // Redirect,
  // Prompt
} from "react-router-dom";

class shopGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      author: null,
      authorBooks: null
    };
    window.scrollTo(0, 0);
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  componentWillMount() {
    this.props.fetchBooks();
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.newBook) {
    //   this.props.books.unshift(nextProps.newBook);
    // }
  }

  booksTitle=()=>{
    if (this.props.books.author) {
      return(
        this.props.books.author.name 
      )
    }else if(this.props.books.publisher){
      return(
        this.props.books.publisher.name
      )
    }else if(this.props.books.category){
      return(
        this.props.books.category.name
      )
    }
  }

  authordetails = () => {
    if (this.props.books.author) {
      return (
        <div class="row m-0">
          <div class="col-2">
            <div class="browse__meta--thumbnail">
              <img
                class="img-fluid rounded-circle"
                alt="Humayun Ahmed books"
                src={this.props.books.author.image}
              />
            </div>
          </div>
          <div class="col-10">
            <h4 class="browse__meta--title">{this.props.books.author.name}</h4>
            <p class="browse__meta--description js--browse__meta--description">
              {this.props.books.author.description}
            </p>
          </div>
        </div>
      );
    }else if (this.props.books.publisher) {
      return (
        <div class="row m-0">
          <div class="col-2">
            <div class="browse__meta--thumbnail">
              <img
                class="img-fluid rounded-circle"
                alt="Humayun Ahmed books"
                src={this.props.books.publisher.image}
              />
            </div>
          </div>
          <div class="col-10">
            <h4 class="browse__meta--title">{this.props.books.publisher.name}</h4>
            <p class="browse__meta--description js--browse__meta--description">
              {this.props.books.publisher.description}
            </p>
          </div>
        </div>
      );
    }
  };
  
  showBooks = () =>{
    
    if (this.props.books.books != null || this.props.books.books != []) {
      let books = this.props.books.books;
     console.log("Fuck pussy ",books)
     return  books.map((item, index) => {
        console.log("Fuck ass ",item.title)
      return (
        <ProductExtra
          key={index}
          image={item.cover}
          price={item.new_price}
          oldprice={item.old_price}
          name={item.title}
          stock={item.stock}
          id={item.id}
          history={this.props.history}
        />
      );
    })
  }
  }
  render() {
    console.log(this.props.books)
    return (
      <React.Fragment>
        <div class="page-shop-sidebar left--sidebar bg--white section-padding--lg">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
              <div class="shop__sidebar">
                <aside class="wedget__categories poroduct--cat">
                  <form>
                    <div
                      class="row m-0 d-flex justify-content-between"
                      style={{ borderBottom: "1px solid #2e2e2e" }}
                    >
                      <div class="row m-0">
                        <FontAwesome
                          name="fas fa-sort"
                          style={{
                            color: "black",
                            marginRight: 10,
                            fontSize: 15,
                            marginTop: 3
                          }}
                        />
                        <h3 class="wedget__title">Sort</h3>
                      </div>
                      <p
                        class="text-primary"
                        style={{ cursor: "pointer", fontSize: 15 }}
                      >
                        RESET
                      </p>
                    </div>
                    <ul>
                      <li>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              class="mr-2"
                              value="option1"
                              checked={this.state.selectedOption === "option1"}
                              onChange={this.handleOptionChange}
                            />
                            Best Seller
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              class="mr-2"
                              value="option2"
                              checked={this.state.selectedOption === "option2"}
                              onChange={this.handleOptionChange}
                            />
                            New Released
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              class="mr-2"
                              value="option3"
                              checked={this.state.selectedOption === "option3"}
                              onChange={this.handleOptionChange}
                            />
                            Price - Low to High
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              class="mr-2"
                              value="option4"
                              checked={this.state.selectedOption === "option4"}
                              onChange={this.handleOptionChange}
                            />
                            Price - High to Low
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              class="mr-2"
                              value="option5"
                              checked={this.state.selectedOption === "option5"}
                              onChange={this.handleOptionChange}
                            />
                            Discount - Low to High
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              class="mr-2"
                              value="option6"
                              checked={this.state.selectedOption === "option6"}
                              onChange={this.handleOptionChange}
                            />
                            Discount - High to Low
                          </label>
                        </div>
                      </li>
                    </ul>
                  </form>
                </aside>
                <aside class="wedget__categories poroduct--cat">
                  <div
                    class="row m-0 d-flex justify-content-between"
                    style={{ borderBottom: "1px solid #2e2e2e" }}
                  >
                    <div class="row m-0">
                      <FontAwesome
                        name="fas fa-filter"
                        style={{
                          color: "black",
                          marginRight: 10,
                          fontSize: 20
                        }}
                      />
                      <h3 class="wedget__title">Filter</h3>
                    </div>
                    <p
                      class="text-primary"
                      style={{ cursor: "pointer", fontSize: 15 }}
                    >
                      CLEAR ALL
                    </p>
                  </div>
                  <div class="row m-0 p-2 pt-4">
                    <aside class="wedget__categories poroduct--tag">
                      <ul>
                        <li>
                          <a href="#"> নিষিদ্ধ বই x</a>
                        </li>
                        <li>
                          <a href="#"> বেস্ট সেলার বই x</a>
                        </li>
                        <li>
                          <a href="#">পাঠক কর্নার x</a>
                        </li>
                        <li>
                          <a href="#">ধর্মিয় বই x</a>
                        </li>
                        <li>
                          <a href="#">মুক্তিযুদ্ধ x</a>
                        </li>
                        <li>
                          <a href="#">পশ্চিম বঙ্গের বই x</a>
                        </li>
                        <li>
                          <a href="#">কিশোর সাহিত্য x</a>
                        </li>
                        <li>
                          <a href="#">বিজ্ঞান x</a>
                        </li>
                      </ul>
                    </aside>
                    <h4 style={{ fontWeight: "normal" }}>উপন্যাস</h4>
                    <FontAwesome
                      name="fas fa-sort-down"
                      style={{
                        color: "black",
                        marginRight: 10,
                        fontSize: 20,
                        paddingLeft: 10
                      }}
                    />
                  </div>
                  <ul style={{ height: 300, overflowY: "scroll" }}>
                    <li class="row m-0 ml-4">
                      <p class="pr-2">০</p>
                      <p class="filter_text">সমকালীন উপন্যাস</p>
                    </li>
                    <li class="row m-0 ml-4">
                      <p class="pr-2">০</p>
                      <p class="filter_text">চিরায়ত উপন্যাস</p>
                    </li>
                    <li class="row m-0 ml-4">
                      <p class="pr-2">০</p>
                      <p class="filter_text">সায়েন্স ফিকশন</p>
                    </li>
                    <li class="row m-0 ml-4">
                      <p class="pr-2">০</p>
                      <p class="filter_text">রোমান্টিক উপন্যাস</p>
                    </li>
                    <li class="row m-0 ml-4">
                      <p class="pr-2">০</p>
                      <p class="filter_text">
                        মুক্তিযুদ্ধভিত্তিক ও রাজনৈতিক উপন্যাস
                      </p>
                    </li>
                    <li class="row m-0 ml-4">
                      <p class="pr-2">০</p>
                      <p class="filter_text">শিশু-কিশোর উপন্যাস</p>
                    </li>
                    <li class="row m-0 ml-4">
                      <p class="pr-2">০</p>
                      <p class="filter_text">থ্রিলার ও অ্যাডভেঞ্চার উপন্যাস</p>
                    </li>
                    <li class="row m-0 ml-4">
                      <p class="pr-2">০</p>
                      <p class="filter_text">ঐতিহাসিক উপন্যাস</p>
                    </li>
                  </ul>
                </aside>
                <aside class="wedget__categories poroduct--cat">
                  <form>
                    <div>
                      <h3
                        class="wedget__title"
                        style={{ borderBottom: "1px solid #2e2e2e" }}
                      >
                        Authors
                      </h3>
                    </div>
                    <ul style={{ height: 300, overflowY: "scroll" }}>
                      <li>
                        <div class="input-group input-group-sm filter-search mt-1">
                          <input
                            type="search"
                            class="form-control js--client_search"
                            placeholder="&#9906;"
                            data_search_list="#authorIds"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck1">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck1"
                              for="exampleCheck1"
                            />
                            আর.এল. স্টাইন
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck2">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck2"
                              for="exampleCheck2"
                            />
                            জেমস প্যাটারসন
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck3">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck3"
                              for="exampleCheck3"
                            />
                            মেরি পোপ অসবর্ন
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck4">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck4"
                              for="exampleCheck4"
                            />
                            রজার হারগ্রিভস
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck5">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck5"
                              for="exampleCheck5"
                            />
                            দারুস সালাম
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck6">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck6"
                              for="exampleCheck6"
                            />
                            ইনিড ব্লাইটন
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck7">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck7"
                              for="exampleCheck7"
                            />
                            আর্ল স্ট্যানলি গার্ডনার
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck9">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck9"
                              for="exampleCheck9"
                            />
                            জেরোনিমো স্টিল্টন
                          </label>
                        </div>
                      </li>
                    </ul>
                  </form>
                </aside>
                <aside class="wedget__categories poroduct--cat">
                  <form>
                    <div>
                      <h3
                        class="wedget__title"
                        style={{ borderBottom: "1px solid #2e2e2e" }}
                      >
                        Publishers
                      </h3>
                    </div>
                    <ul style={{ height: 300, overflowY: "scroll" }}>
                      <li>
                        <div class="input-group input-group-sm filter-search mt-1">
                          <input
                            type="search"
                            class="form-control js--client_search"
                            placeholder="&#9906;"
                            data_search_list="#authorIds"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck11">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck11"
                              for="exampleCheck11"
                            />
                            র‌্যানডম হাউজ
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck21">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck21"
                              for="exampleCheck21"
                            />
                            ক্রিয়েটস্পেস ইনডিপেন্ডেন্ট পাবলিশিং প্ল্যাটফর্ম
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck31">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck31"
                              for="exampleCheck31"
                            />
                            হারপারকলিন্স পাবলিশার্স
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck41">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck41"
                              for="exampleCheck41"
                            />
                            স্কলাসটিক
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck51">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck51"
                              for="exampleCheck51"
                            />
                            পেঙ্গুইন বুকস
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck61">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck61"
                              for="exampleCheck61"
                            />
                            দারুসসালাম (সৌদি আরব)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck71">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck71"
                              for="exampleCheck71"
                            />
                            সিমন এ্যান্ড স্কাসটার
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck91">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck91"
                              for="exampleCheck91"
                            />
                            পেঙ্গুইন গ্রুপ
                          </label>
                        </div>
                      </li>
                    </ul>
                  </form>
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
                <aside class="wedget__categories poroduct--cat">
                  <form>
                    <div>
                      <h3
                        class="wedget__title"
                        style={{ borderBottom: "1px solid #2e2e2e" }}
                      >
                        Languages
                      </h3>
                    </div>
                    <ul style={{ height: 300, overflowY: "scroll" }}>
                      <li>
                        <div class="input-group input-group-sm filter-search mt-1">
                          <input
                            type="search"
                            class="form-control js--client_search"
                            placeholder="&#9906;"
                            data_search_list="#authorIds"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck22">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck22"
                              for="exampleCheck22"
                            />
                            ইংরেজি
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck23">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck23"
                              for="exampleCheck23"
                            />
                            বাংলা
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck32">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck32"
                              for="exampleCheck32"
                            />
                            হিন্দি
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck43">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck43"
                              for="exampleCheck43"
                            />
                            আরবী এবং ইংরেজি
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck52">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck52"
                              for="exampleCheck52"
                            />
                            বাংলা ও ইংরেজী
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck62">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck62"
                              for="exampleCheck62"
                            />
                            আরবী
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck7">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck7"
                              for="exampleCheck7"
                            />
                            অন্যান্য ভাষা
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <label for="exampleCheck96">
                            <input
                              type="checkbox"
                              class="mr-2"
                              id="exampleCheck96"
                              for="exampleCheck96"
                            />
                            উর্দু
                          </label>
                        </div>
                      </li>
                    </ul>
                  </form>
                </aside>
                <aside class="wedget__categories pro--range">
                  <div>
                    <h3
                      class="wedget__title"
                      style={{ borderBottom: "1px solid #2e2e2e" }}
                    >
                      Ratings
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <div className="radio">
                        <label for="exampleCheck25">
                          <input
                            type="checkbox"
                            class="mr-2"
                            id="exampleCheck52"
                            for="exampleCheck52"
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{ fontSize: 18, color: "#FF9900" }}
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <label for="exampleCheck24">
                          <input
                            type="checkbox"
                            class="mr-2"
                            id="exampleCheck24"
                            for="exampleCheck24"
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <label for="exampleCheck35">
                          <input
                            type="checkbox"
                            class="mr-2"
                            id="exampleCheck35"
                            for="exampleCheck35"
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <label for="exampleCheck44">
                          <input
                            type="checkbox"
                            class="mr-2"
                            id="exampleCheck44"
                            for="exampleCheck44"
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <label for="exampleCheck53">
                          <input
                            type="checkbox"
                            class="mr-2"
                            id="exampleCheck53"
                            for="exampleCheck53"
                          />

                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                          <FontAwesome
                            name="fas fa-star"
                            style={{
                              fontSize: 18,
                              color: "#FF9900",
                              marginRight: 5
                            }}
                          />
                        </label>
                      </div>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
            <div class="col-lg-9 col-12 order-1 order-lg-2">
              <div class="tab__container">
                <div
                  class="shop-grid tab-pane fade show active"
                  id="nav-grid"
                  role="tabpanel"
                >
                  {this.authordetails()}
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>

                      <li class="breadcrumb-item">
                        <Link to="/">Books</Link>
                      </li>
                      <li class="breadcrumb-item">
                        <Link>{(this.props.books.author) ? ("author") : ((this.props.books.publisher) ? ("publisher") : ("category"))}</Link>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        {this.booksTitle()}
                      </li>
                    </ol>
                  </nav>
                  <div class="row m-0">
                    <div class="col-lg-12">
                      <h1 style={{ fontSize: "150%", fontWeight: 400 }}>
                        {this.booksTitle()}  এর বই সমূহ
                      </h1>

                      <p>(Showing 1 to 60 of 20147 books)</p>
                    </div>
                  </div>
                  <div class="row">
                    {this.props.books.books!=null?this.showBooks():console.log("no books found")}
                  </div>
                  <ul class="wn__pagination">
                    <li class="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="zmdi zmdi-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="shop-grid tab-pane fade"
                  id="nav-list"
                  role="tabpanel"
                >
                  {productexData.map((item, index) => {
                    return (
                      <ListBook
                        key={index}
                        image={item.image}
                        scndimage={item.scndimage}
                        tag={item.tag}
                        price={item.price}
                        oldprice={item.oldprice}
                        name={item.name}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

shopGrid.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  newBook: PropTypes.object
};

const mapStateToProps = state => ({
  books: state.books.items,
  newBook: state.books.item
});


// export default shopGrid;
export default connect(mapStateToProps, { fetchBooks })(shopGrid);