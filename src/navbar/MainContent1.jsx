// import React from 'react';

// import LoanCalculate from './LoanCalculate';
// import SortFAQ from './SortFAQ';
// import FrontPage from '../component/FrontPage';
// import WhoWeAre from '../component/WhoWeAre';
// import WhyChooseUs from '../component/WhyChooseUs';
// import Eligibility from '../component/Eligibility';
// import Nowaiting from '../component/Nowaiting';
// import WhatPeopleSay from '../component/WhatPeopleSay';
// function MainContent1() {
 
//   return (
//     <div>
//       <FrontPage/>
//       <WhoWeAre/>
//       <WhyChooseUs/>
//       <Eligibility/>
//       <Nowaiting/>
//       <WhatPeopleSay/>
//       <SortFAQ/>
      
    
//     </div>
//   );
// }

// export default MainContent1;
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bannerImage from "../assets/image/banner1.png"; 
import videoSrc from '../assets/image/process.mp4';

const MainContent11 = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white"
      >
        <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Unlock Financial Freedom
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              Tailored loans to meet your every need. Whether it's personal growth or business expansion, we’re here to help.
            </p>
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-lg text-gray-600">
                <p>✔ Fast Processing.</p>
              </div>
              <div className="text-lg text-gray-600">
                <p>✔ Affordable interest.</p>
              </div>
              <div className="text-lg text-gray-600">
                <p>✔ Personalized loan.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/personal-loan"
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all flex items-center justify-center shadow-md"
              >
                Personal Loan <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/business-loan"
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all flex items-center justify-center shadow-md"
              >
                Business Loan <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="image-container">
            <img
              src={bannerImage}
              alt="Banner"
              className="banner-image"
            />
          </div>
        </div>
      </motion.section>

      {/* Path to Financial Success Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">
            Your Path to Financial Success
            <br />
            Achieve your dreams.
          </h2>
          <p className="text-lg font-light text-gray-600 mb-2">
            Get expert guidance and the support you need.
          </p>
          <p className="text-lg font-light text-gray-600">
            Empowering you with the tools to succeed financially.
          </p>

          {/* Buttons Section */}
          <div className="flex justify-center mt-6">
            <button className="bg-gray-300 text-gray-800 py-3 px-6 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-400 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>

      {/* Cards Section */}
      <motion.section className="flex justify-between items-end gap-4 w-full">
        {[1, 2, 3, 4, 5].map((card, index) => (
          <div key={index} className={`w-1/5 p-12 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} shadow-lg rounded-lg`}>
            <h3 className="text-xl font-bold text-gray-800">Card {card}</h3>
            <p className="text-gray-600">Content for card {card}.</p>
          </div>
        ))}
      </motion.section>

      {/* GIF Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6">
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif"
            alt="Personal Credit GIF"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-3">
              Your Personal Credit App
            </h2>
            <p className="text-lg font-light text-gray-100">
              Instant, flexible personal loans when you need them
            </p>
          </div>
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-lg shadow-md">
              <p className={`text-lg font-semibold text-${item === 1 ? 'blue' : item === 2 ? 'green' : 'yellow'}-700`}>
                {item === 1 ? 'Get approved for credit up to ₹ 5 lakhs' :
                 item === 2 ? 'Transfer money instantly to your bank account' :
                 'Repay in flexible EMIs of your choice (3-36 months)'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-10 px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
            Features You'll Love
          </h2>
          <p className="text-lg text-gray-600">Discover why we stand out in the crowd.</p>
        </div>

        {/* Card 1 to Card 4 */}
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4].map((card, index) => (
            <div key={index} className="bg-white w-64 h-64 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 overflow-hidden">
              <div className="p-4 h-full flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {card === 1 ? "No Collateral, No Guarantors" : card === 2 ? "Quick Online Support" : card === 3 ? "Lifetime Access to Credit" : "100% Safe & Secure"}
                </h3>
                <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                  <p className="text-gray-600 text-sm">
                    {card === 1 ? "We will never ask you for any security or collateral to provide you credit." :
                     card === 2 ? "Have a question? Facing issues? We’re here to help! Contact us via email at support@yourwebsite.com." :
                     card === 3 ? "Apply once and enjoy lifetime access to credit." :
                     "We take utmost care of your data privacy."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent1;
