import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Footer() {
  const [service, setService] = useState([]);

  const baseurl = "http://127.0.0.1:8000/";

  const axioinstance = axios.create({
    baseURL: baseurl,
  });

  useEffect(() => {
    axioinstance
      .get("services/")
      .then((response) => {
        console.log(response, "56666666666666666666");
        setService(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job applications:", error);
      });
  }, []);

  return (
    <div>
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
                    A Magical Tool to Optimize you content for the first know
                    who you're targeting. Identify your target audience.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__company">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Quick links</h3>
                  </div>
                  <div className="footer-widget__company-list-box">
                    <ul className="footer-widget__company-list">
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
                        <Link to="/Adminlogin">Admindashboard</Link>
                      </li>
                      <li>
                        <Link to="/faq">Faq</Link>
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
                    <h3 className="footer-widget__title">service</h3>
                  </div>
                  {service.map((item) => (
                    <div className="footer-widget__resources-list-box">
                      <ul className="footer-widget__resources-list">
                        <li>
                        <Link to="/userservice"><a href="about.html">{item.title}</a></Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__newsletter">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title"></h3>
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
    </div>
  );
}

export default Footer;
