import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import loadjs from "loadjs";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer
        class="page-footer font-small blue-grey lighten-5"
        style={{ margin: 0 }}
      >
        <BrowserView>
          <div class="container text-center text-md-left mt-3">
            <div
              class="row mt-5 pt-5 dark-grey-text"
              style={{ background: "#F1F2EE" }}
            >
              <div
                class="col-md-3 col-lg-4 col-xl-3 mb-4"
                style={{ borderRight: "1px solid black" }}
              >
                <h6 class="text-uppercase font-weight-bold">গ্রন্থিক.কম</h6>

                <div class="row m-0">
                  <div
                    class="d-flex justify-content-center align-items-center"
                    style={{ width: "20%" }}
                  >
                    <img style={{ width: 25 }} src="images/icons/mobile.png" />
                  </div>
                  <div style={{ width: "80%" }}>
                    <p>হেল্প লাইন</p>
                    <p>+৮৮ ০২ ৭১৯ ১৭৪৭</p>
                    <p>০১৬১৬ ৩১৩ ৯৫৭</p>
                  </div>
                </div>
                <div class="row m-0">
                  <div
                    class="d-flex justify-content-center align-items-center"
                    style={{ width: "20%" }}
                  >
                    <img style={{ width: 25 }} src="images/icons/email.png" />
                  </div>
                  <div style={{ width: "80%" }}>
                    <p>info@gronthik.com</p>
                  </div>
                </div>
                <div class="row m-0 mt-2">
                  <div
                    class="d-flex justify-content-center align-items-center"
                    style={{ width: "20%" }}
                  >
                    <img style={{ width: 20 }} src="images/icons/Address.png" />
                  </div>
                  <div style={{ width: "80%" }}>
                    <p>১১০ আলিজা টাওয়ার (৪র্থ তলা)</p>
                    <p>ফকিরাপুল, ঢাকা-১০০০</p>
                  </div>
                </div>
                <ul>
                  <div class="row m-0 ml-4 mt-2">
                    <a target="_blank" href="https://www.facebook.com/gronthik.com19">
                      <img
                        class="social_icon"
                        src="images/icons/HELPLINE_fb.png"
                      />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCxTKi6rOVcYgmIjwRizB95w?fbclid=IwAR1VHkwi93u82l7b87zxBjmhkFQQUuzN4I2z6_5XtIN2Vxu4lBk9hP1QnPs">
                      <img
                        class="social_icon"
                        src="images/icons/HELPLINE_tube.png"
                      />
                    </a>
                    <li>
                      <img
                        class="social_icon"
                        src="images/icons/HELPLINE_inst.png"
                      />
                    </li>
                    <li>
                      <img
                        class="social_icon"
                        src="images/icons/HELPLINE_twt.png"
                      />
                    </li>
                  </div>
                </ul>
              </div>

              <div
                class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
                style={{ borderRight: "1px solid black" }}
              >
                <h6 class="text-uppercase font-weight-bold">সাইড ম্যাপ</h6>

                <p>
                  <a class="dark-grey-text" href="">
                    হোম
                  </a>
                </p>
                <p>
                  <a class="dark-grey-text" href="">
                    বই
                  </a>
                </p>
                <p>
                  <a class="dark-grey-text" href="">
                    নিষিদ্ধ বই
                  </a>
                </p>
                <p>
                  <a class="dark-grey-text" href="">
                    বেস্ট সেলার বই
                  </a>
                </p>
                <p>
                  <a class="dark-grey-text" href="">
                    শিশুতোষ বই
                  </a>
                </p>
                <p>
                  <a class="dark-grey-text" href="">
                    কিশোর সাহিত্য
                  </a>
                </p>
                <p>
                  <a class="dark-grey-text" href="">
                    কবিতা
                  </a>
                </p>
                <p>
                  <a class="dark-grey-text" href="">
                    প্রবন্ধ
                  </a>
                </p>
              </div>

              <div
                class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
                style={{ borderRight: "1px solid black" }}
              >
                <h6 class="text-uppercase font-weight-bold">ফেইসবুক</h6>

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
                <div id="map" />
              </div>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div class="container text-center text-md-left mt-2">
            <div
              class="row mt-3 pt-3 dark-grey-text"
              style={{ background: "#F1F2EE" }}
            >
              <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
                <h6 class="text-uppercase font-weight-bold mb-2">
                  গ্রন্থিক.কম
                </h6>

                <div class="row m-0">
                  <div
                    class="d-flex justify-content-center align-items-center"
                    style={{ width: "30%" }}
                  >
                     <img style={{ width: 25 }} src="images/icons/mobile.png" />
                  </div>
                  <div style={{ width: "70%", textAlign: "start" }}>
                    <p>হেল্প লাইন</p>
                    <p>+৮৮ ০২ ৭১৯ ১৭৪৭</p>
                    <p>০১৬১৬ ৩১৩ ৯৫৭</p>
                  </div>
                </div>
                <div class="row m-0">
                  <div
                    class="d-flex justify-content-center align-items-center"
                    style={{ width: "30%" }}
                  >
                   <img style={{ width: 25 }} src="images/icons/email.png" />
                  </div>
                  <div style={{ width: "70%", textAlign: "start" }}>
                    <p>info@gronthik.com</p>
                  </div>
                </div>
                <div class="row m-0 mt-2">
                  <div
                    class="d-flex justify-content-center align-items-center"
                    style={{ width: "30%" }}
                  >
                    <img style={{ width: 20 }} src="images/icons/Address.png" />
                  </div>
                  <div style={{ width: "70%", textAlign: "start" }}>
                    <p>১১০ আলিজা টাওয়ার (৪র্থ তলা)</p>
                    <p>ফকিরাপুল, ঢাকা-১০০০</p>
                  </div>
                </div>
                <ul>
                <div class="row d-flex justify-content-center mt-2">
                            <li>
                              <img class="social_icon" src="images/icons/HELPLINE_fb.png"/>  
                            </li>
                            <li>
                              <img class="social_icon" src="images/icons/HELPLINE_tube.png"/>  
                            </li>
                            <li>
                            <img class="social_icon" src="images/icons/HELPLINE_inst.png"/>
                            </li>
                            <li>
                            <img class="social_icon" src="images/icons/HELPLINE_twt.png"/>
                            </li>
                            </div>
                </ul>
              </div>
            </div>
          </div>
        </MobileView>
        <BrowserView>
          <div class="container mt-3">
            <div
              style={{
                background: "#F1F2EE",
                width: "100%",
                height: 150,
                borderRadius: 12
              }}
            >
              <div>
                <p class="payment-text" style={{ textAlign: "center" }}>
                  We accept payment via
                </p>
              </div>
              <div class="row m-0 pl-3 pb-2">
                <div class="payment-box col">
                  <img class="payment-img" src="images/icons/visa.png" />
                </div>
                <div class="payment-box col">
                  <img class="payment-img" src="images/icons/master_card.png" />
                </div>
                <div class="payment-box col">
                  <img class="payment-img" src="images/icons/american_ex.png" />
                </div>
                <div class="payment-box col">
                  <img class="payment-img" src="images/icons/brac_bank.jpg" />
                </div>
                <div class="payment-box col">
                  <img class="payment-img" src="images/icons/dbbl-nexus.png" />
                </div>
                <div class="payment-box col">
                  <img class="payment-img" src="images/icons/city-bank.png" />
                </div>
                <div class="payment-box col">
                  <img class="payment-img" src="images/icons/bkash.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row d-flex justify-content-center align-items-center pt-4 pb-4">
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  width: "100%",
                  textAlign: "center"
                }}
              >
                গ্রন্থিক.কম বাংলাদেশের অনলাইন ভিত্তিক বুক শপগুলোর মধ্যে অন্যতম ।
              </p>
              <p>বইয়ের এক ভিন্নধর্মী প্লাটফর্ম গড়ে তুলতে আমাদের এই যাত্রা।</p>
              <p>
                দেশের সকল প্রান্তের পাঠকের কাছে সবচেয়ে সহজ, নিরাপদ ও দ্রুত বই
                পৌছে দেবার লক্ষ্য নিয়ে আমরা আমাদের পথচলা শুরু করছি ।
              </p>
              <p>
                পাঠকের জন্য নানারকম সৃজনশীল ও সময়োপযোগী আয়োজনের মাধ্যমে সহসাই
                আমরা দেশের
              </p>
              <p>
                সকল প্রান্তে নিজেদের অবস্থান তৈরী করে নিতে পারবো বলে আশা করছি ।{" "}
              </p>
            </div>
          </div>
          <div class="container">
            <div
              class="footer-copyright text-center text-black-50 py-2"
              style={{ background: "#C67935" }}
            >
              gronthik.com
              <a class="dark-grey-text" href="#">
                {" "}
                © 2019 Copyright
              </a>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div class="container mt-3">
            <div
              style={{ background: "#F1F2EE", height: 170, borderRadius: 12 }}
            >
              <div>
                <p class="payment-text mt-3" style={{ textAlign: "center" }}>
                  We accept payment via
                </p>
              </div>
              <div class="row m-0 d-flex justify-content-center">
                <div class="payment-box-mb">
                  <img class="payment-img-mb" src="images/icons/visa.png" />
                </div>
                <div class="payment-box-mb">
                  <img
                    class="payment-img-mb"
                    src="images/icons/master_card.png"
                  />
                </div>
                <div class="payment-box-mb">
                  <img
                    class="payment-img-mb"
                    src="images/icons/american_ex.png"
                  />
                </div>
                <div class="payment-box-mb">
                  <img
                    class="payment-img-mb"
                    src="images/icons/brac_bank.jpg"
                  />
                </div>
                <div class="payment-box-mb">
                  <img
                    class="payment-img-mb"
                    src="images/icons/dbbl-nexus.png"
                  />
                </div>
                <div class="payment-box-mb">
                  <img
                    class="payment-img-mb"
                    src="images/icons/city-bank.png"
                  />
                </div>
                <div class="payment-box-mb">
                  <img class="payment-img-mb" src="images/icons/bkash.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row d-flex justify-content-center align-items-center p-4">
              <p style={{ fontSize: 18, textAlign: "center" }}>
                <span class="font-weight-bold">
                  গ্রন্থিক.কম বাংলাদেশের অনলাইন ভিত্তিক বুক শপগুলোর মধ্যে অন্যতম
                  ।{" "}
                </span>
                বইয়ের এক ভিন্নধর্মী প্লাটফর্ম গড়ে তুলতে আমাদের এই যাত্রা।{" "}
              </p>
              <p style={{ textAlign: "center" }}>
                দেশের সকল প্রান্তের পাঠকের কাছে সবচেয়ে সহজ, নিরাপদ ও দ্রুত বই
                পৌছে দেবার লক্ষ্য নিয়ে আমরা আমাদের পথচলা শুরু করছি ।
              </p>
              <p style={{ textAlign: "center" }}>
                পাঠকের জন্য নানারকম সৃজনশীল ও সময়োপযোগী আয়োজনের মাধ্যমে সহসাই
                আমরা দেশের
              </p>
              <p style={{ textAlign: "center" }}>
                সকল প্রান্তে নিজেদের অবস্থান তৈরী করে নিতে পারবো বলে আশা করছি ।{" "}
              </p>
            </div>
          </div>

          <div
            class="footer-copyright text-center text-black-50 py-2"
            style={{ background: "#C67935" }}
          >
            gronthik.com
            <a class="dark-grey-text" href="#">
              {" "}
              © 2019 Copyright
            </a>
          </div>
        </MobileView>
      </footer>
    );
  }
}

export default Footer;
