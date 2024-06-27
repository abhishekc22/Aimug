import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import axios from "axios";

function Carrerdetails() {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  console.log(id, "566666666666666666666");

  const baseurl = "http://127.0.0.1:8000/";

  const axioinstance = axios.create({
    baseURL: baseurl,
  });

  useEffect(() => {
    axioinstance
      .get(`jobupdate/${id}`)
      .then((response) => {
        setJobDetails(response.data);
        console.log(
          response.data,
          ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
        );
        console.log(jobDetails, "?????????????????????????????????????");
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
      });
  }, [id]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
                  <p className="page-title__sub-title">Career Single</p>
                  <h3 className="page-title__title">
                    Open Positions! Start Career at Marvel Theme
                  </h3>
                </div>
                <p className="page-title__text">
                  Mastering the Art of AI Tool: Unleashing the Power of
                  Automated Creativity with AIMug"
                </p>
              </div>
            </div>
          </section>

          <section className="career-page-top">
            <div className="container">
              <div className="career-page-top__inner">
                <div className="career-page-top__single">
                  <div className="career-page-top__img"></div>
                  <div className="career-page-top__content-box">
                    <div className="career-page-top__job-apply-box">
                      <div className="career-page-top__job-apply-left">
                        <div className="career-page-top__job-apply-icon"></div>
                        <div className="career-page-top__job-apply-details-box">
                          <h3 className="career-page-top__job-apply-title">
                            {/* {jobDetails.position_name} */}
                          </h3>
                          <ul className="career-page-top__job-apply-theme-list list-unstyled">
                            <li>{/* <p>{jobDetails.job_description}</p> */}</li>
                            <li>{/* <p>{jobDetails.vacancy} vacancy</p> */}</li>
                            <li>{/* <p>{jobDetails.salary}</p> */}</li>
                          </ul>
                          <div className="career-page-top__job-apply-country-list">
                            {/* <a href="#">{jobDetails.job_mode}</a> */}
                            <a href="#">
                              <img
                                src="images/icons/country-icon-1-1.png"
                                alt=""
                              />
                              {/* {jobDetails.location} */}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="career-page-top__job-apply-right">
                        <div className="career-page-top__job-apply-btn-box">
                          <a
                            href="#"
                            className="career-page-top__job-apply-btn thm-btn"
                          >
                            Apply Job<span className="icon-arrow-right"></span>
                          </a>
                        </div>
                        <ul className="career-page-top__job-apply-share-and-heart">
                          <li>
                            <a href="#">
                              <i className="far fa-share-alt"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="far fa-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="career-page-top__content-box-two">
                      <h3 className="career-page-top__title-1">
                        Job Description
                      </h3>
                      <h4 className="career-page-top__title-2">
                        Company Overview
                      </h4>

                      <h4 className="career-page-top__title-3">
                        Job Requirements
                      </h4>

                      <h4 className="career-page-top__title-4">
                        Skills and Experience
                      </h4>
                    </div>
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
      </div>
    </>
  );
}

export default Carrerdetails;
