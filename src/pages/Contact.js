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

function Contact() {
  return (
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
                            
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li class="dropdown">
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
                          <li class="dropdown">
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

                  <div class="outer-box d-flex align-items-center">
                    <ul class="main-header__login-sing-up">
                      <li>
                        <Link to="/signup">Sign up</Link>
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

          <section class="page-title">
            <div class="container">
              <div class="page-title__inner">
                <div
                  className="page-title__shape-1"
                  style={{
                    backgroundImage:
                      "url(images/shapes/page-title-shape-1.png)",
                  }}
                ></div>
                <div class="page-title__title-box">
                  <p class="page-title__sub-title">Contact Us</p>
                  <h3 class="page-title__title">
                    Our Dynamic Team are Waiting <br />
                    for Reach you
                  </h3>
                </div>
                <p class="page-title__text">
                  Mastering the Art of AI Tool: Unleashing the Power of <br />{" "}
                  Automated Creativity with AIMug"
                </p>
              </div>
            </div>
          </section>

          <section class="contact-one">
            <div class="container">
              <div class="row">
                <div class="col-xl-5 col-lg-6">
                  <div class="contact-one__left">
                    <div class="contact-one__left-content">
                      <div class="contact-one__title-box">
                        <h3>Drop A Line</h3>
                        <p>
                          There are more than 80+ use cases and templates to
                          pick from to meet all of your writing demands. Let’s
                          Communicate with your customers with emotions
                        </p>
                      </div>
                      <ul class="contact-one__contact-list">
                        <li>
                          <div class="icon">
                            <span class="icon-call"></span>
                          </div>
                          <div class="text">
                            <p>
                              <a href="tel:60355501234422">
                                (603) 555-0123-4422
                              </a>
                              <a href="tel:6005550124">(600) 555-0124</a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div class="icon">
                            <span class="icon-map"></span>
                          </div>
                          <div class="text">
                            <p>
                              2464 Royal Ln. Mesa, New <br /> Jersey 45463
                            </p>
                          </div>
                        </li>
                        <li>
                          <div class="icon">
                            <span class="icon-envelope"></span>
                          </div>
                          <div class="text">
                            <p>
                              <a href="mailto:your.mail@gmail.com">
                                your.mail@gmail.com
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div class="contact-one__social">
                        <a href="#">
                          <span class="icon-social-1"></span>
                        </a>
                        <a href="#">
                          <span class="icon-social-3"></span>
                        </a>
                        <a href="#">
                          <span class="icon-social-4"></span>
                        </a>
                        <a href="#">
                          <span class="icon-social-5"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-6">
                  <div class="contact-one__right">
                    <div class="contact-one__form-box">
                      <h3 class="contact-one__form-title">Send us a message</h3>
                      <form
                        method="POST"
                        action="https://marveltheme.com/tf/html/aimug/inc/mail.php"
                        id="contact-form"
                      >
                        <div class="form-group">
                          <p class="contact-one__form-label">Name*</p>
                          <input
                            type="text"
                            name="name"
                            placeholder="John Smith"
                            required=""
                          />
                          <div class="contact-one__form-icon">
                            <i class="fas fa-user"></i>
                          </div>
                        </div>

                        <div class="form-group">
                          <p class="contact-one__form-label">Email*</p>
                          <input
                            type="email"
                            name="email"
                            placeholder="marveltheme@gmail.com|"
                            required=""
                          />
                          <div class="contact-one__form-icon">
                            <i class="far fa-envelope"></i>
                          </div>
                        </div>

                        <div class="form-group text-message-box">
                          <p class="contact-one__form-label">
                            How can we help?
                          </p>
                          <textarea
                            name="message"
                            placeholder="Enter your message here"
                          ></textarea>
                        </div>

                        <div class="form-group">
                          <div class="button-box">
                            <button
                              type="submit"
                              class="thm-btn contact-one__btn"
                              data-loading-text="Please wait..."
                            >
                              Submit Request
                            </button>
                          </div>
                        </div>
                      </form>
                      <p class="ajax-response mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="goolge-map">
            <div class="goolge-map__outer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s"
                allowfullscreen=""
                class="google-map__one"
              ></iframe>
            </div>
          </section>

          <section class="faq-one">
            <div class="container">
              <div class="section-title text-center">
                <div class="section-title__tagline-box">
                  <span class="section-title__tagline">
                    Frequently Asked Questions
                  </span>
                </div>
                <h2 class="section-title__title">
                  Questions About our AIMug? <br />
                  ​​​​​​​We have Answers!
                </h2>
              </div>
              <div class="faq-one__inner">
                <div class="accrodion-grp" data-grp-name="faq-one-accrodion">
                  <div class="accrodion">
                    <div class="accrodion-title">
                      <h4>What Is AIMug Generative AI Tool?</h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
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
                  <div class="accrodion  active">
                    <div class="accrodion-title">
                      <h4>
                        How Can I Make Generative AI Content for Next Project
                      </h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
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
                  <div class="accrodion">
                    <div class="accrodion-title">
                      <h4>
                        Is there a limitation on how much content I can
                        generate?
                      </h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
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
                  <div class="accrodion">
                    <div class="accrodion-title">
                      <h4>What Languages does it supports</h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
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
                  <div class="accrodion">
                    <div class="accrodion-title">
                      <h4>What is SEO Writing AI and how do I use it?</h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
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
                  <div class="accrodion">
                    <div class="accrodion-title">
                      <h4>
                        Is it helpful for Digital Marketer or Content Writer?
                      </h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
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
          <section class="free-trail">
            <div class="container">
              <div class="free-trail__wrap">
                <div
                  className="free-trail__shape-3"
                  style={{
                    backgroundImage:
                      "url(images/shapes/free-trail-shape-3.png)",
                  }}
                ></div>
                <div class="free-trail__shape-1 float-bob-x"></div>
                <div class="free-trail__start-1 zoominout">
                  <img src="images/shapes/free-trail-start-1.png" alt="" />
                </div>
                <div class="free-trail__start-2 float-bob-y">
                  <img src="images/shapes/free-trail-start-2.png" alt="" />
                </div>
                <div class="free-trail__start-3 float-bob-x">
                  <img src="images/shapes/free-trail-start-3.png" alt="" />
                </div>
                <div class="free-trail__start-4 zoominout">
                  <img src="images/shapes/free-trail-start-4.png" alt="" />
                </div>
                <div class="free-trail__inner">
                  <div class="section-title text-center">
                    <div class="section-title__tagline-box">
                      <span class="section-title__tagline">
                        14 Day’s Free Trail
                      </span>
                    </div>
                    <h2 class="section-title__title">
                      Be part of the future of AIMug Let’s <br /> Create
                      Something
                    </h2>
                  </div>
                  <p class="free-trail__text">
                    Choose a topic & create something better than before, get
                    started from today. <br />
                    No Credit Card Required
                  </p>
                  <div class="free-trail__btn-box">
                    <a href="contact.html" class="thm-btn-two free-trail__btn">
                      Get Started Free <i class="icon-up-right-arrow"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer class="main-footer">
            <div class="main-footer__shape-1 img-bounce"></div>
            <div class="main-footer__top">
              <div class="container">
                <div class="row">
                  <div
                    class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div class="footer-widget__column footer-widget__about">
                      <div class="footer-widget__logo">
                        <a href="index.html">
                          <img src="images/resource/footer-logo-1.png" alt="" />
                        </a>
                      </div>
                      <p class="footer-widget__about-text">
                        A Magical Tool to Optimize you content for the first
                        know who you're targeting. Identify your target
                        audience.
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div class="footer-widget__column footer-widget__company">
                      <div class="footer-widget__title-box">
                        <h3 class="footer-widget__title">Company</h3>
                      </div>
                      <div class="footer-widget__company-list-box">
                        <ul class="footer-widget__company-list">
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
                    class="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div class="footer-widget__column footer-widget__resources">
                      <div class="footer-widget__title-box">
                        <h3 class="footer-widget__title">Resources</h3>
                      </div>
                      <div class="footer-widget__resources-list-box">
                        <ul class="footer-widget__resources-list">
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
                    class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div class="footer-widget__column footer-widget__newsletter">
                      <div class="footer-widget__title-box">
                        <h3 class="footer-widget__title">Resources</h3>
                      </div>
                      <div class="footer-widget__email-form">
                        <form class="footer-widget__email-box">
                          <div class="footer-widget__email-input-box">
                            <input
                              type="email"
                              placeholder="Inter Your Email"
                              name="email"
                            />
                          </div>
                          <button type="submit" class="footer-widget__btn">
                            <i class="fas fa-paper-plane"></i>
                          </button>
                        </form>
                      </div>
                      <div class="site-footer__social">
                        <a href="#">
                          <i class="icon-social-1"></i>
                        </a>
                        <a href="#">
                          <i class="icon-social-2"></i>
                        </a>
                        <a href="#">
                          <i class="icon-social-3"></i>
                        </a>
                        <a href="#">
                          <i class="icon-social-4"></i>
                        </a>
                        <a href="#">
                          <i class="icon-social-5"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-footer__bottom">
              <div class="container">
                <div class="main-footer__bottom-inner">
                  <p class="main-footer__bottom-text">
                    Copyright © 2023. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>

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

        <div class="scroll-to-top scroll-to-target" data-target="html">
          <span class="fas fa-arrow-up fa-fw"></span>
        </div>
      </div>
    </>
  );
}

export default Contact;
