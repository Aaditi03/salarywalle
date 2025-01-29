import React from "react";
import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";
import "./Footer.css";
import logo from "../assets/image/Artboard 1.svg"; // First Logo
import logoLarge from "../assets/image/Artboard 1.svg"; // Second Logo (larger size for movement)

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {/* Moving Logo Section */}
            <div className="moving-logo-wrapper">
                <img
                    src={logoLarge}
                    alt="Moving Logo"
                    className="moving-logo"
                />
            </div>

            {/* Footer Section */}
            <footer>
                <div className="footer-wrapper">
                    <div className="footer-grid">
                        {/* Section 1 */}
                        {/* <div className="footer-section">
                            <img
                                src={logo}
                                alt="Salary Walle Logo"
                                className="footer-logo"
                            />
                            <p className="footer-text">
                                Making loans accessible and easy for everyone.
                                Your trusted financial partner.
                            </p>
                        </div> */}

                        {/* Section 2 */}
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link to="/" onClick={scrollToTop}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us" onClick={scrollToTop}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact-us"
                                        onClick={scrollToTop}
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/apply-now" onClick={scrollToTop}>
                                        Apply Now
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Privacy Policy and Terms Section */}
                        <div className="footer-section legal-info">
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <Link to="/faq" onClick={scrollToTop}>
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/repay-now" onClick={scrollToTop}>
                                        Repay Loan
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/privacy-policy"
                                        onClick={scrollToTop}
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/terms-condition"
                                        onClick={scrollToTop}
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="footer-section contact-info">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>
                                    <Phone className="icon" />
                                    <span>0172-4523978</span>
                                </li>
                                <li>
                                    <Mail className="icon" />
                                    <span>info@Salary Walle.com</span>
                                </li>
                                <li>
                                    <MapPin className="icon" />
                                    <span>
                                        D-190, Sector 74, Phase 8, Industrial
                                        Area, Mohali - 160071
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p>© 2024 Salary Walle. All rights reserved.</p>
                        <div className="social-icons">
                            <a href="#">
                                <Facebook className="icon" />
                            </a>
                            <a href="#">
                                <Twitter className="icon" />
                            </a>
                            <a href="#">
                                <Instagram className="icon" />
                            </a>
                            <a href="#">
                                <Linkedin className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
