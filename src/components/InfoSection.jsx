import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaRocket, FaHandshake, FaLifeRing } from 'react-icons/fa';

const InfoSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 py-16 px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Our Key Features
        </h2>
        <p className="text-lg text-gray-600">
          Why we're the best choice for your financial needs.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: 'Secure & Trusted',
            description:
              'We implement advanced security measures to protect your data.',
            icon: <FaShieldAlt className="text-indigo-600 text-5xl mb-4" />,
          },
          {
            title: 'Fast Processing',
            description:
              'Enjoy quick approval and instant credit when you need it most.',
            icon: <FaRocket className="text-indigo-600 text-5xl mb-4" />,
          },
          {
            title: 'Customer Support',
            description:
              'Our friendly team is here to assist you round the clock.',
            icon: <FaLifeRing className="text-indigo-600 text-5xl mb-4" />,
          },
          {
            title: 'Tailored Solutions',
            description:
              'We provide customized financial products to meet your needs.',
            icon: <FaHandshake className="text-indigo-600 text-5xl mb-4" />,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transform transition-all"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-12"
      >
        <button className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105">
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default InfoSection;
