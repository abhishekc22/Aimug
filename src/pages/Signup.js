import "../App.css"; // Adjust the path based on its location relative to the src directory
import React from "react";
import "../css/bootstrap.css";
import "../css/responsive.css";
import "../css/10-jarallax.css";
import "../css/03-owl.css";
import "../css/06-custom-animate.css";
import "../css/07-dark-body.css";
import "../css/color-switcher-design.css";
import "../css/15-magnific-popup.css";
import "../css/14-jquery-ui.css";
import "../css/13-odometer-theme-default.css";
import "../css/05-rtl.css";
import "../css/11-preloader.css";
import "../css/12-swiper.min.css";
import "../css/13-odometer-theme-default.css";
import "../css/08-font-awesome.css";
import "../css/01-global.css";
import "../css/style.css";
import "../css/04-animate.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <>
      <div body class="body-bg-color">
        <div class="page-wrapper">
          <div class="preloader"></div>

          <div class="cursor"></div>
          <div class="cursor-follower"></div>

          <header class="main-header main-header-one">
            <div class="header-lower">
              <div class="main-menu__wrapper">
                <div class="inner-container d-flex align-items-center justify-content-between">
                  <div class="main-header-one__logo-box">
                    <a href="index.html">
                      <img src="images/resource/logo-1.png" alt="" />
                    </a>
                  </div>

                  <div class="nav-outer">
                    <nav class="main-menu show navbar-expand-md">
                      <div class="navbar-header">
                        <button
                          class="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                        </button>
                      </div>

                      <div
                        class="navbar-collapse collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul class="navigation clearfix">
                          <li class="dropdown">
                            <Link to="/">Home</Link>
                            <ul>
                              <li>
                                <a href="index.html">Home 01 (AI Products)</a>
                              </li>
                              <li>
                                <a href="index-2.html">
                                  Home 02 (Content Writing)
                                </a>
                              </li>
                              <li>
                                <a href="index-3.html">Home 03 (AI Image)</a>
                              </li>
                              <li class="dropdown">
                                <a href="#">Header Styles</a>
                                <ul>
                                  <li>
                                    <a href="index.html">Header Style One</a>
                                  </li>
                                  <li>
                                    <a href="index-2.html">Header Style Two</a>
                                  </li>
                                  <li>
                                    <a href="index-3.html">
                                      Header Style Three
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li class="dropdown">
                            <a href="#">Pages</a>
                            <ul>
                              <li>
                                <a href="career.html">Career</a>
                              </li>
                              <li>
                                <a href="career-details.html">Career Details</a>
                              </li>
                              <li>
                                <Link to="/login">Login</Link>{" "}
                              </li>
                              <li>
                                <Link to="/signup">Create Account</Link>

                              </li>
                              <li>
                                <a href="reset-password.html">Reset Password</a>
                              </li>
                              <li>
                                <a href="404.html">404 Error</a>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a href="#">Blog</a>
                            <ul>
                              <li>
                                <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                <a href="blog-details.html">Blog Detail</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                          <Link to="/contact">Contact</Link>

                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>

                  <div class="outer-box d-flex align-items-center">
                    <ul class="main-header__login-sing-up">
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                      <Link to="/signup">Signup</Link>

                      </li>
                    </ul>

                    <div class="mobile-nav-toggler">
                      <span class="icon-menu"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mobile-menu">
              <div class="menu-backdrop"></div>
              <div class="close-btn">
                <span class="icon far fa-times fa-fw"></span>
              </div>
              <nav class="menu-box">
                <div class="nav-logo">
                  <a href="index.html">
                    <img src="images/logo-2.png" alt="" title="" />
                  </a>
                </div>
                <div class="search-box">
                  <form
                    method="post"
                    action="https://marveltheme.com/tf/html/aimug/contact.html"
                  >
                    <div class="form-group">
                      <input
                        type="search"
                        name="search-field"
                        value=""
                        placeholder="SEARCH HERE"
                        required
                      />
                      <button type="submit">
                        <span class="icon far fa-search fa-fw"></span>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="menu-outer"></div>
              </nav>
            </div>
          </header>

          <section class="login-page full-height">
            <div
              className="login-page__shape-1"
              style={{
                backgroundImage: "url(images/shapes/login-page-shape-1.png)",
              }}
            ></div>
            <div class="login-page__shape-2"></div>
            <div class="container">
              <div class="login-page__inner">
                <div class="login-page__close-icon">
                  <a href="#">
                    <span class="icon-close"></span>
                  </a>
                </div>
                <div class="login-page__top">
                  <div class="login-page__logo">
                    <a href="index.html">
                      <img src="images/resource/login-page-logo.png" alt="" />
                    </a>
                  </div>
                  <div class="login-page__sign-option-box">
                    <a href="#" class="login-page__sign-option">
                      {" "}
                      <img src="images/icons/google-icon.png" alt="" />
                      Continue With Google
                    </a>
                    <a href="#" class="login-page__sign-option">
                      {" "}
                      <img src="images/icons/apple-icon.png" alt="" />
                      Continue With Apple
                    </a>
                    <a href="#" class="sign-in-email">
                      Or sign in with your email
                    </a>
                  </div>
                </div>
                <form action="#" class="register-one__form">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="register-one__form__email">
                        <input
                          type="email"
                          name="email"
                          placeholder="marveltheme@gmail.com|"
                        />
                        <i class="icon-envelope"></i>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="register-one__form__password">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        <i class="icon-lock"></i>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="register-one__form__forgot">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button type="submit" class="thm-btn register-one__btn">
                        Sign In with FlowAI
                      </button>
                    </div>
                  </div>
                </form>
                <p class="register-one__tagline">
                  Don’t have an account?{" "}
                  <a href="login.html">Sign Up for Free</a>
                </p>
              </div>
            </div>
          </section>

          <div class="color-palate">
            <div class="color-trigger">
              <i class="fas fa-cog fa-fw"></i>
            </div>
            <div class="color-palate-inner">
              <div class="color-palate-head">
                <h6>Choose Options</h6>
              </div>
              <div class="various-color clearfix">
                <h6>Multiple Colors</h6>
                <br />
                <div class="colors-list">
                  <span
                    class="palate default-color active"
                    data-theme-file="css/color-themes/default-color.css"
                  ></span>
                  <span
                    class="palate blue-color"
                    data-theme-file="css/color-themes/blue-color.css"
                  ></span>
                  <span
                    class="palate brown-color"
                    data-theme-file="css/color-themes/brown-color.css"
                  ></span>
                  <span
                    class="palate green-color"
                    data-theme-file="css/color-themes/green-color.css"
                  ></span>
                  <span
                    class="palate orange-color"
                    data-theme-file="css/color-themes/orange-color.css"
                  ></span>
                  <span
                    class="palate purple-color"
                    data-theme-file="css/color-themes/purple-color.css"
                  ></span>
                  <span
                    class="palate teal-color"
                    data-theme-file="css/color-themes/teal-color.css"
                  ></span>
                  <span
                    class="palate yellow-color"
                    data-theme-file="css/color-themes/yellow-color.css"
                  ></span>
                </div>
              </div>
              <h6>RTL Version</h6>
              <ul class="rtl-version option-box">
                <li class="rtl">RTL Version</li>
                <li>LTR Version</li>
              </ul>
              <h6>Boxed Version</h6>
              <ul class="box-version option-box">
                <li class="box">Boxed</li>
                <li>Full width</li>
              </ul>
              <h6>Want Sticky Header</h6>
              <ul class="header-version option-box">
                <li class="box">No</li>
                <li>Yes</li>
              </ul>
              <h6>Dark Verion</h6>
              <ul class="dark-version option-box">
                <li class="box">Yes</li>
                <li>No</li>
              </ul>
              <div class="purchase-box">
                You will find much more options for colors and styling in admin
                panel. This color picker is used only for demonstation purposes.
                <a href="#" class="theme-btn btn-style-two">
                  <span class="btn-wrap">
                    <span class="text-one">buy now</span>
                    <span class="text-two">buy now</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="search-popup">
            <div class="color-layer"></div>
            <button class="close-search">
              <span class="far fa-times fa-fw"></span>
            </button>
            <form
              method="post"
              action="https://marveltheme.com/tf/html/aimug/blog.html"
            >
              <div class="form-group">
                <input
                  type="search"
                  name="search-field"
                  value=""
                  placeholder="Search Here"
                  required=""
                />
                <button type="submit">
                  <i class="far fa-search fa-fw"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default Signup
