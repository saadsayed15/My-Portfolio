import React from "react";
import "./Footer.css";
import logo from "../../assets/saad-logo-3.svg";
import user from "../../assets/user.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" className="logo" />
          <p>
            I am a frontend developer from, Egypt with 1 year of experience in
            companies and Freelancing sites.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user} alt="" />
            <input type="email" placeholder="Enter Your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p> © 2025 Saad Sayed. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
