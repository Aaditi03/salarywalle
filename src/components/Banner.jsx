import React from "react";
import "./Banner.css";
import calculatorBanner from "../assets/image/loangiff.gif"; // Import the GIF

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-content">
        {/* GIF Section */}
        <div className="left-side">
          <img
            src={calculatorBanner}
            alt="Calculator Banner"
            className="banner-gif"
          />
        </div>

        {/* Text Section */}
        <div className="right-side">
          <div className="content-wrapper">
            <h1 className="banner-title">
              <b>We are your Digital Lending Buddy</b>
            </h1>
            <p className="banner-description">
              <b>
                Fast, hassle-free loans for people who don’t fit the typical lending criteria.
              </b>
            </p>

            {/* Point-Wise Content */}
            <div className="points-section">
              <div className="point point-left">
                <span className="point-content">
                  Affordable Loans with <b>low interest rates</b>
                </span>
              </div>
              <div className="point point-right">
                <span className="point-content">
                  <b>Quick Approvals</b> for your financial needs
                </span>
              </div>
              <div className="point point-left">
                <span className="point-content">
                  Secure and <b>reliable platform</b> to trust
                </span>
              </div>
              <div className="point point-right">
                <span className="point-content">
                  <b>Thousands of happy customers</b> recommend us
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
