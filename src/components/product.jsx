import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createStore } from "redux";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBook, addtoCart} from "../actions/bookActions";
import * as helper from "./../helper";

import FontAwesome from "react-fontawesome";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <BrowserView>
          <div
            class="cr-item mt-5 pt-2"
            style={{
              boxShadow: this.state.mouseOver
                ? "inset 0 0 7px 0 #cdcdcd"
                : "none"
            }}
            onMouseOver={() => {
              this.setState({ mouseOver: true });
            }}
            onMouseOut={() => {
              this.setState({ mouseOver: false });
            }}
            onClick={() => {
              this.props.fetchBook(
                helper.prefix + "book/singlebook/" + this.props.id
              );
              console.log("fecth book id = ",this.props.id)
              this.props.history.push(`/product`);
            }}
          >
            <div>
              <img class="discount_badge" src="images/badges/discount.png" style={{ opacity: this.state.mouseOver ? 0.3 : 1 }}/>
              <button
                type="button"
                class="btn btn-warning ml-2"
                style={{ zIndex: 1, position: "absolute", top: 112, color: 'white', display: this.state.mouseOver?'block':'none'}}
                onClick={e => {
                  e.stopPropagation();
                  this.props.addtoCart(this.props.cart_book);
                }}
              >
                <FontAwesome
                  name="fas fa-shopping-cart"
                  style={{ color: "white", marginRight: 10}}
                />
                Add to Cart
              </button>
              <img class="read_some" src="images/badges/read_some.png" style={{ opacity: this.state.mouseOver ? 0.3 : 1 }}/>
              <img class="m-item-img ml-auto mr-auto" src={this.props.image} style={{ opacity: this.state.mouseOver ? 0.3 : 1 }}/>
            </div>
            <div>
              <p style={{ color: "black", marginTop: 10, opacity: this.state.mouseOver ? 0.3 : 1}}>{this.props.name}</p>
              <p style={{ color: "black" , opacity: this.state.mouseOver ? 0.3 : 1}}>{this.props.writer}</p>
              <p style={{ color: "black" , opacity: this.state.mouseOver ? 0.3 : 1}}>মূল্য : {this.props.price}</p>
            </div>
            <Link to="/product">
            <button type="button" class="btn btn-primary mt-2" style={{width: '100%', display: this.state.mouseOver?'inline':'none'}}>View Details</button>
            </Link>
          </div>
        </BrowserView>
        <MobileView>
          <div class="cr-item-mb" onClick={() => this.props.history.push(`/product`)}>
            <div>
              <img class="discount_badge" src="images/badges/discount.png" />
              <img class="read_some_mb" src="images/badges/read_some.png" />
              <img class="m-item-img ml-auto mr-auto" src={this.props.image} />
            </div>
            <div>
              <p style={{ color: "black", marginTop: 10 }}>{this.props.name}</p>
              <p style={{ color: "black" }}>{this.props.writer}</p>
              <p style={{ color: "black" }}>মূল্য : {this.props.price}</p>
            </div>
          </div>
        </MobileView>
      </React.Fragment>
    );
  }
}

Product.propTypes = {
  fetchBook: PropTypes.func.isRequired,
  addtoCart: PropTypes.func.isRequired
};

export default connect(
  null,
  { fetchBook, addtoCart}
)(Product);

