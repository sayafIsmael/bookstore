import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,  
} from "react-router-dom";
import { createStore } from 'redux'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


class Product extends Component {
   constructor(props){
       super(props);
   }

  
  render() {
    return (
      <div >
        <BrowserView>
        <div class="cr-item ">
              <div>
                 <img class="discount_badge" src="images/badges/discount.png"></img>
                <img class="read_some" src="images/badges/read_some.png"></img>
                <img class="m-item-img ml-auto mr-auto" src={this.props.image} />
              </div>
              <div>
              <p style={{color: 'black', marginTop: 10}}>{this.props.name}</p>
              <p style={{color: 'black'}}>{this.props.writer}</p>
              <p style={{color: 'black'}}>মূল্য : {this.props.price}</p>
              </div>
          </div>
        </BrowserView>
        <MobileView>
        <div class="cr-item-mb">
              <div>
                 <img class="discount_badge" src="images/badges/discount.png"></img>
                <img class="read_some_mb" src="images/badges/read_some.png"></img>
                <img class="m-item-img ml-auto mr-auto" src={this.props.image} />
              </div>
              <div>
              <p style={{color: 'black', marginTop: 10}}>{this.props.name}</p>
              <p style={{color: 'black'}}>{this.props.writer}</p>
              <p style={{color: 'black'}}>মূল্য : {this.props.price}</p>
              </div>
          </div>
        </MobileView>
      </div>

      
    );
  }
}

export default Product;