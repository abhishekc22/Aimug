import "../css/otp.css";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../App.css"; 
import React, { useState } from "react";
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

function Otp() {
  const baseurl = "http://127.0.0.1:8000/";

  const axioinstance = axios.create({
    baseURL: baseurl,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userid;
  console.log(userId,'first')
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const combinedOtp = otp.join('');
      const res = await axioinstance.post('verifyotp/', { userId, otp: combinedOtp });
      console.log(otp,userId,'566666666666666666666666')
      if (res.status === 200) {
        navigate('/login');
      } else {
        console.log('Verification failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <div className="otp-form">
          <div className="otp-header">
            <div className="otp-title">
              <p className="otp-title-text">Email Verification</p>
            </div>
            <div className="otp-subtitle">
              <p className="otp-subtitle-text">We have sent a code to your email</p>
            </div>
          </div>

          <div className="otp-input-container">
            <form onSubmit={handleVerify}>
              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    className="otp-input"
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                ))}
              </div>
              <br />

              <div className="otp-actions">
                <button className="otp-button" type="submit">
                  Verify Account
                </button>
              </div>

             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
