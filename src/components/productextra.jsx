import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import { tsImportEqualsDeclaration } from "@babel/types";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBook, addtoCart, fetchReviews } from "../actions/bookActions";
import * as helper from "./../helper";

class ProductExtra extends Component {
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
            class="cr-item pt-4"
            style={{
              width: 205,
              height: 370,
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
              this.props.fetchReviews(
                helper.prefix + "book/reviews/" + this.props.id
              );
              console.log("fecth book id = ", this.props.id);
              this.props.history.push(`/product`);
            }}
          >
            <div>
              <p
                style={{
                  position: "relative",
                  color: "white",
                  top: 24,
                  right: 53,
                  zIndex: 10
                }}
              >
                {this.props.discount}%
              </p>
              <img
                style={{ opacity: this.state.mouseOver ? 0.3 : 1,  left: 29, top: 43}}
                class="discount_badge"
                src="images/badges/discount.png"
              />
              <button
                type="button"
                class="btn btn-warning"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  top: 112,
                  color: "white",
                  display: this.state.mouseOver ? "inline" : "none"
                }}
                onClick={e => {
                  e.stopPropagation();
                  this.props.addtoCart(this.props.cart_book);
                }}
              >
                <FontAwesome
                  name="fas fa-shopping-cart"
                  style={{ color: "white", marginRight: 10 }}
                />
                Add to Cart
              </button>
              <img
                class="read_some"
                src="images/badges/read_some.png"
                style={{
                  left: 68,
                  top: 136,
                  opacity: this.state.mouseOver ? 0.3 : 1
                }}
              />

              <img
                class="m-item-img ml-auto mr-auto"
                src={this.props.image}
                style={{
                  width: 130,
                  height: 188,
                  opacity: this.state.mouseOver ? 0.3 : 1
                }}
              />
            </div>
            <div>
              <p
                style={{
                  color: "black",
                  marginTop: 10,
                  opacity: this.state.mouseOver ? 0.3 : 1
                }}
              >
                {this.props.name}
              </p>
              <p
                style={{
                  color: "black",
                  opacity: this.state.mouseOver ? 0.3 : 1
                }}
              >
                {this.props.author ? this.props.author : null}
                {this.props.writer ? this.props.writer : null}
              </p>
              {this.props.stock > 0 ? (
                <p
                  class="text-success"
                  style={{ opacity: this.state.mouseOver ? 0.3 : 1 }}
                >
                  {this.props.stock > 0 ? "Product In Stock" : null}
                </p>
              ) : (
                ""
              )}
              <p
                style={{
                  color: "black",
                  opacity: this.state.mouseOver ? 0.3 : 1
                }}
              >
                মূল্য : {this.props.price} Tk.
              </p>
            </div>
            <Link to="/product">
              <button
                type="button"
                class="btn btn-primary mt-2"
                style={{
                  width: "100%",
                  display: this.state.mouseOver ? "inline" : "none"
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        </BrowserView>
        <MobileView>
          <div
            class="cr-item-mb"
            onClick={() => this.props.history.push(`/product`)}
          >
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

ProductExtra.propTypes = {
  fetchBook: PropTypes.func.isRequired,
  addtoCart: PropTypes.func.isRequired,
  fetchReviews: PropTypes.func.isRequired
};

export default connect(
  null,
  { fetchBook, addtoCart, fetchReviews }
)(ProductExtra);
