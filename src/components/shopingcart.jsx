import React, { Component } from "react";

import { createStore } from 'redux'
import {
    Link,  
  } from "react-router-dom";


class Shopingcart extends Component {
   constructor(props){
       super(props);
   }

  
  render() {
    return (
      <div class="cart-main-area section-padding--lg bg--white">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 ol-lg-12">
                        <form action="#">               
                            <div class="table-content wnro__table table-responsive">
                                <table>
                                    <thead>
                                        <tr class="title-top">
                                            <th class="product-thumbnail">Image</th>
                                            <th class="product-name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product-quantity">Quantity</th>
                                            <th class="product-subtotal">Total</th>
                                            <th class="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product-thumbnail"><Link to={"#"}><img src="images/product/sm-3/1.jpg" alt="product img"/></Link></td>
                                            <td class="product-name"><Link to={"#"}>Natoque penatibus</Link></td>
                                            <td class="product-price"><span class="amount">$165.00</span></td>
                                            <td class="product-quantity"><input type="number" value="1"/></td>
                                            <td class="product-subtotal">$165.00</td>
                                            <td class="product-remove"><Link to={"#"}>X</Link></td>
                                        </tr>
                                        <tr>
                                            <td class="product-thumbnail"><Link to={"#"}><img src="images/product/sm-3/2.jpg" alt="product img"/></Link></td>
                                            <td class="product-name"><Link to={"#"}>Quisque fringilla</Link></td>
                                            <td class="product-price"><span class="amount">$50.00</span></td>
                                            <td class="product-quantity"><input type="number" value="1"/></td>
                                            <td class="product-subtotal">$50.00</td>
                                            <td class="product-remove"><Link to={"#"}>X</Link></td>
                                        </tr>
                                        <tr>
                                            <td class="product-thumbnail"><Link to={"#"}><img src="images/product/sm-3/3.jpg" alt="product img"/></Link></td>
                                            <td class="product-name"><Link to={"#"}>Vestibulum suscipit</Link></td>
                                            <td class="product-price"><span class="amount">$50.00</span></td>
                                            <td class="product-quantity"><input type="number" value="1"/></td>
                                            <td class="product-subtotal">$50.00</td>
                                            <td class="product-remove"><Link to={"#"}>X</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form> 
                        <div class="cartbox__btn">
                            <ul class="cart__btn__list d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                                <li><Link to={"#"}>Coupon Code</Link></li>
                                <li><Link to={"#"}>Apply Code</Link></li>
                                <li><Link to={"#"}>Update Cart</Link></li>
                                <li><Link to={"#"}>Check Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 offset-lg-6">
                        <div class="cartbox__total__area">
                            <div class="cartbox-total d-flex justify-content-between">
                                <ul class="cart__total__list">
                                    <li>Cart total</li>
                                    <li>Sub Total</li>
                                </ul>
                                <ul class="cart__total__tk">
                                    <li>$70</li>
                                    <li>$70</li>
                                </ul>
                            </div>
                            <div class="cart__total__amount">
                                <span>Grand Total</span>
                                <span>$140</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      
    );
  }
}

export default Shopingcart;