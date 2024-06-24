import React, { useState } from 'react';
import "../css/otp.css";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

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

              <div className="otp-resend">
                <p>Didn't receive code?</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Resend
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
