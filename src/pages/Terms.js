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
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Terms() {
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
              <h2 className="section-title__title">Terms& condition</h2>
            </div>
            <div className="faq-one__inner">
              <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>introduction</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        Welcome to Innovyx Tech Labs LLP ("Website"). These
                        Terms and Conditions ("Terms") govern your use of our
                        Website located at innovyxtechlabs.com and any related
                        services provided by Innovyx Tech Labs LLP. By accessing
                        or using our Website, you agree to comply with and be
                        bound by these Terms. If you disagree with any part of
                        the Terms, you must not access or use our Website.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion  active">
                  <div className="accrodion-title">
                    <h4>2. Changes to Terms</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        We reserve the right to modify these Terms at any time.
                        Any changes will be posted on this page, and your
                        continued use of the Website constitutes acceptance of
                        those changes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>3. Use of the Website</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        You agree to use the Website only for lawful purposes
                        and in a way that does not infringe the rights of,
                        restrict, or inhibit anyone else's use and enjoyment of
                        the Website. Prohibited behavior includes harassing or
                        causing distress or inconvenience to any other user,
                        transmitting obscene or offensive content, or disrupting
                        the normal flow of dialogue within our Website.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>4. Intellectual Property</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        The content on our Website, including text, graphics,
                        logos, images, and software, is the property of Innovyx
                        Tech Labs LLP or its content suppliers and is protected
                        by international copyright and trademark laws.
                        Unauthorized use of any content may violate copyright,
                        trademark, and other laws.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>5. User-Generated Content</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        You retain ownership of any content you post or submit
                        to the Website ("User Content"). However, by submitting
                        User Content, you grant Innovyx Tech Labs LLP a
                        worldwide, non-exclusive, royalty-free license to use,
                        reproduce, modify, adapt, publish, translate, create
                        derivative works from, distribute, perform, and display
                        such content in any media.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>6. Privacy Policy</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        Your use of our Website is also governed by our Privacy
                        Policy, which can be viewed under the IT Act.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>7. Links to Other Websites</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        Our Website may contain links to third-party websites
                        that are not owned or controlled by Innovyx Tech Labs
                        LLP. We have no control over and assume no
                        responsibility for the content, privacy policies, or
                        practices of any third-party websites. You acknowledge
                        and agree that Innovyx Tech Labs LLP shall not be
                        responsible or liable, directly or indirectly, for any
                        damage or loss caused by or in connection with the use
                        of or reliance on any such content, goods, or services
                        available on or through any such websites.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>8. Disclaimer of Warranties</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        The Website is provided on an "as is" and "as available"
                        basis. Innovyx Tech Labs LLP makes no representations or
                        warranties of any kind, express or implied, as to the
                        operation of the Website or the information, content,
                        materials, or products included on the Website. You
                        expressly agree that your use of the Website is at your
                        sole risk.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>9. Limitation of Liability</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        To the fullest extent permitted by law, Innovyx Tech
                        Labs LLP shall not be liable for any damages of any kind
                        arising from the use of the Website, including, but not
                        limited to, direct, indirect, incidental, punitive, and
                        consequential damages.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>10. Indemnification</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        You agree to indemnify, defend, and hold harmless
                        Innovyx Tech Labs LLP, its officers, directors,
                        employees, and agents from and against any and all
                        claims, damages, obligations, losses, liabilities,
                        costs, or debt, and expenses (including but not limited
                        to attorney's fees) arising from your use of and access
                        to the Website, or from your violation of these Terms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>11. No Refund Policy</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        All sales are final. Innovyx Tech Labs LLP does not
                        offer refunds for any products or services purchased
                        through the Website. By making a purchase, you
                        acknowledge and agree to this no refund policy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>12. Governing Law</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        These Terms shall be governed and construed in
                        accordance with the laws of [Your Jurisdiction], without
                        regard to its conflict of law provisions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>13. Contact Us</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                      If you have any questions about these Terms, please contact us at:
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h2>innovyx Tech Labs LLP</h2>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                    <h4>  contact Email: info@innovyxtechlabs.com</h4>
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

export default Terms;
