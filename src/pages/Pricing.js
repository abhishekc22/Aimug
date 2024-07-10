import "../App.css"; // Adjust the path based on its location relative to the src directory
import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function Pricing() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus === "loggedIn") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <div>
      <body className="body-bg-color">
        <div className="page-wrapper">
          <div className="preloader"></div>

          <div className="cursor"></div>
          <div className="cursor-follower"></div>
          <header className="main-header main-header-one">
            <div className="header-lower">
              <div className="main-menu__wrapper">
                <div className="inner-container d-flex align-items-center justify-content-between">
                  <div className="main-header-one__logo-box">
                    <a href="index.html">
                      <img src="images/resource/logo-1.png" alt="" />
                    </a>
                  </div>

                  <div className="nav-outer">
                    <nav className="main-menu show navbar-expand-md">
                      <div className="navbar-header">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                      </div>

                      <div
                        className="navbar-collapse collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation clearfix">
                          <li className="">
                            <Link to="/">Home</Link>
                            <ul>
                              <li>
                                <Link to="/home1">Home 01 (AI Products)</Link>
                              </li>
                              <li>
                                <Link to="/home2">
                                  Home 02 (Content Writing)
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li className="">
                            <Link to="/userservice">services</Link>
                          </li>
                          <li className="">
                            <Link to="/Blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="/Pricing">pricing</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>

                  <div className="outer-box d-flex align-items-center">
                    <ul className="main-header__login-sing-up">
                      {isLoggedIn ? (
                        <li>
                          <Link onClick={handleLogout}>Logout</Link>
                        </li>
                      ) : (
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                      )}
                    </ul>

                    <div className="mobile-nav-toggler">
                      <span className="icon-menu"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-menu">
              <div className="menu-backdrop"></div>
              <div className="close-btn">
                <span className="icon far fa-times fa-fw"></span>
              </div>
              <nav className="menu-box">
                <div className="nav-logo">
                  <a href="index.html">
                    <img src="images/logo-2.png" alt="" title="" />
                  </a>
                </div>
                <div className="search-box">
                  <form
                    method="post"
                    action="https://marveltheme.com/tf/html/aimug/contact.html"
                  >
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        value=""
                        placeholder="SEARCH HERE"
                        required
                      />
                      <button type="submit">
                        <span className="icon far fa-search fa-fw"></span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="menu-outer"></div>
              </nav>
            </div>
          </header>

          <section className="page-title">
            <div className="container">
              <div className="page-title__inner">
                <div
                  className="page-title__shape-1"
                  style={{
                    backgroundImage:
                      "url(images/shapes/page-title-shape-1.png)",
                  }}
                ></div>
                <div className="page-title__title-box">
                  <p className="page-title__sub-title">About AIMug</p>
                  <h3 className="page-title__title">
                    CHOOSE YOUR <br />
                    PLANE{" "}
                  </h3>
                </div>
                <p className="page-title__text">
                  Mastering the Art of AI Tool: Unleashing the Power of <br />{" "}
                  Automated Creativity with AIMug"
                </p>
              </div>
            </div>
          </section>

          <section className="testimonial-two testimonial-three">
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__name-box">
                        <h1 className="text-white">Started</h1>
                        <h3 className="text-white">₹10000 / month</h3>
                      </div>
                    </div>

                    <p className="testimonial-one__title">2,5 GB web space</p>
                    <p className="testimonial-one__title">
                      Free site buiding tools
                    </p>
                    <h3 className="testimonial-one__title">
                      Free domain registar
                    </h3>
                    <h3 className="testimonial-one__title">24/7 Support</h3>
                    <h3 className="testimonial-one__title">
                      Free marketing tool
                    </h3>
                    <h3 className="testimonial-one__title">
                      99,9% Services uptime
                    </h3>
                    <h2 className="testimonial-one__title">
                      30 day money back
                    </h2>
                    <div className="testimonial-one__icon">
                      <div className="testimonial-one__icon">
                        <h3>choose plane</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__name-box">
                        <h1 className="text-white">Business</h1>
                        <h3 className="text-white">₹15000 / month</h3>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">90 GB web space</h3>
                    <h3 className="testimonial-one__title">
                      Free site buiding tools
                    </h3>
                    <h3 className="testimonial-one__title">
                      Free domain registar
                    </h3>
                    <h3 className="testimonial-one__title">24/7 Support</h3>
                    <h3 className="testimonial-one__title">
                      Free marketing tool
                    </h3>
                    <h3 className="testimonial-one__title">
                      99,9% Services uptime
                    </h3>
                    <h3 className="testimonial-one__title">
                      30 day money back
                    </h3>
                    <div className="testimonial-one__icon">
                      <div className="testimonial-one__icon">
                        <h3>choose plane</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__name-box">
                        <h1 className="text-white">Premium</h1>
                        <h3 className="text-white">₹20000 / month</h3>
                      </div>
                    </div>

                    <h3 className="testimonial-one__title">150 GB web space</h3>
                    <h3 className="testimonial-one__title">
                      Free site buiding tools
                    </h3>
                    <h3 className="testimonial-one__title">
                      Free domain registar
                    </h3>
                    <h3 className="testimonial-one__title">24/7 Support</h3>
                    <h3 className="testimonial-one__title">
                      Free marketing tool
                    </h3>
                    <h3 className="testimonial-one__title">
                      99,9% Services uptime
                    </h3>
                    <h3 className="testimonial-one__title">
                      30 day money back
                    </h3>

                    <div className="testimonial-one__icon">
                      <div className="testimonial-one__icon">
                        <h3>choose plane</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__name-box">
                        <h1 className="text-white">Dedicated</h1>
                        <h3 className="text-white">₹25000 / month</h3>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Unlimited web space
                    </h3>
                    <h3 className="testimonial-one__title">
                      Free site buiding tools
                    </h3>
                    <h3 className="testimonial-one__title">
                      Free domain registar
                    </h3>
                    <h3 className="testimonial-one__title">24/7 Support</h3>
                    <h3 className="testimonial-one__title">
                      Free marketing tool
                    </h3>
                    <h3 className="testimonial-one__title">
                      99,9% Services uptime
                    </h3>
                    <h3 className="testimonial-one__title">
                      30 day money back
                    </h3>
                    <div className="testimonial-one__icon">
                      <div className="testimonial-one__icon">
                        <h3>choose plane</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="free-trail">
            <div className="container">
              <div className="free-trail__wrap">
                <div
                  className="free-trail__shape-3"
                  style={{
                    backgroundImage:
                      "url(images/shapes/free-trail-shape-3.png)",
                  }}
                ></div>
                <div className="free-trail__shape-1 float-bob-x"></div>
                <div className="free-trail__start-1 zoominout">
                  <img src="images/shapes/free-trail-start-1.png" alt="" />
                </div>
                <div className="free-trail__start-2 float-bob-y">
                  <img src="images/shapes/free-trail-start-2.png" alt="" />
                </div>
                <div className="free-trail__start-3 float-bob-x">
                  <img src="images/shapes/free-trail-start-3.png" alt="" />
                </div>
                <div className="free-trail__start-4 zoominout">
                  <img src="images/shapes/free-trail-start-4.png" alt="" />
                </div>
                <div className="free-trail__inner">
                  <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">
                        14 Day’s Free Trail
                      </span>
                    </div>
                    <h2 className="section-title__title">
                      Be part of the future of AIMug Let’s <br /> Create
                      Something
                    </h2>
                  </div>
                  <p className="free-trail__text">
                    Choose a topic & create something better than before, get
                    started from today. <br />
                    No Credit Card Required
                  </p>
                  <div className="free-trail__btn-box">
                    <a
                      href="contact.html"
                      className="thm-btn-two free-trail__btn"
                    >
                      Get Started Free <i className="icon-up-right-arrow"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />

          <div className="color-palate">
            <div className="color-trigger">
              <i className="fas fa-cog fa-fw"></i>
            </div>
            <div className="color-palate-inner">
              <div className="color-palate-head">
                <h6>Choose Options</h6>
              </div>
              <div className="various-color clearfix">
                <h6>Multiple Colors</h6>
                <br />
                <div className="colors-list">
                  <span
                    className="palate default-color active"
                    data-theme-file="css/color-themes/default-color.css"
                  ></span>
                  <span
                    className="palate blue-color"
                    data-theme-file="css/color-themes/blue-color.css"
                  ></span>
                  <span
                    className="palate brown-color"
                    data-theme-file="css/color-themes/brown-color.css"
                  ></span>
                  <span
                    className="palate green-color"
                    data-theme-file="css/color-themes/green-color.css"
                  ></span>
                  <span
                    className="palate orange-color"
                    data-theme-file="css/color-themes/orange-color.css"
                  ></span>
                  <span
                    className="palate purple-color"
                    data-theme-file="css/color-themes/purple-color.css"
                  ></span>
                  <span
                    className="palate teal-color"
                    data-theme-file="css/color-themes/teal-color.css"
                  ></span>
                  <span
                    className="palate yellow-color"
                    data-theme-file="css/color-themes/yellow-color.css"
                  ></span>
                </div>
              </div>
              <h6>RTL Version</h6>
              <ul className="rtl-version option-box">
                <li className="rtl">RTL Version</li>
                <li>LTR Version</li>
              </ul>
              <h6>Boxed Version</h6>
              <ul className="box-version option-box">
                <li className="box">Boxed</li>
                <li>Full width</li>
              </ul>
              <h6>Want Sticky Header</h6>
              <ul className="header-version option-box">
                <li className="box">No</li>
                <li>Yes</li>
              </ul>
              <h6>Dark Verion</h6>
              <ul className="dark-version option-box">
                <li className="box">Yes</li>
                <li>No</li>
              </ul>
              <div className="purchase-box">
                You will find much more options for colors and styling in admin
                panel. This color picker is used only for demonstation purposes.
                <a href="#" className="theme-btn btn-style-two">
                  <span className="btn-wrap">
                    <span className="text-one">buy now</span>
                    <span className="text-two">buy now</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="search-popup">
            <div className="color-layer"></div>
            <button className="close-search">
              <span className="far fa-times fa-fw"></span>
            </button>
            <form
              method="post"
              action="https://marveltheme.com/tf/html/aimug/blog.html"
            >
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  value=""
                  placeholder="Search Here"
                  required=""
                />
                <button type="submit">
                  <i className="far fa-search fa-fw"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fas fa-arrow-up fa-fw"></span>
        </div>
      </body>
    </div>
  );
}

export default Pricing;
