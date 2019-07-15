import React, { Component } from "react";
import loadjs from "loadjs";
;

class Signin extends Component {
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
         <section class="my_account_area pt--80 pb--55 bg--white">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-12">
						<div class="my__account__wrapper">
							<h3 class="account__title">Login</h3>
							<form action="#">
								<div class="account__form">
									<div class="input__box">
										<label>Username or email address <span>*</span></label>
										<input type="text"/>
									</div>
									<div class="input__box">
										<label>Password<span>*</span></label>
										<input type="text"/>
									</div>
									<div class="form__btn">
										<button>Login</button>
										<label class="label-for-checkbox">
											<input id="rememberme" class="input-checkbox" name="rememberme" value="forever" type="checkbox"/>
											<span>Remember me</span>
										</label>
									</div>
									<a class="forget_pass" href="#">Lost your password?</a>
								</div>
							</form>
						</div>
					</div>
					<div class="col-lg-6 col-12">
						<div class="my__account__wrapper">
							<h3 class="account__title">Register</h3>
							<form action="#">
								<div class="account__form">
                                    <div class="input__box">
										<label>Full Name<span>*</span></label>
										<input type="name"/>
									</div>
									<div class="input__box">
										<label>Email address <span>*</span></label>
										<input type="email"/>
									</div>
									<div class="input__box">
										<label>Password<span>*</span></label>
										<input type="password"/>
									</div>
									<div class="form__btn">
										<button>Register</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
  }
}

export default Signin;
