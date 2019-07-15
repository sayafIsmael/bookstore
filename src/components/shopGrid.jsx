import React, { Component } from "react";
import loadjs from "loadjs";

import ProductExtra from "./../components/productextra";
import ListBook from "./../components/listbook";
import productexData from "./../dummyData/productex";

class shopGrid extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div class="page-shop-sidebar left--sidebar bg--white section-padding--lg">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
              <div class="shop__sidebar">
                <aside class="wedget__categories poroduct--cat">
                <h3 class="wedget__title">ক্যাটাগরী সমূহ</h3>
                  <ul>
                    <li>
                      <a href="#">
                        মুক্তিযুদ্ধ <span>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        বিজ্ঞান <span>(4)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        পশ্চিম বঙ্গের বই <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        শিশুতোষ <span>(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        কিশোর সাহিত্য <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        বেস্ট সেলার বই <span>(9)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        ধর্মিয় বই <span>(13)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        নিষিদ্ধ বই <span>(20)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        পাঠক কর্নার <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        ব্লগ <span>(13)</span>
                      </a>
                    </li>
                  </ul>
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
                <aside class="wedget__categories poroduct--tag">
                <h3 class="wedget__title">Book Tags</h3>
                  <ul>
                    <li>
                      <a href="#"> নিষিদ্ধ বই</a>
                    </li>
                    <li>
                      <a href="#"> বেস্ট সেলার বই</a>
                    </li>
                    <li>
                      <a href="#">পাঠক কর্নার</a>
                    </li>
                    <li>
                      <a href="#">ধর্মিয় বই</a>
                    </li>
                    <li>
                      <a href="#">মুক্তিযুদ্ধ</a>
                    </li>
                    <li>
                      <a href="#">পশ্চিম বঙ্গের বই</a>
                    </li>
                    <li>
                      <a href="#">কিশোর সাহিত্য</a>
                    </li>
                    <li>
                      <a href="#">বিজ্ঞান</a>
                    </li>
                  </ul>
                </aside>
                <aside class="wedget__categories sidebar--banner">
                    <img
                    src="images/books/newProduct.jpg"
                    alt="banner images"
                    style={{maxHeight: 350}}
                  />
                  <div class="text">
                    <h2>new products</h2>
                    <h6>
                      save up to <br /> <strong>40%</strong>off
                    </h6>
                  </div>
                </aside>
              </div>
            </div>
            <div class="col-lg-9 col-12 order-1 order-lg-2">
              <div class="row">
                <div class="col-lg-12">
                  <div class="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between">
                    <div
                      class="shop__list nav justify-content-center"
                      role="tablist"
                    >
                      <a
                        class="nav-item nav-link active"
                        data-toggle="tab"
                        href="#nav-grid"
                        role="tab"
                      >
                        <i class="fa fa-th" />
                      </a>
                      <a
                        class="nav-item nav-link"
                        data-toggle="tab"
                        href="#nav-list"
                        role="tab"
                      >
                        <i class="fa fa-list" />
                      </a>
                    </div>
                    <p>Showing 1–12 of 40 results</p>
                    <div class="orderby__wrapper">
                      <span>Sort By</span>
                      <select class="shot__byselect">
                        <option>Default sorting</option>
                        <option>HeadPhone</option>
                        <option>Furniture</option>
                        <option>Jewellery</option>
                        <option>Handmade</option>
                        <option>Kids</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab__container">
                <div
                  class="shop-grid tab-pane fade show active"
                  id="nav-grid"
                  role="tabpanel"
                >
                  <div class="row">
                  {productexData.map((item, index)=>{
                        return(
                          <ProductExtra
                          key={index}
                            image={item.image}
                            scndimage={item.scndimage}
                            tag={item.tag}
                            price={item.price}
                            oldprice={item.oldprice}
                            name={item.name}
                          />
                        )
                    })}
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
                {productexData.map((item, index)=>{
                    return(
                      <ListBook
                         key={index}
                        image={item.image}
                        scndimage={item.scndimage}
                        tag={item.tag}
                        price={item.price}
                        oldprice={item.oldprice}
                        name={item.name}
                      />
                    )
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default shopGrid;
