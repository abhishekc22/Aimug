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
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AccountCircle from "@mui/icons-material/AccountCircle";

function Signup() {
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

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validate,
      onSubmit: async (values) => {
        console.log(values, "56666666666666666");
        try {
          const res = await axioinstance.post("signup/", values);
          console.log(values, ">>>>>>>>>>>>>>>");
          if (res.status === 201) {
            const userid = res?.data?.userid;
            navigate("/otp", { state: { userid: userid } });
            console.log("sucesss???????????????????");
          }
        } catch (error) {
          console.log("error");
        }
      },
    });

  return (
    <div>
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
            </header>

            <section class="login-page full-height">
              <div
                className="login-page__shape-1"
                style={{
                  backgroundImage: "url(images/shapes/login-page-shape-1.png)",
                }}
              ></div>
              <div class="login-page__shape-2"></div>
              <div class="container">
                <div class="login-page__inner">
                  <div class="login-page__close-icon">
                    <a href="#">
                      <span class="icon-close"></span>
                    </a>
                  </div>
                  <div class="login-page__top">
                    <div class="login-page__logo">
                    <Link to="/">
                      <img
                        src="/images/resource/MicrosoftTeams-image.png"
                        alt=""
                        style={{ width: "110px", height: "90px" }}
                      />
                      </Link>
                    </div>
                  </div>
                  <form
                    action="#"
                    onSubmit={handleSubmit}
                    class="register-one__form"
                  >
                    <div class="row">
                      <div className="col-md-12">
                        <div className="register-one__form__email">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className="form-control"
                          />
                          <i className="icon-envelope"></i>
                          {errors.email && touched.email && (
                            <div className="text-red-500">{errors.email}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="register-one__form__email relative">
                          <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            autoComplete="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            className="form-control pl-10"
                          />
                          <i className="fa fa-user absolute left-2  transform -translate-y-1/2"></i>
                          {errors.username && touched.username && (
                            <div className="text-red-500 mt-1">
                              {errors.username}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="register-one__form__password">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className="form-control"
                          />
                          <i className="icon-lock"></i>
                          {errors.password && touched.password && (
                            <div className="text-red-500">
                              {errors.password}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="register-one__form__password">
                          <i className="icon-lock"></i>
                          <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            className="form-control"
                          />
                          {errors.confirmPassword &&
                            touched.confirmPassword && (
                              <div className="text-red-500">
                                {errors.confirmPassword}
                              </div>
                            )}
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="register-one__form__forgot">
                          <a href="#">Forgot Password?</a>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <button type="submit" class="thm-btn register-one__btn">
                          Sign In with FlowAI
                        </button>
                      </div>
                    </div>
                  </form>
                  <p class="register-one__tagline">
                    <Link to="/login"> i have alredy Account</Link>
                  </p>
                </div>
              </div>
            </section>

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
                  You will find much more options for colors and styling in
                  admin panel. This color picker is used only for demonstation
                  purposes.
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
        </div>
      </>
    </div>
  );
}

export default Signup;
