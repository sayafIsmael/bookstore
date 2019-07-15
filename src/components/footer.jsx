import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import loadjs from "loadjs";

class Footer extends Component {
   constructor(props){
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
        <footer
        class="page-footer font-small blue-grey lighten-5"
        style={{ margin: 0 }}
      >
        <div style={{ backgroundColor: "#21d192" }}>
          <div class="container">
            <div class="row py-4 d-flex align-items-center">
              <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 class="mb-0">Get connected with us on social networks!</h6>
              </div>

              <div class="col-md-6 col-lg-7 text-center text-md-right">
                <a class="fb-ic">
                  <FontAwesome
                    // className='super-crazy-colors'
                    name="fab fa-facebook-f white-text mr-4"
                    size="2x"
                    style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                  />
                </a>
                <a class="tw-ic">
                  <FontAwesome
                    // className='super-crazy-colors'
                    name="fab fa-twitter white-text mr-4"
                    size="2x"
                    style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="container text-center text-md-left mt-5">
          <div class="row mt-3 dark-grey-text">
            <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
              <h6 class="text-uppercase font-weight-bold">
                গ্রন্থ সম্পর্কে কিছু কথা
              </h6>
              <hr
                class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 600 }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase font-weight-bold">কিছু নিয়ম</h6>
              <hr
                class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 600 }}
              />
              <p>
                <a class="dark-grey-text" href="">
                  ব্লগ লেখা
                </a>
              </p>
              <p>
                <a class="dark-grey-text" href="">
                  সাইটে বই রাখার নিয়ম
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase font-weight-bold">যোগাযোগ</h6>
              <hr
                class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 600 }}
              />
              <p>
                <i class="fas fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i class="fas fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i class="fas fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print mr-3" /> + 01 234 567 89
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-4 mx-auto mb-4">
              <h6 class="text-uppercase font-weight-bold">ঠিকানা</h6>
              <hr
                class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 600 }}
              />
             <div id="map"></div>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center text-black-50 py-3">
          © 2018 Copyright:
          <a
            class="dark-grey-text"
            href="https://mdbootstrap.com/education/bootstrap/"
          >
            {" "}
            tigerley.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;