import React from "react";
import "../App.css";
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

function Career() {
  return (
    <div>
      <div body className="body-bg-color">
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
                          <li className="dropdown">
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
                              <li className="dropdown">
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
                          <li className="dropdown">
                            <a href="#">Pages</a>
                            <ul>
                              <li>
                                <Link to="/Career">Career</Link>
                              </li>
                              <li>
                                <Link to="/Carrerdetails">Career Details</Link>
                              </li>
                              <li>
                                <Link to="/login">Login</Link>
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
                          <li className="dropdown">
                            <a href="#">Blog</a>
                            <ul>
                              <li>
                                <Link to="/Blog">Blog</Link>
                              </li>
                              <li>
                                <Link to="/Blogdetail">Blog Detail</Link>
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

                  <div className="outer-box d-flex align-items-center">
                    <ul className="main-header__login-sing-up">
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/signup">Signup</Link>
                      </li>
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
                  <p className="page-title__sub-title">Career</p>
                  <h3 className="page-title__title">
                    Unleash Your Potential: Explore Exciting Careers with Us
                  </h3>
                </div>
                <p className="page-title__text">
                  Mastering the Art of AI Tool: Unleashing the Power of <br />{" "}
                  Automated Creativity with AIMug"
                </p>
              </div>
            </div>
          </section>

          <section className="about-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="about-one__left">
                    <div className="about-one__left-content">
                      <h3 className="about-one__title">
                        Create Something New with AIMug, that are simple to use
                      </h3>
                      <p className="about-one__text">
                        There are more than 80+ use cases and templates to pick
                        from to meet all of your writing demands. Let’s
                        Communicate with your customers with emotions
                      </p>
                      <div className="feature-one__rating-box">
                        <ul className="feature-one__rating">
                          <li>
                            <div className="feature-one__rating-icon">
                              <img src="images/icons/rateing.png" alt="" />
                            </div>
                            <div className="feature-one__rating-star-and-text">
                              <div className="feature-one__rating-star">
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                              </div>
                              <p className="feature-one__rating-text">
                                Rated 4.8 . 1,000+ Reviews
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="feature-one__rating-icon">
                              <img src="images/icons/send.png" alt="" />
                            </div>
                            <div className="feature-one__rating-star-and-text feature-one__rating-star-and-text--two">
                              <div className="feature-one__rating-star">
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                              </div>
                              <p className="feature-one__rating-text">
                                Rated 4.8 . 1,000+ Reviews
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="about-one__right">
                    <div className="about-one__img">
                      <img src="images/resource/about-one-img-1.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="brand-one">
            <div className="container">
              <div className="brand-one__title-box">
                <div className="brand-one__shape-1 zoominout">
                  <img src="images/shapes/brand-one-shape-1.png" alt="" />
                </div>
                <div className="brand-one__shape-2 float-bob-x">
                  <img src="images/shapes/brand-one-shape-2.png" alt="" />
                </div>
                <div className="brand-one__title count-box">
                  Trusted by
                  <span
                    className="count-text"
                    data-stop="10.8"
                    data-speed="1500"
                  >
                    00
                  </span>
                  <span>k+</span>
                  teams, agencies and freelancers.
                </div>
              </div>
              <div className="brand-one__brand-list-box">
                <div className="brand-one__shape-3 zoominout">
                  <img src="images/shapes/brand-one-shape-3.png" alt="" />
                </div>
                <ul className="brand-one__list">
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-1.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-2.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-3.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-4.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-5.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-6.png" alt="" />
                    </div>
                  </li>
                </ul>
                <ul className="brand-one__list brand-one__list-2">
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-7.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-8.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-9.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-10.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-11.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-one__brand-img">
                      <img src="images/brand/brand-logo-12.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="career-page">
            <div className="container">
              <div className="career-page__top">
                <p className="career-page__sub-title">Open Positions</p>
                <h3 className="career-page__title">
                  Open Positions! Lets Start Your Career
                </h3>
                <p className="career-page__text">
                  Mastering the Art of AI Tool: Unleashing the Power of <br />{" "}
                  Automated Creativity with AIMug"
                </p>
              </div>
              <div className="career-page__bottom">
                <ul className="career-page__list list-unstyled">
                  <li>
                    <div className="career-page__single">
                      <div className="career-page__single-left">
                        <div className="career-page__icon">
                          <img src="images/icons/career-icon-1-1.png" alt="" />
                        </div>
                        <div className="career-page__content">
                          <h3 className="career-page__single-title">
                            <a href="#">MERN stack Developer</a>
                          </h3>
                          <ul className="career-page__theme-list list-unstyled">
                            <li>
                              <p>Marvel Theme</p>
                            </li>
                            <li>
                              <p>10-50 Employees</p>
                            </li>
                            <li>
                              <p>100k - 200 USD</p>
                            </li>
                          </ul>
                          <div className="career-page__country-list">
                            <a href="#">Global Remote</a>
                            <a href="#">
                              <img
                                src="images/icons/country-icon-1-1.png"
                                alt=""
                              />
                              Australia
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="career-page__single-right">
                        <div className="career-page__btn-box">
                          <a href="#" className="career-page__btn thm-btn">
                            Apply Job<span className="icon-arrow-right"></span>
                          </a>
                        </div>
                        <p className="career-page__minutes">30 Minutes Ago</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="career-page__single">
                      <div className="career-page__single-left">
                        <div className="career-page__icon">
                          <img src="images/icons/career-icon-1-2.png" alt="" />
                        </div>
                        <div className="career-page__content">
                          <h3 className="career-page__single-title">
                            <a href="#">Lead Product Designer</a>
                          </h3>
                          <ul className="career-page__theme-list list-unstyled">
                            <li>
                              <p>Google Inc.</p>
                            </li>
                            <li>
                              <p>10-50 Employees</p>
                            </li>
                            <li>
                              <p>100k - 200 USD</p>
                            </li>
                          </ul>
                          <div className="career-page__country-list">
                            <a href="#">Full Time</a>
                            <a href="#">
                              <img
                                src="images/icons/country-icon-1-2.png"
                                alt=""
                              />
                              Canada
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="career-page__single-right">
                        <div className="career-page__btn-box">
                          <a href="#" className="career-page__btn thm-btn">
                            Apply Job<span className="icon-arrow-right"></span>
                          </a>
                        </div>
                        <p className="career-page__minutes">30 Minutes Ago</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="career-page__single">
                      <div className="career-page__single-left">
                        <div className="career-page__icon">
                          <img src="images/icons/career-icon-1-3.png" alt="" />
                        </div>
                        <div className="career-page__content">
                          <h3 className="career-page__single-title">
                            <a href="#">Senior Web Developer</a>
                          </h3>
                          <ul className="career-page__theme-list list-unstyled">
                            <li>
                              <p>Slack</p>
                            </li>
                            <li>
                              <p>10-50 Employees</p>
                            </li>
                            <li>
                              <p>100k - 200 USD</p>
                            </li>
                          </ul>
                          <div className="career-page__country-list">
                            <a href="#">Global Remote</a>
                            <a href="#">
                              <img
                                src="images/icons/country-icon-1-1.png"
                                alt=""
                              />
                              Australia
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="career-page__single-right">
                        <div className="career-page__btn-box">
                          <a href="#" className="career-page__btn thm-btn">
                            Apply Job<span className="icon-arrow-right"></span>
                          </a>
                        </div>
                        <p className="career-page__minutes">30 Minutes Ago</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="career-page__single">
                      <div className="career-page__single-left">
                        <div className="career-page__icon">
                          <img src="images/icons/career-icon-1-4.png" alt="" />
                        </div>
                        <div className="career-page__content">
                          <h3 className="career-page__single-title">
                            <a href="#">Digital Marketer</a>
                          </h3>
                          <ul className="career-page__theme-list list-unstyled">
                            <li>
                              <p>Dribbble</p>
                            </li>
                            <li>
                              <p>10-50 Employees</p>
                            </li>
                            <li>
                              <p>100k - 200 USD</p>
                            </li>
                          </ul>
                          <div className="career-page__country-list">
                            <a href="#">Global Remote</a>
                            <a href="#">
                              <img
                                src="images/icons/country-icon-1-1.png"
                                alt=""
                              />
                              Australia
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="career-page__single-right">
                        <div className="career-page__btn-box">
                          <a href="#" className="career-page__btn thm-btn">
                            Apply Job<span className="icon-arrow-right"></span>
                          </a>
                        </div>
                        <p className="career-page__minutes">30 Minutes Ago</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="career-page__single">
                      <div className="career-page__single-left">
                        <div className="career-page__icon">
                          <img src="images/icons/career-icon-1-5.png" alt="" />
                        </div>
                        <div className="career-page__content">
                          <h3 className="career-page__single-title">
                            <a href="#">Senior Webflow Developer</a>
                          </h3>
                          <ul className="career-page__theme-list list-unstyled">
                            <li>
                              <p>Webflow</p>
                            </li>
                            <li>
                              <p>10-50 Employees</p>
                            </li>
                            <li>
                              <p>100k - 200 USD</p>
                            </li>
                          </ul>
                          <div className="career-page__country-list">
                            <a href="#">Global Remote</a>
                            <a href="#">
                              <img
                                src="images/icons/country-icon-1-1.png"
                                alt=""
                              />
                              Australia
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="career-page__single-right">
                        <div className="career-page__btn-box">
                          <a href="#" className="career-page__btn thm-btn">
                            Apply Job<span className="icon-arrow-right"></span>
                          </a>
                        </div>
                        <p className="career-page__minutes">30 Minutes Ago</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="career-page__single">
                      <div className="career-page__single-left">
                        <div className="career-page__icon">
                          <img src="images/icons/career-icon-1-6.png" alt="" />
                        </div>
                        <div className="career-page__content">
                          <h3 className="career-page__single-title">
                            <a href="#">Senior Front End Developer</a>
                          </h3>
                          <ul className="career-page__theme-list list-unstyled">
                            <li>
                              <p>Linear App</p>
                            </li>
                            <li>
                              <p>10-50 Employees</p>
                            </li>
                            <li>
                              <p>100k - 200 USD</p>
                            </li>
                          </ul>
                          <div className="career-page__country-list">
                            <a href="#">Global Remote</a>
                            <a href="#">
                              <img
                                src="images/icons/country-icon-1-1.png"
                                alt=""
                              />
                              Australia
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="career-page__single-right">
                        <div className="career-page__btn-box">
                          <a href="#" className="career-page__btn thm-btn">
                            Apply Job<span className="icon-arrow-right"></span>
                          </a>
                        </div>
                        <p className="career-page__minutes">30 Minutes Ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="career-page__pagination">
                <ul className="pg-pagination list-unstyled">
                  <li className="count">
                    <a href="#">1</a>
                  </li>
                  <li className="count">
                    <a href="#">2</a>
                  </li>
                  <li className="count">
                    <a href="#">3</a>
                  </li>
                  <li className="count">
                    <a href="#">4</a>
                  </li>
                  <li className="next">
                    <a href="#" aria-label="Next">
                      <span className="icon-arrow-right"></span>
                    </a>
                  </li>
                </ul>
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

          <footer className="main-footer">
            <div className="main-footer__shape-1 img-bounce"></div>
            <div className="main-footer__top">
              <div className="container">
                <div className="row">
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__logo">
                        <a href="index.html">
                          <img src="images/resource/footer-logo-1.png" alt="" />
                        </a>
                      </div>
                      <p className="footer-widget__about-text">
                        A Magical Tool to Optimize you content for the first
                        know who you're targeting. Identify your target
                        audience.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="footer-widget__column footer-widget__company">
                      <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Company</h3>
                      </div>
                      <div className="footer-widget__company-list-box">
                        <ul className="footer-widget__company-list">
                          <li>
                            <Link to="/login">Sign in</Link>
                          </li>
                          <li>
                            <Link to="/signup">Register</Link>
                          </li>
                          <li>
                            <a href="about.html">Pricing</a>
                          </li>
                          <li>
                            <a href="about.html">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="career.html">Career</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="footer-widget__column footer-widget__resources">
                      <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Resources</h3>
                      </div>
                      <div className="footer-widget__resources-list-box">
                        <ul className="footer-widget__resources-list">
                          <li>
                            <a href="about.html">AI writer</a>
                          </li>
                          <li>
                            <a href="about.html">Businesses AI</a>
                          </li>
                          <li>
                            <a href="about.html">AI Blog writer</a>
                          </li>
                          <li>
                            <a href="about.html">AI Content Creator</a>
                          </li>
                          <li>
                            <a href="about.html">AI Copy</a>
                          </li>
                          <li>
                            <a href="blog.html">Article write</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="footer-widget__column footer-widget__newsletter">
                      <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Resources</h3>
                      </div>
                      <div className="footer-widget__email-form">
                        <form className="footer-widget__email-box">
                          <div className="footer-widget__email-input-box">
                            <input
                              type="email"
                              placeholder="Inter Your Email"
                              name="email"
                            />
                          </div>
                          <button type="submit" className="footer-widget__btn">
                            <i className="fas fa-paper-plane"></i>
                          </button>
                        </form>
                      </div>
                      <div className="site-footer__social">
                        <a href="#">
                          <i className="icon-social-1"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-2"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-3"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-4"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-5"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-footer__bottom">
              <div className="container">
                <div className="main-footer__bottom-inner">
                  <p className="main-footer__bottom-text">
                    Copyright © 2023. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>

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
      </div>
    </div>
  );
}

export default Career;
