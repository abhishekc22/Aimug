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

function Home() {
  return (
    <>
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
                          <li className="dropdown">
                            <Link to="/">Home</Link>
                            
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
                                <Link to="/login">Login</Link>
                              </li>
                              <li>
                                <Link to="/signup">Create Account</Link>
                              </li>
                              <li>
                                <Link to="/resetpassword">Reset Password</Link>

                              </li>
                              <li>
                                <Link to="/userservice">services</Link>
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

          <section className="feature-one">
            <div className="container">
              <div className="feature-one__inner">
                <h2 className="feature-one__title">
                  Explore the Possibilities of <br />
                  AI 🤖 with <span>AIMug</span>{" "}
                </h2>
                <div className="feature-one__btn-box">
                  <a href="contact.html" className="thm-btn feature-one__btn">
                    {" "}
                    <i className="fal fa-plus"></i> Get Started Free
                  </a>
                </div>
                <div className="feature-one__main-content-box">
                  <div className="feature-one__color-overly-1 flaot-bob-y"></div>
                  <div className="feature-one__color-overly-2 flaot-bob-x"></div>
                  <div className="feature-one__color-overly-3 img-bounce"></div>
                  <div className="feature-one__main-content-top">
                    <ul className="feature-one__list">
                      <li>
                        <div className="feature-one__single">
                          <div className="feature-one__icon">
                            <img
                              src="images/icons/ai-content-writing.png"
                              alt=""
                            />
                          </div>
                          <h5 className="feature-one__title-2">
                            <a href="about.html">
                              AI Content <br />
                              Writing
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="feature-one__single">
                          <div className="feature-one__icon">
                            <img src="images/icons/ai-image.png" alt="" />
                          </div>
                          <h5 className="feature-one__title-2">
                            <a href="about.html">
                              AI Image <br />
                              Generator
                            </a>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="feature-one__main-content-middle">
                    <div className="feature-one__start-1 zoominout">
                      <img src="images/shapes/feature-one-star-1.png" alt="" />
                    </div>
                    <div className="feature-one__start-2 float-bob-x">
                      <img src="images/shapes/feature-one-star-2.png" alt="" />
                    </div>
                    <div className="feature-one__start-3 float-bob-y">
                      <img src="images/shapes/feature-one-star-3.png" alt="" />
                    </div>

                    <div className="feature-one__start-5 zoominout">
                      <img src="images/shapes/feature-one-star-5.png" alt="" />
                    </div>
                    <div className="feature-one__start-6 float-bob-x">
                      <img src="images/shapes/feature-one-star-6.png" alt="" />
                    </div>
                    <div className="feature-one__start-7 float-bob-y">
                      <img src="images/shapes/feature-one-star-7.png" alt="" />
                    </div>

                    <div className="feature-one__ai-pack">
                      <h3>AI Pack</h3>
                    </div>
                    <ul className="feature-one__list">
                      <li>
                        <div className="feature-one__single">
                          <div className="feature-one__icon">
                            <img src="images/icons/ai-code.png" alt="" />
                          </div>
                          <h5 className="feature-one__title-2">
                            <a href="about.html">
                              AI Code <br /> Generator
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="feature-one__cpu-icon-box">
                          <img src="images/icons/cpu.png" alt="" />
                        </div>
                      </li>
                      <li>
                        <div className="feature-one__single">
                          <div className="feature-one__icon">
                            <img src="images/icons/ai-chat.png" alt="" />
                          </div>
                          <h5 className="feature-one__title-2">
                            <a href="about.html">AI Chat Bot</a>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="feature-one__main-content-bottom">
                    <div className="feature-one__start-4 zoominout">
                      <img src="images/shapes/feature-one-star-4.png" alt="" />
                    </div>
                    <div className="feature-one__start-8 float-bob-x">
                      <img src="images/shapes/feature-one-star-8.png" alt="" />
                    </div>
                    <ul className="feature-one__list">
                      <li>
                        <div className="feature-one__single">
                          <div className="feature-one__icon">
                            <img src="images/icons/ai-audio.png" alt="" />
                          </div>
                          <h5 className="feature-one__title-2">
                            <a href="about.html">
                              Generate <br /> Text to Audio
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="feature-one__single">
                          <div className="feature-one__icon">
                            <img src="images/icons/ai-speech.png" alt="" />
                          </div>
                          <h5 className="feature-one__title-2">
                            <a href="about.html">
                              Speech to <br /> Text
                            </a>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
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
          </section>

          <section className="solutions-one">
            <div className="container">
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    All AI Platform
                  </span>
                </div>
                <h2 className="section-title__title">
                  All Possible Generative AI Solutions <br />
                  at One Place
                </h2>
              </div>
              <div
                className="solutions-one__carousel owl-carousel owl-theme thm-owl__carousel"
                data-owl-options='{
        "loop": true,
        "autoplay": true,
        "margin": 24,
        "nav": false,
        "dots": false,
        "smartSpeed": 500,
        "autoplayTimeout": 10000,
        "navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
        "responsive": {
          "0": {
            "items": 1
          },
          "768": {
            "items": 2
          },
          "992": {
            "items": 3
          },
          "1350": {
            "items": 4
          }
        }
      }'
              >
                <div className="item">
                  <div className="solutions-one__single">
                    <div className="solutions-one__icon">
                      <img src="images/icons/ai-speech.png" alt="" />
                    </div>
                    <h4 className="solutions-one__title">
                      <a href="about.html">Speech To Text</a>
                    </h4>
                    <p className="solutions-one__text">
                      Mastering the Art of AI Content Writing: Unleashing the
                      Power of Automated Creativity"
                    </p>
                    <a href="about.html" className="solutions-one__btn">
                      Explore More <i className="fas fa-arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="solutions-one__single">
                    <div className="solutions-one__icon">
                      <img src="images/icons/ai-content-writing.png" alt="" />
                    </div>
                    <h4 className="solutions-one__title">
                      <a href="about.html">AI Writing Tools</a>
                    </h4>
                    <p className="solutions-one__text">
                      Mastering the Art of AI Content Writing: Unleashing the
                      Power of Automated Creativity"
                    </p>
                    <a href="about.html" className="solutions-one__btn">
                      Explore More <i className="fas fa-arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="solutions-one__single">
                    <div className="solutions-one__icon">
                      <img src="images/icons/ai-chat.png" alt="" />
                    </div>
                    <h4 className="solutions-one__title">
                      <a href="about.html">AI Chat Bot</a>
                    </h4>
                    <p className="solutions-one__text">
                      Mastering the Art of AI Content Writing: Unleashing the
                      Power of Automated Creativity"
                    </p>
                    <a href="about.html" className="solutions-one__btn">
                      Explore More <i className="fas fa-arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="solutions-one__single">
                    <div className="solutions-one__icon">
                      <img src="images/icons/ai-image.png" alt="" />
                    </div>
                    <h4 className="solutions-one__title">
                      <a href="about.html">AI Image Generator</a>
                    </h4>
                    <p className="solutions-one__text">
                      Mastering the Art of AI Content Writing: Unleashing the
                      Power of Automated Creativity"
                    </p>
                    <a href="about.html" className="solutions-one__btn">
                      Explore More <i className="fas fa-arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="solutions-one__single">
                    <div className="solutions-one__icon">
                      <img src="images/icons/ai-audio.png" alt="" />
                    </div>
                    <h4 className="solutions-one__title">
                      <a href="about.html">Text To Audio</a>
                    </h4>
                    <p className="solutions-one__text">
                      Mastering the Art of AI Content Writing: Unleashing the
                      Power of Automated Creativity"
                    </p>
                    <a href="about.html" className="solutions-one__btn">
                      Explore More <i className="fas fa-arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="solutions-one__single">
                    <div className="solutions-one__icon">
                      <img src="images/icons/ai-code.png" alt="" />
                    </div>
                    <h4 className="solutions-one__title">
                      <a href="about.html">AI Code Generator</a>
                    </h4>
                    <p className="solutions-one__text">
                      Mastering the Art of AI Content Writing: Unleashing the
                      Power of Automated Creativity"
                    </p>
                    <a href="about.html" className="solutions-one__btn">
                      Explore More <i className="fas fa-arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="solutions-two">
            <div className="container">
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    Pur AI Solutions
                  </span>
                </div>
                <h2 className="section-title__title">
                  Generative AI Designed for creators. Make <br /> your Life
                  Easier with <span>AIMug</span>
                </h2>
              </div>
              <div
                className="solutions-two__content-one wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div
                  className="solutions-two__shape-1"
                  style={{
                    backgroundImage:
                      "url(images/shapes/solutions-two-shape-1.png)",
                  }}
                ></div>

                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="solutions-two__content-one-left">
                      <div className="solutions-two__shape-2 zoominout">
                        <img
                          src="images/shapes/solutions-two-shape-2.png"
                          alt=""
                        />
                      </div>
                      <div className="solutions-two__content-one-title-box">
                        <p>AI Writing Tools</p>
                        <h3>
                          Write ✍️ Better Content Faster, The Future of AI
                          Writing Tools is Finally here
                        </h3>
                      </div>
                      <p className="solutions-two__content-one-text-1">
                        Mastering the Art of AI Content Writing: Unleashing the{" "}
                        <br />
                        Power of Automated Creativity"
                      </p>
                      <ul className="solutions-two__content-one-points">
                        <li>
                          <div className="icon">
                            <i className="fal fa-check"></i>
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
                            <i className="fal fa-check"></i>
                          </div>
                          <div className="text">
                            <p>
                              Let’s Communicate with your customers with
                              emotions
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-check"></i>
                          </div>
                          <div className="text">
                            <p>
                              Choose the best AI copy for your message & save as
                              a document
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="solutions-two__content-one-btn-box">
                        <a
                          href="about.html"
                          className="thm-btn solutions-two__content-one-btn"
                        >
                          {" "}
                          <i className="fal fa-plus"></i> Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="solutions-two__content-one-right">
                      <div className="solutions-two__content-one-img-box">
                        <div className="solutions-two__content-one-img">
                          <img
                            src="images/resource/solutions-two-content-one-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="solutions-two__content-two">
                <div className="row">
                  <div
                    className="col-xl-6 col-lg-6 wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <div className="solutions-two__content-two-single">
                      <div className="solutions-two__content-two-top">
                        <div className="solutions-two__content-two-title-box">
                          <p>AI Chat Bot</p>
                          <h3>
                            With FlowAI, you can chat 🤖 smarter, not harder.
                          </h3>
                        </div>
                        <p className="solutions-two__content-two-text-1">
                          Mastering the Art of AI Content Writing: Unleashing
                          the Power of Automated Creativity"
                        </p>
                        <div className="solutions-two__content-two-btn">
                          <a href="contact.html">
                            Start Chat
                            <span className="icon-up-right-arrow"></span>
                          </a>
                        </div>
                      </div>
                      <div className="solutions-two__content-two-img-box">
                        <div className="solutions-two__content-two-shape-1">
                          <img
                            src="images/shapes/solutions-two-content-two-shape-1.png"
                            alt=""
                          />
                        </div>
                        <div className="solutions-two__content-two-img">
                          <img
                            src="images/resource/solutions-two-content-two-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-6 col-lg-6 wow fadeInRight"
                    data-wow-delay="100ms"
                  >
                    <div className="solutions-two__content-two-single solutions-two__content-two-single-2">
                      <div className="solutions-two__content-two-top">
                        <div className="solutions-two__content-two-title-box">
                          <p>AI Video Generator</p>
                          <h3>
                            A wonderful video may be created by anyone. That
                            includes you.
                          </h3>
                        </div>
                        <p className="solutions-two__content-two-text-1">
                          By listening to our leading AI text to speech reader,
                          you can breeze through papers, articles, PDFs, and
                          emails.
                        </p>
                        <div className="solutions-two__content-two-btn">
                          <a href="about.html">
                            Try AI Video
                            <span className="icon-up-right-arrow"></span>
                          </a>
                        </div>
                      </div>
                      <div className="solutions-two__content-two-img-box">
                        <div className="solutions-two__content-two-img">
                          <img
                            src="images/resource/solutions-two-content-two-img-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="solutions-two__content-three wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div
                  className="solutions-two__content-three-shape-1"
                  style={{
                    backgroundImage:
                      "url(images/shapes/solutions-two-content-three-shape-1.png)",
                  }}
                ></div>

                <div className="row">
                  <div className="col-xl-6">
                    <div className="solutions-two__content-three-left">
                      <ul className="solutions-two__browser-dot">
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <div className="solutions-two__content-three-shape-2"></div>
                      <ul className="row solutions-two__content-three-img-list">
                        <li className="col-xl-3 col-lg-3 col-md-3">
                          <div className="solutions-two__content-three-img-single">
                            <div className="solutions-two__content-three-img">
                              <img
                                src="images/resource/solutions-two-content-three-img-1-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="solutions-two__content-three-img-single">
                            <div className="solutions-two__content-three-img">
                              <img
                                src="images/resource/solutions-two-content-three-img-1-2.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                        <li className="col-xl-3 col-lg-3 col-md-3">
                          <div className="solutions-two__content-three-img-single">
                            <div className="solutions-two__content-three-img">
                              <img
                                src="images/resource/solutions-two-content-three-img-1-3.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="solutions-two__content-three-img-single">
                            <div className="solutions-two__content-three-img">
                              <img
                                src="images/resource/solutions-two-content-three-img-1-4.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="solutions-two__content-three-img-single">
                            <div className="solutions-two__content-three-img">
                              <img
                                src="images/resource/solutions-two-content-three-img-1-5.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                        <li className="col-xl-3 col-lg-3 col-md-3">
                          <div className="solutions-two__content-three-img-single">
                            <div className="solutions-two__content-three-img">
                              <img
                                src="images/resource/solutions-two-content-three-img-1-6.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="solutions-two__content-three-img-single">
                            <div className="solutions-two__content-three-img">
                              <img
                                src="images/resource/solutions-two-content-three-img-1-7.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="solutions-two__content-three-img-single">
                            <div className="solutions-two__content-three-img">
                              <img
                                src="images/resource/solutions-two-content-three-img-1-8.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                        <li className="col-xl-3 col-lg-3 col-md-3">
                          <div className="solutions-two__content-three-img-single">
                            <div className="solutions-two__content-three-img">
                              <img
                                src="images/resource/solutions-two-content-three-img-1-9.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="solutions-two__content-three-img-single">
                            <div className="solutions-two__content-three-img">
                              <img
                                src="images/resource/solutions-two-content-three-img-1-10.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="solutions-two__content-three-right">
                      <div className="solutions-two__content-three-title-box">
                        <p>AI Writing Tools</p>
                        <h3>
                          Generate Outstanding AI Images Just Using Prompt 🌄
                        </h3>
                      </div>
                      <p className="solutions-two__content-three-text-1">
                        <span>AIMug</span> is an artificial art generator that
                        turns your ideas into one-of-a kind artwork and
                        photographs in seconds. Finally, you'll have the perfect
                        image to go with your statement.
                      </p>
                      <div className="solutions-two__content-three-points-box">
                        <ul className="solutions-two__content-three-points list-unstyled">
                          <li>
                            <div className="icon">
                              <span className="icon-check"></span>
                            </div>
                            <div className="text">
                              <p>1000+ Styles</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-check"></span>
                            </div>
                            <div className="text">
                              <p>Custom Sizes</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-check"></span>
                            </div>
                            <div className="text">
                              <p>Oil Painting</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-check"></span>
                            </div>
                            <div className="text">
                              <p>+ And Much More</p>
                            </div>
                          </li>
                        </ul>
                        <ul className="solutions-two__content-three-points solutions-two__content-three-points-2 list-unstyled">
                          <li>
                            <div className="icon">
                              <span className="icon-check"></span>
                            </div>
                            <div className="text">
                              <p>Photo-realistic scenes</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-check"></span>
                            </div>
                            <div className="text">
                              <p>Graphics</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-check"></span>
                            </div>
                            <div className="text">
                              <p>Isometric Vector Graphics</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="solutions-two__content-three-btn-box">
                        <a
                          href="about.html"
                          className="thm-btn solutions-two__content-three-btn"
                        >
                          {" "}
                          <i className="fal fa-plus"></i>Generate AI Image
                        </a>
                      </div>
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

          <section className="collaboration-one">
            <div className="container">
              <div className="collaboration-one__inner">
                <div className="collaboration-one__star-1 zoominout">
                  <img
                    src="images/shapes/collaboration-one-start-1.png"
                    alt=""
                  />
                </div>
                <div className="collaboration-one__star-2 float-bob-x">
                  <img
                    src="images/shapes/collaboration-one-start-2.png"
                    alt=""
                  />
                </div>
                <div className="collaboration-one__star-3 float-bob-y">
                  <img
                    src="images/shapes/collaboration-one-start-3.png"
                    alt=""
                  />
                </div>
                <div className="collaboration-one__star-4 zoominout">
                  <img
                    src="images/shapes/collaboration-one-start-4.png"
                    alt=""
                  />
                </div>
                <div
                  className="collaboration-one__shape-1 float-bob-x"
                  style={{
                    backgroundImage:
                      "url(images/shapes/collaboration-one-shape-1.png)",
                  }}
                ></div>
                <div
                  className="collaboration-one__shape-2"
                  style={{
                    backgroundImage:
                      "url(images/shapes/collaboration-one-shape-2.png)",
                  }}
                ></div>

                <div className="collaboration-one__title-box">
                  <p className="collaboration-one__sub-title">
                    Integrations With
                  </p>
                  <h3 className="collaboration-one__title">
                    Streamlining Collaboration
                    <br /> with AIMug
                  </h3>
                </div>
                <div className="collaboration-one__icon-box">
                  <div className="collaboration-one__icon">
                    <img src="images/icons/cpu.png" alt="" />/
                    <div className="collaboration-one__icon-shape-1">
                      <img
                        src="images/shapes/collaboration-one-icon-shape-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="collaboration-one__icon-1">
                    <img src="images/icons/collaboration-1.png" alt="" />
                  </div>
                  <div className="collaboration-one__icon-2">
                    <img src="images/icons/collaboration-2.png" alt="" />
                  </div>
                  <div className="collaboration-one__icon-3">
                    <img src="images/icons/collaboration-3.png" alt="" />
                  </div>
                  <div className="collaboration-one__icon-4">
                    <img src="images/icons/collaboration-4.png" alt="" />
                  </div>
                  <div className="collaboration-one__icon-5">
                    <img src="images/icons/collaboration-5.png" alt="" />
                  </div>
                  <div className="collaboration-one__icon-6">
                    <img src="images/icons/collaboration-6.png" alt="" />
                  </div>
                  <div className="collaboration-one__icon-7">
                    <img src="images/icons/collaboration-7.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonial-one">
            <div className="testimonial-one__btn-box">
              <a href="about.html" className="thm-btn testimonial-one__btn">
                Show More
              </a>
            </div>
            <div className="container">
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    Customer Stories
                  </span>
                </div>
                <h2 className="section-title__title">
                  <span>AIMug.</span> Received <i className="icon-star"></i>{" "}
                  4.8/5 Stars in
                  <br /> Over 10,000+ Reviews.
                </h2>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img src="images/resource/testimonial-1-1.jpg" alt="" />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">
                          Dianne Russell
                        </h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Great tool for content writing, Love it!
                    </h3>
                    <p className="testimonial-one__text">
                      This is the best thing that has happened to my team in a
                      while! Makes post text something
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-1.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          5<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img src="images/resource/testimonial-1-2.jpg" alt="" />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">Jane Cooper</h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Awesome Tools! Thanks MarvelTheme
                    </h3>
                    <p className="testimonial-one__text">
                      Best Complete AI Tools ever I have used. Thanks
                      marveltheme for this type of awesome tools.
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-2.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          5<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img src="images/resource/testimonial-1-3.jpg" alt="" />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">Arlene McCoy</h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Best User Experience! Fallen In Love On It!
                    </h3>
                    <p className="testimonial-one__text">
                      This is best! Great experiences Complete AI Tools ever I
                      have used. Thanks marveltheme for this type of awesome
                      tools. Highly Recommended{" "}
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-3.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          5<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img src="images/resource/testimonial-1-4.jpg" alt="" />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">
                          Cameron Williamson
                        </h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Great tools Love it, Specially for Content Writing
                    </h3>
                    <p className="testimonial-one__text">
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                      et. Sunt qui esse pariatur duis deserunt mollit dolore
                      cillum minim.
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-4.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          5<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single testimonial-one__single-5">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img src="images/resource/testimonial-1-5.jpg" alt="" />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">Albert Flores</h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Support! Just Awesome
                    </h3>
                    <p className="testimonial-one__text">
                      Awesome Template as well as great customer support within
                      few minutes. Recommended. Best Complete AI Tools ever I
                      have used. Great Design and High Quality Code.
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          5<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single testimonial-one__single-6">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img src="images/resource/testimonial-1-6.jpg" alt="" />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">
                          Courtney Henry
                        </h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Great Design and High Quality Code
                    </h3>
                    <p className="testimonial-one__text">
                      Awesome Template as well as great customer support within
                      few minutes. Recommended. Best Complete AI Tools ever I
                      have used. Thanks marveltheme for this type of awesome
                      tools.{" "}
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-6.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          5<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single testimonial-one__single-7">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img src="images/resource/testimonial-1-7.jpg" alt="" />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">
                          Marvin McKinney
                        </h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Really High Quality Code
                    </h3>
                    <p className="testimonial-one__text">
                      Great Design and High Quality Code. This is best Complete
                      template AI Tools ever I have used. Thanks marveltheme!
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-7.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          5<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single testimonial-one__single-8">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img src="images/resource/testimonial-1-8.jpg" alt="" />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">
                          Courtney Henry
                        </h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Great tools Love it, Specially for Content Writing
                    </h3>
                    <p className="testimonial-one__text">
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                      et. Sunt qui esse pariatur duis deserunt mollit dolore
                      cillum minim.
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-8.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          5<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single testimonial-one__single-9">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img src="images/resource/testimonial-1-9.jpg" alt="" />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">
                          Darlene Robertson
                        </h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Most Waited Product for my Next Boom Project
                    </h3>
                    <p className="testimonial-one__text">
                      Neat and Clean Great Design and Development Awesome!
                      Template.
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-9.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          4<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single testimonial-one__single-10">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="images/resource/testimonial-1-10.jpg"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">Jacob Jones</h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Awesome Tools! Thanks MarvelTheme
                    </h3>
                    <p className="testimonial-one__text">
                      This is the best thing that has happened to my team in a
                      while! Makes post text something we barely need to think
                      about!
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-10.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          5<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single testimonial-one__single-11">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="images/resource/testimonial-1-11.jpg"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">Jerome Bell</h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Best User Experience! Fallen In Love On It!
                    </h3>
                    <p className="testimonial-one__text">
                      This is best! Great experiences Complete AI Tools ever I
                      have used, code quality is also to notch.
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-11.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          4<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="testimonial-one__single testimonial-one__single-12">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="images/resource/testimonial-1-12.jpg"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__name-box">
                        <h3 className="testimonial-one__name">Eleanor Pena</h3>
                        <p className="testimonial-one__sub-title">
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <h3 className="testimonial-one__title">
                      Great tools Love it
                    </h3>
                    <p className="testimonial-one__text">
                      This is the best thing that has happened to my team in a
                      while! Makes post text something dolore cillum minim.
                    </p>
                    <div className="testimonial-one__icon-and-ratting">
                      <div className="testimonial-one__icon">
                        <img
                          src="images/icons/testimonial-one-icon-12.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__ratting">
                        <p>
                          5<span className="icon-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pricing-one">
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
                            href="contact.html"
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
                            href="contact.html"
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
                            href="contact.html"
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
                            href="contact.html"
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
                            href="contact.html"
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
                            href="contact.html"
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
                            <Link to="/Adminlogin">Admindashboard</Link>
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
      </body>
    </>
  );
}

export default Home;
