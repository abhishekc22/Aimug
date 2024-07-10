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

function Policy() {
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
                      src="/images/resource/MicrosoftTeams-image.png"
                      alt=""
                      style={{ width: "110px", height: "90px" }}
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
        </header>

        <section className="faq-one" style={{ marginTop: "160px" }}>
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box"></div>
              <h2 className="section-title__title">Privacy&Policy</h2>
            </div>
            <div className="faq-one__inner">
              <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>1.introduction</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        innovyx Tech Labs LLP ("we", "our", "us") is committed to
                        protecting your privacy. This Privacy Policy explains
                        how we collect, use, disclose, and safeguard your
                        information when you visit our website
                        innovyxtechlabs.com (the "Website"). Please read this
                        Privacy Policy carefully. If you do not agree with the
                        terms of this Privacy Policy, please do not access the
                        Website.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion  active">
                  <div className="accrodion-title">
                    <h4>2.Information We Collect</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        We may collect personal information that you provide to
                        us directly, such as your name, email address, phone
                        number, and any other information you choose to provide.
                        Additionally, we may collect information automatically
                        when you visit our Website, such as your IP address,
                        browser type, operating system, access times, and the
                        pages you have viewed directly before and after
                        accessing the Website.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>3.Use of Your Information</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>To operate and maintain our Website</p>
                      <p>To improve your experience on our Website</p>
                      <p>To respond to your comments, questions, and provide customer service</p>

                      <p>To send you technical notices, updates, security alerts, and support messages</p>
                      <p>To communicate with you about products, services, offers, promotions, and events</p>




                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>4. Disclosure of Your Information</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        We may share information we have collected about you in
                        certain situations. Your information may be disclosed as
                        follows: By Law or to Protect Rights: If we believe the
                        release of information about you is necessary to respond
                        to legal process, to investigate or remedy potential
                        violations of our policies, or to protect the rights,
                        property, and safety of others, we may share your
                        information as permitted or required by any applicable
                        law, rule, or regulation. Business Transfers: We may
                        share or transfer your information in connection with,
                        or during negotiations of, any merger, sale of company
                        assets, financing, or acquisition of all or a portion of
                        our business to another company. With Your Consent: We
                        may disclose your personal information for any other
                        purpose with your consent.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>5. Security of Your Information</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        We use administrative, technical, and physical security
                        measures to help protect your personal information.
                        While we have taken reasonable steps to secure the
                        personal information you provide to us, please be aware
                        that despite our efforts, no security measures are
                        perfect or impenetrable, and no method of data
                        transmission can be guaranteed against any interception
                        or other type of misuse.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>7. Changes to This Privacy Policy</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        We may update this Privacy Policy from time to time in
                        order to reflect, for example, changes to our practices
                        or for other operational, legal, or regulatory reasons.
                        We will notify you of any changes by posting the new
                        Privacy Policy on this page. You are advised to review
                        this Privacy
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
                  backgroundImage: "url(images/shapes/free-trail-shape-3.png)",
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
                    Be part of the future of AIMug Let’s <br /> Create Something
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
  );
}

export default Policy;
