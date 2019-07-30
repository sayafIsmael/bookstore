import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,  
} from "react-router-dom";
import { createStore } from 'redux'



class Product extends Component {
   constructor(props){
       super(props);
   }

  
  render() {
    return (
      <div >
          <div class="cr-item">
              <img class="m-item-img" src={this.props.image} />
              <div>
              <p style={{color: 'black'}}>{this.props.name}</p>
              <p style={{color: 'black'}}>{this.props.writer}</p>
              <p style={{color: 'black'}}>মূল্য : {this.props.price}</p>
              </div>
          </div>
      </div>

      
    );
  }
}

export default Product;