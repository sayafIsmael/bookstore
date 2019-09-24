import React, { Component } from "react";
import * as helper from "./../helper";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBooks } from "../actions/bookActions";
import FontAwesome from "react-fontawesome";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import {
  // Route,
  Link
  // NavLink,
  // Redirect,
  // Prompt
} from "react-router-dom";

class seeMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: null,
      categories: null,
      publishers: null
    };
    window.scrollTo(0, 0);
    this.fetchData();
  }

  fetchData = () => {
    fetch(helper.prefix + "authors/all")
      .then(res => res.json())
      .then(response => {
        if (response.success) {
          this.setState({ authors: response.authors });
        }
      });
    fetch(helper.prefix + "category/all")
      .then(res => res.json())
      .then(response => {
        if (response.success) {
          this.setState({ categories: response.categories });
        }
      });
    fetch(helper.prefix + "publisher/all")
      .then(res => res.json())
      .then(response => {
        if (response.success) {
          this.setState({ publishers: response.publishers });
        }
      });
    // }
  };

  fetchItems = () => {
    if (this.props.type === "author") {
      if (this.state.authors != null) {
        return this.state.authors.data.map((author, index) => {
          return (
            <div class="col-md-3" key={index}>
              <p class="seemore_txt">{author.name}</p>
            </div>
          );
        });
      }
    } else if (this.props.type === "publisher") {
      if (this.state.publishers != null) {
        return this.state.publishers.data.map((publisher, index) => {
          return (
            <div class="col-md-3" key={index}>
              <p class="seemore_txt">{publisher.name}</p>
            </div>
          );
        });
      }
    } else if (this.props.type === "category") {
      if (this.state.categories != null) {
        return this.state.categories.data.map((category, index) => {
          return (
            <div class="col-md-3" key={index}>
              <p class="seemore_txt">{category.name}</p>
            </div>
          );
        });
      }
    }
  };

  render() {
    console.log(this.props.books);
    return (
      <React.Fragment>
        <div class="container">
          <div class="row d-flex justify-content-center mt-2">
            <p class="search_fv ">Search your favorite {this.props.type}</p>
            <div class="col-md-6 input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="enter keyword"
              />
              <div
                class="input-group-append"
                style={{ background: "gray", width: 39 }}
              >
                <FontAwesome
                  name="search"
                  style={{ color: "white", padding: 10, cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <div class="row mt-3">{this.fetchItems()}</div>
        </div>
      </React.Fragment>
    );
  }
}

seeMore.propTypes = {
  fetchBooks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  type: state.books.seemore
});

// export default seeMore;
export default connect(
  mapStateToProps,
  { fetchBooks }
)(seeMore);
