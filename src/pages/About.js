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

function About() {
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
                  <Link to="/">
                      <img
                        src="/images/resource/ITL-WHITE-LOGO.png"
                        alt=""
                        style={{ width: "110px", height: "100px" }}
                      />
                      </Link>
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
                    A Magical Tool For <br />
                    Seamless Collaboration
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

          <section className="video-one">
            <div
              className="video-one__bg"
              style={{
                backgroundImage: "url(images/background/video-one-bg.jpg)",
              }}
            ></div>

            <div className="video-one__inner">
              <a
                href="https://www.pexels.com/video/l-2942803/"
                className="video-one__play lightbox-video"
              >
                <span className="fa-solid fa-play fa-fw">
                  <i className="ripple"></i>
                </span>
              </a>
            </div>
          </section>

          <section className="team-one">
            <div className="container">
              <h3 className="team-one__title">
                Meet Our Dynamic Team Member, Who <br />
                Are Really Care About
              </h3>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src="images/team/team-1-1.jpg" alt="" />
                      <div className="team-one__social">
                        <a href="#">
                          <i className="icon-social-3"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-1"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-4"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                        <a href="about.html">Brooklyn Simmons</a>
                      </h4>
                      <p className="team-one__sub-title">Digital Marketer</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src="images/team/team-1-2.jpg" alt="" />
                      <div className="team-one__social">
                        <a href="#">
                          <i className="icon-social-3"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-1"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-4"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                        <a href="about.html">Leslie Alexander</a>
                      </h4>
                      <p className="team-one__sub-title">Product Designer</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src="images/team/team-1-3.jpg" alt="" />
                      <div className="team-one__social">
                        <a href="#">
                          <i className="icon-social-3"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-1"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-4"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                        <a href="about.html">Ralph Edwards</a>
                      </h4>
                      <p className="team-one__sub-title">
                        Marketing Coordinator
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src="images/team/team-1-4.jpg" alt="" />
                      <div className="team-one__social">
                        <a href="#">
                          <i className="icon-social-3"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-1"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-4"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                        <a href="about.html">Albert Flores</a>
                      </h4>
                      <p className="team-one__sub-title">Digital Creator</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src="images/team/team-1-5.jpg" alt="" />
                      <div className="team-one__social">
                        <a href="#">
                          <i className="icon-social-3"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-1"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-4"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                        <a href="about.html">Jane Cooper</a>
                      </h4>
                      <p className="team-one__sub-title">Web Designer</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src="images/team/team-1-6.jpg" alt="" />
                      <div className="team-one__social">
                        <a href="#">
                          <i className="icon-social-3"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-1"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-4"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                        <a href="about.html">Jacob Jones</a>
                      </h4>
                      <p className="team-one__sub-title">Software Engineer</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src="images/team/team-1-7.jpg" alt="" />
                      <div className="team-one__social">
                        <a href="#">
                          <i className="icon-social-3"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-1"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-4"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                        <a href="about.html">Courtney Henry</a>
                      </h4>
                      <p className="team-one__sub-title">Lead Developer</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src="images/team/team-1-8.jpg" alt="" />
                      <div className="team-one__social">
                        <a href="#">
                          <i className="icon-social-3"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-1"></i>
                        </a>
                        <a href="#">
                          <i className="icon-social-4"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                        <a href="about.html">Darrell Steward</a>
                      </h4>
                      <p className="team-one__sub-title">President of Sales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonial-two testimonial-three">
            <div className="container">
              <h3 className="testimonial-two__sec-title">
                <span>AIMug.</span> Received <i className="icon-star"></i> 4.8/5
                Stars in <br />
                Over 10,000+ Reviews.
              </h3>
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
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

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
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

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
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
                      have used. Thanks marveltheme
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

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
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
                      et. Sunt qui esse pariatur duis deserunt
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

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <div className="testimonial-one__single">
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
                      few minutes. Recommended. Best Complete AI Tools ever
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

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div className="testimonial-one__single">
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
                      few minutes. Recommended.
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

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="700ms"
                >
                  <div className="testimonial-one__single">
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

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="800ms"
                >
                  <div className="testimonial-one__single">
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
                      et. Sunt qui esse pariatur duis deserunt
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
              </div>
            </div>
          </section>

          <section className="ai-product">
            <div className="container">
              <h3 className="ai-product__top-title">
                We deliver great quality and performance <br /> while offering
                you the most recent AI <br /> Business products.
              </h3>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="ai-product__single">
                    <div className="ai-product__icon">
                      <img src="images/icons/research-discovery.png" alt="" />
                    </div>
                    <h4 className="ai-product__title">
                      <a href="about.html">Research and Discovery</a>
                    </h4>
                    <p className="ai-product__text">
                      A Magical Tool to Optimize your content for the first to
                      know who you're targeting.
                    </p>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="ai-product__single">
                    <div className="ai-product__icon">
                      <img
                        src="images/icons/information-architecture.png"
                        alt=""
                      />
                    </div>
                    <h4 className="ai-product__title">
                      <a href="about.html">Information Architecture</a>
                    </h4>
                    <p className="ai-product__text">
                      A Magical Tool to Optimize your content for the first to
                      know who you're targeting.
                    </p>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="ai-product__single">
                    <div className="ai-product__icon">
                      <img src="images/icons/design-development.png" alt="" />
                    </div>
                    <h4 className="ai-product__title">
                      <a href="about.html">Design & Development</a>
                    </h4>
                    <p className="ai-product__text">
                      A Magical Tool to Optimize your content for the first to
                      know who you're targeting.
                    </p>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="ai-product__single">
                    <div className="ai-product__icon">
                      <img src="images/icons/quality-assurance.png" alt="" />
                    </div>
                    <h4 className="ai-product__title">
                      <a href="about.html">Quality Assurance, Launch</a>
                    </h4>
                    <p className="ai-product__text">
                      A Magical Tool to Optimize your content for the first to
                      know who you're targeting.
                    </p>
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
    </>
  );
}

export default About;
