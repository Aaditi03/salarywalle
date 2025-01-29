import React from "react";
import "./GifContent.css";
import bannerGif from "../assets/image/calculatorbanner.gif"; // Your GIF file

const GifContent = () => {
    return (
        <div className="main-content-container">
            {/* GIF Section */}
            <div className="gif-part section">
                <img
                    src={bannerGif}
                    alt="Banner Animation"
                    className="banner-gif"
                />
            </div>

            {/* Content Section */}
            <div className="content-part section">
                <h2 className="animated-header">
                    3 Steps to End Money Worries!
                </h2>
                <p className="animated-text">
                    Want to kiss your money problems goodbye? Salary Walle has
                    your back with just 3 quick steps to unlock financial
                    freedom!
                </p>

                <div className="feature animated-step">
                    {/* <span className="feature-svg">🔎</span> */}
                    <h3>1. Quick Info, Big Wins</h3>
                    <p>
                        Kickstart your journey by filling in a few basic
                        details. One step closer to waving goodbye to debt and
                        stress, easy as pie!
                    </p>
                </div>

                <div className="feature animated-step">
                    {/* <span className="feature-svg">📤</span> */}
                    <h3>2. Upload & Relax</h3>
                    <p>
                        Just click and submit your KYC docs (PAN, Aadhaar,
                        etc.), salary slips, and bank statements. All from your
                        couch, no sweat!
                    </p>
                </div>

                <div className="feature animated-step">
                    {/* <span className="feature-svg">💸</span> */}
                    <h3>3. Fast Credit Deposit</h3>
                    <p>
                        Once approved, funds will swiftly flow into your account
                        securely and hassle-free, providing you with immediate
                        access.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GifContent;
