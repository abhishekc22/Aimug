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
import axios from "axios";

function Contact() {
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

  const baseurl = "http://127.0.0.1:8000/";

  const axioinstance = axios.create({
    baseURL: baseurl,
  });

  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
    console.log(formdata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axioinstance.post("creating_enquiry/", formdata);

      if (res.status === 201) {
        console.log("success");
        console.log(res.data, "565566666666666666666666666666666");
      }
    } catch (error) {
      console.log("error");
    }
  };

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
                <div className="main-header-one__logo-box">
                  <Link to="/">
                      <img
                        src="/images/resource/ITL-WHITE-LOGO.png"
                        alt=""
                        style={{ width: "110px", height: "100px" }}
                      />
                      </Link>
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
                          <li class="">
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li class="">
                            <Link to="/userservice">services</Link>
                          </li>
                          <li class="">
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

                  <div class="outer-box d-flex align-items-center">
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
                        id="contact-form"
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group relative">
                          <p className="contact-one__form-label">Name*</p>
                          <input
                            type="text"
                            name="username"
                            placeholder="John Smith"
                            required
                            value={formdata.username}
                            onChange={handlechange}
                            className="form-control pl-10"
                          />
                          <div className="contact-one__form-icon absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <i className="fas fa-user"></i>
                          </div>
                        </div>

                        <div className="form-group relative">
                          <p className="contact-one__form-label">Email*</p>
                          <input
                            type="email"
                            name="email"
                            placeholder="marveltheme@gmail.com"
                            required
                            value={formdata.email}
                            onChange={handlechange}
                            className="form-control pl-10"
                          />
                          <div className="contact-one__form-icon absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <i className="far fa-envelope"></i>
                          </div>
                        </div>

                        <div className="form-group relative">
                          <p className="contact-one__form-label">
                            Phone Number*
                          </p>
                          <input
                            type="tel" // Use type="tel" for phone numbers
                            name="phonenumber"
                            placeholder="123-456-7890"
                            required
                            value={formdata.phonenumber}
                            onChange={handlechange}
                            className="form-control" // Remove unnecessary pl-10 class
                          />
                          <div className="contact-one__form-icon absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          </div>
                        </div>

                        <div className="form-group text-message-box">
                          <p className="contact-one__form-label">
                            How can we help?
                          </p>
                          <textarea
                            name="message"
                            placeholder="Enter your message here"
                            value={formdata.message}
                            onChange={handlechange}
                            className="form-control"
                          ></textarea>
                        </div>

                        <div className="form-group">
                          <div className="button-box">
                            <button
                              type="submit"
                              className="thm-btn contact-one__btn"
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

          <section class="google-map">
            <div class="google-map__outer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.956545582045!2d77.61890831678788!3d12.950298751849447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d2f395b3%3A0xc2ff13f37b2f2d2!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1625822341247!5m2!1sen!2sus"
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

          <Footer />

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
