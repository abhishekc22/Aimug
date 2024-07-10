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

function Faq() {
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
                          <li className="">
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>{" "}
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

          <section className="copywriting-tool">
            <div className="container">
              <div className="copywriting-tool__inner">
                <div className="copywriting-tool__title-box">
                  <h2
                    className="copywriting-tool__title wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    Unlock <span>10X</span>
                    Faster & More Responsive <br />
                    AI-Powered
                    <span>Copywriting</span> Tool
                  </h2>
                  <div className="copywriting-tool__btn-box">
                    <a
                      href="about.html"
                      className="thm-btn-two copywriting-tool__btn-one wow slideInLeft"
                      data-wow-delay="100ms"
                      data-wow-duration="2500ms"
                    >
                      Start Writing Free <i className="icon-next"></i>
                    </a>
                    <a
                      href="index.html"
                      className="thm-btn-two copywriting-tool__btn-two wow slideInRight"
                      data-wow-delay="100ms"
                      data-wow-duration="2500ms"
                    >
                      Book A Demo
                    </a>
                  </div>
                </div>
                <div
                  className="copywriting-tool__img-box wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <img src="images/resource/copywriting-tool.png" alt="" />
                  <div className="copywriting-tool-shape-1 float-bob-x"></div>
                  <div className="copywriting-tool-shape-2 float-bob-y"></div>
                  <div className="copywriting-tool-shape-3 float-bob-x"></div>
                </div>
                <div className="copywriting-tool__rating-box">
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
          </section>

          <section className="how-tool-work">
            <div className="container">
              <div className="how-tool-work__title-box">
                <h2 className="how-tool-work__title">
                  How Easily <span>AIMug</span> Tool Works
                </h2>
              </div>
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="how-tool-work__single">
                    <div className="how-tool-work__shape-1"></div>
                    <div className="how-tool-work__single-inner">
                      <div className="how-tool-work__img">
                        <img
                          src="images/resource/how-tool-work-1-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="how-tool-work__content">
                        <h3 className="how-tool-work__title-two">
                          <a href="about.html">Select a writing AI tool</a>
                        </h3>
                        <p className="how-tool-work__text">
                          At first please select writing tool of AI Content
                          Writing: Unleashing the Power of Automated Creativity"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="how-tool-work__single">
                    <div className="how-tool-work__shape-1"></div>
                    <div className="how-tool-work__single-inner">
                      <div className="how-tool-work__img">
                        <img
                          src="images/resource/how-tool-work-1-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="how-tool-work__content">
                        <h3 className="how-tool-work__title-two">
                          <a href="about.html">Describe your Topic</a>
                        </h3>
                        <p className="how-tool-work__text">
                          At first please select writing tool of AI Content
                          Writing: Unleashing the Power of Automated Creativity"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="how-tool-work__single">
                    <div className="how-tool-work__shape-1"></div>
                    <div className="how-tool-work__single-inner">
                      <div className="how-tool-work__img">
                        <img
                          src="images/resource/how-tool-work-1-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="how-tool-work__content">
                        <h3 className="how-tool-work__title-two">
                          <a href="about.html">Generate, Edit & Publish</a>
                        </h3>
                        <p className="how-tool-work__text">
                          At first please select writing tool of AI Content
                          Writing: Unleashing the Power of Automated Creativity"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="feature-two">
            <div className="feature-two__inner clearfix marquee_mode">
              <ul className="feature-two__list clearfix">
                <li>
                  <a href="#">Content Writing</a>
                </li>
                <li>
                  <a href="#">Digital Ad Copy</a>
                </li>
                <li>
                  <a href="#">Social Media Ad</a>
                </li>
                <li>
                  <a href="#">Marketing Copy</a>
                </li>
                <li>
                  <a href="#">Landing Page Copy</a>
                </li>
              </ul>
            </div>
          </section>

          <section className="core-feature">
            <div className="container">
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Core Features</span>
                </div>
                <h2 className="section-title__title">
                  Generative AI Designed for creators. Make <br /> your Life
                  Easier with <span>AIMug</span>{" "}
                </h2>
              </div>
              <div className="core-feature__content-one">
                <div
                  className="core-feature__shape-1"
                  style={{
                    backgroundImage:
                      "url(images/shapes/core-feature-shape-1.png)",
                  }}
                ></div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="core-feature__content-one-left">
                      <div className="core-feature__content-one-title-box">
                        <p>Feature 1</p>
                        <h3>
                          Write ✍️ Better Content Faster, Make you Life Easier.
                        </h3>
                      </div>
                      <p className="core-feature__content-one-text">
                        Mastering the Art of AI Content Writing: Unleashing the{" "}
                        <br />
                        Power of Automated Creativity"
                      </p>
                      <ul className="core-feature__content-one-points">
                        <li>
                          <div className="icon">
                            <i className="icon-check"></i>
                          </div>
                          <div className="text">
                            <p>
                              There are more than <span>60+</span> use cases and
                              templates to pick from to meet all of your writing
                              demands.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-check"></i>
                          </div>
                          <div className="text">
                            <p>
                              Let’s Communicate with your customers with
                              emotions
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="core-feature__content-one__btn-box">
                        <a
                          href="contact.html"
                          className="thm-btn-two core-feature__content-one-btn"
                        >
                          Get Started
                          <i className="icon-next"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 wow fadeInRight"
                    data-wow-delay="100ms"
                  >
                    <div className="core-feature__content-one-right">
                      <div className="core-feature__content-one-img-box">
                        <div className="core-feature__content-one-img">
                          <img
                            src="images/resource/core-feature-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="core-feature__content-two">
                <div
                  className="core-feature__shape-1"
                  style={{
                    backgroundImage:
                      "url(images/shapes/core-feature-shape-1.png)",
                  }}
                ></div>

                <div className="row">
                  <div
                    className="col-xl-6 col-lg-6 wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <div className="core-feature__content-two-left">
                      <div className="core-feature__content-two-img-box">
                        <div className="core-feature__content-two-img">
                          <img
                            src="images/resource/core-feature-img-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="core-feature__content-two-right">
                      <div className="core-feature__content-two-title-box">
                        <p>Feature 2</p>
                        <h3>
                          Select Templates from Template Library you Like to
                          Write with <span>AIMug</span>
                        </h3>
                      </div>
                      <p className="core-feature__content-two-text">
                        Mastering the Art of AI Content Writing: Unleashing the
                        Power of Automated Creativity" There are more than 60+
                        use cases and templates to pick from to meet all of your
                        writing demands.
                      </p>
                      <div className="core-feature__content-two__btn-box">
                        <a
                          href="contact.html"
                          className="thm-btn-two core-feature__content-two-btn"
                        >
                          Get Started
                          <i className="icon-next"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="core-feature__content-one core-feature__content-one--three">
                <div
                  className="core-feature__shape-1"
                  style={{
                    backgroundImage:
                      "url(images/shapes/core-feature-shape-1.png)",
                  }}
                ></div>

                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="core-feature__content-one-left">
                      <div className="core-feature__content-one-title-box">
                        <p>Feature 1</p>
                        <h3>
                          Write ✍️ Better Content Faster, Make you Life Easier.
                        </h3>
                      </div>
                      <p className="core-feature__content-one-text">
                        Mastering the Art of AI Content Writing: Unleashing the{" "}
                        <br />
                        Power of Automated Creativity"
                      </p>
                      <ul className="core-feature__content-one-points">
                        <li>
                          <div className="icon">
                            <i className="icon-check"></i>
                          </div>
                          <div className="text">
                            <p>
                              There are more than <span>60+</span> use cases and
                              templates to pick from to meet all of your writing
                              demands.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-check"></i>
                          </div>
                          <div className="text">
                            <p>
                              Let’s Communicate with your customers with
                              emotions
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="core-feature__content-one__btn-box">
                        <a
                          href="contact.html"
                          className="thm-btn-two core-feature__content-one-btn"
                        >
                          Get Started
                          <i className="icon-next"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 wow fadeInRight"
                    data-wow-delay="100ms"
                  >
                    <div className="core-feature__content-one-right">
                      <div className="core-feature__content-one-img-box">
                        <div className="core-feature__content-one-img">
                          <img
                            src="images/resource/core-feature-img-3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="counter-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div className="counter-one__left">
                    <div className="row">
                      <div
                        className="col-xl-6 col-lg-6 wow fadeInUp"
                        data-wow-delay="100ms"
                      >
                        <div className="counter-one__single">
                          <div className="counter-one__top">
                            <div className="counter-one__icon">
                              <img
                                src="images/icons/counter-one-icon-1.png"
                                alt=""
                              />
                            </div>
                            <div className="counter-one__count count-box">
                              <h3
                                className="count-text"
                                data-stop="62"
                                data-speed="1500"
                              >
                                00
                              </h3>
                              <span className="counter-one__percent">%</span>
                            </div>
                          </div>
                          <p className="counter-one__text-1">
                            Expected Time saved After <br />
                            moving AIMug.
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-xl-6 col-lg-6 wow fadeInUp"
                        data-wow-delay="200ms"
                      >
                        <div className="counter-one__single">
                          <div className="counter-one__top">
                            <div className="counter-one__icon">
                              <img
                                src="images/icons/counter-one-icon-2.png"
                                alt=""
                              />
                            </div>
                            <div className="counter-one__count count-box">
                              <h3
                                className="count-text"
                                data-stop="82"
                                data-speed="1500"
                              >
                                00
                              </h3>
                              <span className="counter-one__percent">%</span>
                            </div>
                          </div>
                          <p className="counter-one__text-1">
                            Decrease Expenses After <br />
                            moving AIMug.
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-xl-12 wow fadeInUp"
                        data-wow-delay="300ms"
                      >
                        <div className="counter-one__text-box">
                          <div className="counter-one__shape-1"></div>
                          <p className="counter-one__text-2">
                            “This is best! Great experiences Complete AI Tools
                            ever I have used. Thanks marveltheme for this type
                            of awesome tools. Highly Recommended.”
                          </p>
                          <h5>-Stefan Rully</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 wow fadeInRight"
                  data-wow-delay="100ms"
                >
                  <div className="counter-one__right">
                    <div className="counter-one__img-box">
                      <img src="images/resource/counter-one-img-1.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="case-one">
            <div className="container">
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    Writing Use Cases
                  </span>
                </div>
                <h2 className="section-title__title">
                  Write Better Content ✍️ Faster, A Journey <br />
                  of Discovery & Growth
                </h2>
              </div>
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="case-one__single">
                    <div className="case-one__shape-1"></div>
                    <div className="case-one__icon">
                      <img src="images/icons/cases-1.png" alt="" />
                    </div>
                    <h5 className="case-one__title">
                      <a href="about.html">Writing Blog</a>
                    </h5>
                    <p className="case-one__text">
                      Writing blog content with AIMug, make sure you have a
                      clear idea to reach you target
                    </p>
                    <div className="case-one__btn-box">
                      <a href="about.html" className="case-one__btn">
                        Get Started{" "}
                        <span className="icon-up-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="case-one__single">
                    <div className="case-one__shape-1"></div>
                    <div className="case-one__icon">
                      <img src="images/icons/cases-2.png" alt="" />
                    </div>
                    <h5 className="case-one__title">
                      <a href="about.html">Digital Ad Copy</a>
                    </h5>
                    <p className="case-one__text">
                      Writing blog content with AIMug, make sure you have a
                      clear idea to reach you target
                    </p>
                    <div className="case-one__btn-box">
                      <a href="about.html" className="case-one__btn">
                        Get Started{" "}
                        <span className="icon-up-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="case-one__single">
                    <div className="case-one__shape-1"></div>
                    <div className="case-one__icon">
                      <img src="images/icons/cases-3.png" alt="" />
                    </div>
                    <h5 className="case-one__title">
                      <a href="about.html">Social Media Content</a>
                    </h5>
                    <p className="case-one__text">
                      Writing blog content with AIMug, make sure you have a
                      clear idea to reach you target
                    </p>
                    <div className="case-one__btn-box">
                      <a href="about.html" className="case-one__btn">
                        Get Started{" "}
                        <span className="icon-up-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="case-one__single">
                    <div className="case-one__shape-1"></div>
                    <div className="case-one__icon">
                      <img src="images/icons/cases-4.png" alt="" />
                    </div>
                    <h5 className="case-one__title">
                      <a href="about.html">Marketing Copy</a>
                    </h5>
                    <p className="case-one__text">
                      Writing blog content with AIMug, make sure you have a
                      clear idea to reach you target
                    </p>
                    <div className="case-one__btn-box">
                      <a href="about.html" className="case-one__btn">
                        Get Started{" "}
                        <span className="icon-up-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <div className="case-one__single">
                    <div className="case-one__shape-1"></div>
                    <div className="case-one__icon">
                      <img src="images/icons/cases-5.png" alt="" />
                    </div>
                    <h5 className="case-one__title">
                      <a href="about.html">Landing Page Copy</a>
                    </h5>
                    <p className="case-one__text">
                      Writing blog content with AIMug, make sure you have a
                      clear idea to reach you target
                    </p>
                    <div className="case-one__btn-box">
                      <a href="about.html" className="case-one__btn">
                        Get Started{" "}
                        <span className="icon-up-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div className="case-one__single">
                    <div className="case-one__shape-1"></div>
                    <div className="case-one__icon">
                      <img src="images/icons/cases-6.png" alt="" />
                    </div>
                    <h5 className="case-one__title">
                      <a href="about.html">eCommerce Copy</a>
                    </h5>
                    <p className="case-one__text">
                      Writing blog content with AIMug, make sure you have a
                      clear idea to reach you target
                    </p>
                    <div className="case-one__btn-box">
                      <a href="about.html" className="case-one__btn">
                        Get Started{" "}
                        <span className="icon-up-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="700ms"
                >
                  <div className="case-one__single">
                    <div className="case-one__shape-1"></div>
                    <div className="case-one__icon">
                      <img src="images/icons/cases-7.png" alt="" />
                    </div>
                    <h5 className="case-one__title">
                      <a href="about.html">Product Description</a>
                    </h5>
                    <p className="case-one__text">
                      Writing blog content with AIMug, make sure you have a
                      clear idea to reach you target
                    </p>
                    <div className="case-one__btn-box">
                      <a href="about.html" className="case-one__btn">
                        Get Started{" "}
                        <span className="icon-up-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="800ms"
                >
                  <div className="case-one__single">
                    <div className="case-one__shape-1"></div>
                    <div className="case-one__icon">
                      <img src="images/icons/cases-8.png" alt="" />
                    </div>
                    <h5 className="case-one__title">
                      <a href="about.html">Website Copy</a>
                    </h5>
                    <p className="case-one__text">
                      Writing blog content with AIMug, make sure you have a
                      clear idea to reach you target
                    </p>
                    <div className="case-one__btn-box">
                      <a href="about.html" className="case-one__btn">
                        Get Started{" "}
                        <span className="icon-up-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="case-one__btn-box-two">
                    <a
                      href="about.html"
                      className="thm-btn-two case-one__btn-two"
                    >
                      Show All Use Cases <i className="icon-next"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pricing-one pricing-two">
            <div className="pricing-one__shape-1 zoom-fade-2"></div>
            <div className="pricing-one__shape-2 img-bounce"></div>
            <div className="container">
              <div className="pricing-one__section-title text-center">
                <h2 className="pricing-one__section-title__title">
                  Flexible Pricing Plans That Your Needs
                </h2>
              </div>
              <div className="pricing-one__switch-toggle-title-box">
                <ul
                  className="list-inline text-center switch-toggler-list"
                  role="tablist"
                  id="switch-toggle-tab"
                >
                  <li className="month active">
                    <a href="#">Pay Monthly</a>
                  </li>
                  <li>
                    <label className="switch on">
                      <span className="slider round"></span>
                    </label>
                  </li>
                  <li className="year">
                    <a href="#">Pay Yearly</a>
                  </li>
                </ul>
                <div className="pricing-one__discount">Save 20%</div>
              </div>
              <div className="tabed-content">
                <div id="month">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                      <div className="pricing-one__single">
                        <div className="pricing-one__overly-color"></div>
                        <p className="pricing-one__tagline">Free</p>
                        <h3 className="pricing-one__price">$00</h3>
                        <div className="pricing-one__btn-box">
                          <a
                            href="about.html"
                            className="thm-btn pricing-one__btn"
                          >
                            Start for Free
                          </a>
                        </div>
                        <p className="pricing-one__text">
                          *Billed monthly until cancelled
                        </p>
                        <ul className="list-unstyled pricing-one__points">
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>1000 words/month</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Generate 10+ AI images</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>15+ Text To Speech</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>20+ AI Code Generator</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>5+ AI-powered Chat</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>10+ Speech to Text</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Basic Support</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                      <div className="pricing-one__single">
                        <div className="pricing-one__overly-color"></div>
                        <p className="pricing-one__popular">Popular</p>
                        <p className="pricing-one__tagline">Starter</p>
                        <h3 className="pricing-one__price">$29</h3>
                        <div className="pricing-one__btn-box">
                          <a
                            href="about.html"
                            className="thm-btn pricing-one__btn"
                          >
                            Start for Free
                          </a>
                        </div>
                        <p className="pricing-one__text">
                          *Billed monthly until cancelled
                        </p>
                        <ul className="list-unstyled pricing-one__points">
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>10,000 words</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Generate 100+ AI images</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>50+ Text To Speech</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>50+ AI Code Generator</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>5+ AI-powered Chat</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Unlimited Speech to Text</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>24/7 Support</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                      <div className="pricing-one__single">
                        <div className="pricing-one__overly-color"></div>
                        <p className="pricing-one__tagline">Enterprise</p>
                        <h3 className="pricing-one__price">$125</h3>
                        <div className="pricing-one__btn-box">
                          <a
                            href="about.html"
                            className="thm-btn pricing-one__btn"
                          >
                            Start for Free
                          </a>
                        </div>
                        <p className="pricing-one__text">
                          *Billed $180 annually
                        </p>
                        <ul className="list-unstyled pricing-one__points">
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>30,000 words</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Generate 500+ AI images</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>100+ Text To Speech</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>100+ AI Code Generator</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Unlimiited AI-powered Chat</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Unlimited Speech to Text</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>24/7 Support</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="year">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                      <div className="pricing-one__single">
                        <div className="pricing-one__overly-color"></div>
                        <p className="pricing-one__tagline">Free</p>
                        <h3 className="pricing-one__price">$00</h3>
                        <div className="pricing-one__btn-box">
                          <a
                            href="about.html"
                            className="thm-btn pricing-one__btn"
                          >
                            Start for Free
                          </a>
                        </div>
                        <p className="pricing-one__text">
                          *Billed monthly until cancelled
                        </p>
                        <ul className="list-unstyled pricing-one__points">
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>1000 words/month</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Generate 10+ AI images</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>15+ Text To Speech</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>20+ AI Code Generator</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>5+ AI-powered Chat</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>10+ Speech to Text</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Basic Support</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                      <div className="pricing-one__single">
                        <div className="pricing-one__overly-color"></div>
                        <p className="pricing-one__popular">Popular</p>
                        <p className="pricing-one__tagline">Starter</p>
                        <h3 className="pricing-one__price">$29</h3>
                        <div className="pricing-one__btn-box">
                          <a
                            href="about.html"
                            className="thm-btn pricing-one__btn"
                          >
                            Start for Free
                          </a>
                        </div>
                        <p className="pricing-one__text">
                          *Billed monthly until cancelled
                        </p>
                        <ul className="list-unstyled pricing-one__points">
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>10,000 words</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Generate 100+ AI images</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>50+ Text To Speech</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>50+ AI Code Generator</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>5+ AI-powered Chat</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Unlimited Speech to Text</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>24/7 Support</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                      <div className="pricing-one__single">
                        <div className="pricing-one__overly-color"></div>
                        <p className="pricing-one__tagline">Enterprise</p>
                        <h3 className="pricing-one__price">$125</h3>
                        <div className="pricing-one__btn-box">
                          <a
                            href="about.html"
                            className="thm-btn pricing-one__btn"
                          >
                            Start for Free
                          </a>
                        </div>
                        <p className="pricing-one__text">
                          *Billed $180 annually
                        </p>
                        <ul className="list-unstyled pricing-one__points">
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>30,000 words</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Generate 500+ AI images</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>100+ Text To Speech</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>100+ AI Code Generator</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Unlimiited AI-powered Chat</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>Unlimited Speech to Text</p>
                            </div>
                          </li>
                          <li>
                            <div className="circle-box"></div>
                            <div className="text">
                              <p>24/7 Support</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="faq-one">
            <div className="container">
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    Frequently Asked Questions
                  </span>
                </div>
                <h2 className="section-title__title">
                  Questions About our AIMug? <br />
                  ​​​​​​​We have Answers!
                </h2>
              </div>
              <div className="faq-one__inner">
                <div
                  className="accrodion-grp"
                  data-grp-name="faq-one-accrodion"
                >
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>What Is AIMug Generative AI Tool?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Once you know your audience,{" "}
                          <a href="#">choose a topic</a> that will resonate with
                          them. Look for trending topics in your industry or
                          address common questions or challenges your audience
                          may be facing. Keep in mind that your topic should be
                          both interesting and relevant to your audience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion  active">
                    <div className="accrodion-title">
                      <h4>
                        How Can I Make Generative AI Content for Next Project
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Once you know your audience,{" "}
                          <a href="#">choose a topic</a> that will resonate with
                          them. Look for trending topics in your industry or
                          address common questions or challenges your audience
                          may be facing. Keep in mind that your topic should be
                          both interesting and relevant to your audience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>
                        Is there a limitation on how much content I can
                        generate?
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Once you know your audience,{" "}
                          <a href="#">choose a topic</a> that will resonate with
                          them. Look for trending topics in your industry or
                          address common questions or challenges your audience
                          may be facing. Keep in mind that your topic should be
                          both interesting and relevant to your audience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>What Languages does it supports</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Once you know your audience,{" "}
                          <a href="#">choose a topic</a> that will resonate with
                          them. Look for trending topics in your industry or
                          address common questions or challenges your audience
                          may be facing. Keep in mind that your topic should be
                          both interesting and relevant to your audience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>What is SEO Writing AI and how do I use it?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Once you know your audience,{" "}
                          <a href="#">choose a topic</a> that will resonate with
                          them. Look for trending topics in your industry or
                          address common questions or challenges your audience
                          may be facing. Keep in mind that your topic should be
                          both interesting and relevant to your audience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>
                        Is it helpful for Digital Marketer or Content Writer?
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Once you know your audience,{" "}
                          <a href="#">choose a topic</a> that will resonate with
                          them. Look for trending topics in your industry or
                          address common questions or challenges your audience
                          may be facing. Keep in mind that your topic should be
                          both interesting and relevant to your audience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="brand-two brand-three">
            <div className="container">
              <div className="brand-two__title-box">
                <div className="brand-two__title count-box">
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
              <div className="brand-two__brand-list-box">
                <ul className="brand-two__list">
                  <li>
                    <div className="brand-two__brand-img">
                      <img src="images/brand/brand-logo-1.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-two__brand-img">
                      <img src="images/brand/brand-logo-2.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-two__brand-img">
                      <img src="images/brand/brand-logo-3.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-two__brand-img">
                      <img src="images/brand/brand-logo-4.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-two__brand-img">
                      <img src="images/brand/brand-logo-5.png" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="brand-two__brand-img">
                      <img src="images/brand/brand-logo-6.png" alt="" />
                    </div>
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
      </div>
    </div>
  );
}

export default Faq;
