import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// import bannerImage from "../assets/image/banner1.png";
import "./MainContent.css"; // Import your CSS here
import videoSrc from "../assets/image/calculatorbanner.gif";
import { Link } from "react-router-dom";
import {
    FaRegHandshake,
    FaCogs,
    FaClock,
    FaCheckCircle,
    FaUsers,
} from "react-icons/fa";
import { FaShieldAlt, FaRocket, FaHandshake, FaLifeRing } from "react-icons/fa";
import AnimatedText from "../components/AnimatedText"; // Adjust the path accordingly
import LoanFeatures from "../component/LoanFeatures";
import Testimonial from "../component/Testimonial";
import GifContent from "./GifContent";
import Animation from "../assets/image/animated.mp4";
import Banner from "../assets/image/banner1.png";
import Bodyimage from "../assets/image/body.png"

const MainContent = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0); // This will scroll the page to the top
    };
    return (
<div className="about-us">
    {/* Background Video */}
    <video autoPlay loop muted className="background-video">
        <source src={Animation} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    {/* Content Section */}
    <div className="content">

    </div>
{/* </div> */}

            <div className="space-y-20">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative h-screen"
                >
                    <div className="banner-container flex items-center justify-center min-h-screen px-8 py-12 bg-transparent">
                        {/* Centered Content */}
                        <div className="content-left text-black text-center">
                            <motion.h1
                                className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{
                                    duration: 1,
                                    type: "spring",
                                    stiffness: 70,
                                }}
                            >
                                Your Trusted Partner for Salaried Dreams
                            </motion.h1>
                            <motion.p
                                className="text-xl mb-8 opacity-80"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                Making financial independence simple, fast, and
                                stress-free.
                            </motion.p>                            
                            <div className="flex gap-8 justify-center">
{/* Apply Now Button */}
<motion.button
    className="btn-apply"
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{
        type: "spring",
        stiffness: 100,
    }}
    onClick={() => (window.location.href = "/apply-now")}
>
    Apply Now
</motion.button>

{/* Learn More Button */}
<motion.button
    className="btn-learn"
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{
        type: "spring",
        stiffness: 100,
    }}
    onClick={() => (window.location.href = "/about-us")}
>
    Learn More
</motion.button>

                            </div>
                        </div>
                    </div>
                </motion.section>

<section className="what-sets-us-aparts">
    
  <div className="content-wrappers">
    <div className="content-text">
      <p className="content-description">
        <b>Quick, Easy, and Hassle-Free Loans</b>
        <br />
        Our mission is to offer fast, reliable, and simple payday loans. No more waiting weeks to get approved by traditional banks. Apply today and get your loan in 30 minutes!
      </p>
      <p className="content-description">
        We value our customers and their time. That's why we prioritize minimal paperwork and quick disbursement. Thousands have trusted us to meet their urgent financial needs.
      </p>
    </div>
    <div className="action-button">
  <motion.button
    className="btn-applys"
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 100 }}
    onClick={() => (window.location.href = "/apply-now")}
  >
    Apply Now
  </motion.button>

  <motion.button
    className="btn-learns"
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 100 }}
    onClick={() => (window.location.href = "/about-us")}
  >
    Learn More
  </motion.button>
</div>

  </div>

  <div className="hero-image-wrapper">
    <img
      src={Bodyimage} // Replace with your image path
      alt="Content Image"
      className="hero-image"
    />
  </div>
</section>

                <motion.section
                    className="w-full flex flex-col items-center py-12 px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
</motion.section>
<br/><br/>
                <section className="what-sets-us-apart">
                    <motion.h1
                        className="sets-us-apart-title"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        What Sets Us Apart
                    </motion.h1>
                </section>

                <section className="values-section">
                    {[
                        {
                            title: "Speed and Efficiency",
                            text: "Quick loans, hassle-free! Apply, get approved, and receive funds swiftly—no delays, just solutions.",
                        },
                        {
                            title: "Flexibility",
                            text: "Tailored loans to fit your needs—choose your amount and terms with ease.",
                        },
                        {
                            title: "Empathy",
                            text: "We listen, understand, and provide personalized solutions with respect.",
                        },
                        {
                            title: "Transparency",
                            text: "No hidden fees—clear terms, fair practices, and full clarity.",
                        },
                        {
                            title: "Quick Access to Funds",
                            text: "Get the financial help you need, fast and hassle-free, with our simple and efficient loan process.",
                        },
                        {
                            title: "Our Commitment",
                            text: "Your well-being comes first. We lend responsibly to support your financial stability.",
                        },
                    ].map((value, index) => (
                        <motion.article
                            key={index}
                            className="value"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3>{value.title}</h3>
                            <p>{value.text}</p>
                        </motion.article>
                    ))}
                </section>

                <br />
                {/* Path to Financial Success Section */}
                {/* <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="financial-success-section"
            >
                <div className="text-center mb-12">
                    <h2 className="title">
                       A Smarter And Secure Way
                        <br />
Of Getting Loans                    </h2>
                    <p className="description">
                        Expert advice and tailored solutions just for you.
                    </p>
                    <p className="description">
                        Empowering you with the tools to succeed financially.
                    </p>
                </div>

                <div className="buttons-section">
                    <Link
                        to="/contact-us"
                        onClick={scrollToTop}
                        style={{ textDecoration: "none" }}
                    >
                        <button className="contact-button">Contact Us</button>
                    </Link>
                </div>
                {/* </motion.section> */}
                {/* 
                <div className="cards-section">
                    <div className="card card-1">
                        <div className="icon-container">
                            <FaRegHandshake size={40} />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Attractive Interest Rates
                            </h3>
                            <p className="card-text">
Avail loan amounts at competitive and affordable interest rates tailored to your needs.
                            </p>
                        </div>
                    </div>

                    <div className="card card-2">
                        <div className="icon-container">
                            <FaCogs size={40} />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">No Hidden Charges
                            </h3>
                            <p className="card-text">
Experience full transparency with no surprise fees or hidden charges throughout your loan process.

                            </p>
                        </div>
                    </div>

                    <div className="card card-3">
                        <div className="icon-container">
                            <FaClock size={40} />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Quick Approvals
                            </h3>
                            <p className="card-text">
                            Enjoy fast approval processes, ensuring you get the funds you need without unnecessary delays.
                            </p>
                        </div>
                    </div>

                    <div className="card card-4">
                        <div className="icon-container">
                            <FaCheckCircle size={40} />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">No Pre-payment Penalties</h3>
                            <p className="card-text">                           
                            Pay off your loan early without worrying about any pre-payment penalties.
                            </p>
                        </div>
                    </div>

                    <div className="card card-5">
                        <div className="icon-container">
                            <FaUsers size={40} />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Personalized Expert Advice</h3>
                            <p className="card-text">
                            
                            Receive personalized loan advice and solutions from experts dedicated to your financial success.
                            </p>
                        </div>
                    </div>
                </div> */}
                {/* </motion.section>  */}
                {/* Video Content Section */}
                {/* <div className="video-content-section">
                <div className="video-container">
          <img
            src={videoSrc}
            alt="Calculator Banner"
            className="banner-gif"
          />
                </div><br/>

                <div className="content-container">
                    <div className="header-section">
                        <motion.h2
                            initial={{ x: "-100vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                delay: 0.3,
                            }}
                            style={{ color: "#2D3E50" }}
                        >
                            Your Personal Credit App
                        </motion.h2>
                        <motion.p
                            initial={{ x: "-100vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                delay: 0.3,
                            }}
                            style={{ color: "white" }}
                        >
                            Instant, flexible personal loans when you need them
                        </motion.p>
                    </div>

                    <div className="feature-section">
                        <motion.div
                            className="feature-item"
                            initial={{ x: "-100vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                delay: 0.9,
                            }}
                            style={{ color: "#27AE60" }}
                        >
                            <h3>Get approved for credit up to ₹ 5 lakhs</h3>
                        </motion.div>
                        <motion.div
                            className="feature-item"
                            initial={{ x: "100vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                delay: 1.2,
                            }}
                            style={{ color: "#F39C12" }}
                        >
                            <h3>
                                Transfer money instantly to your bank account
                            </h3>
                        </motion.div>
                        <motion.div
                            className="feature-item"
                            initial={{ x: "-100vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                delay: 1.5,
                            }}
                            style={{ color: "#2980B9" }}
                        >
                            <h3>
                                Repay in flexible EMIs of your choice (3-36
                                months)
                            </h3>
                        </motion.div>
                    </div>
                </div>
            </div> */}
                {/* <div> */}
                {/* <h2>Loan Calculator</h2> */}
                {/* <GifContent /> */}
                {/* </div> */}
                {/* <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center relative">
                {/* Custom Cursor */}
                <style>
                    {`
          body {
            cursor: url('https://example.com/custom-cursor.png'), auto;
          }
          .hover-visible:hover {
            filter: blur(0);
            transform: scale(1.05);
          }
        `}
                </style>

                <div className="animated-text-section">
                    <AnimatedText text="We are your digital lending buddy, here to help you get the cash you need to fulfil all your dreams." />
                </div>
                {/* </div>  */}
                <div>
                    {/* <h2>Loan Calculator</h2> */}
                    <LoanFeatures />
                </div>
                <div>
                    {/* <h2>Loan Calculator</h2> */}
                    <Testimonial />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
