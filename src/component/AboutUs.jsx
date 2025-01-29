import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';
import Animation from '../assets/image/animated.mp4';
import aboutVideo from '../assets/image/about.mp4';
import AnimatedText from './AboutAnimated';


function AboutUs() {
  return (
    <div className="about-us">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={Animation} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">About Us</h1>
            <p className="hero-description">
              Naman Finlease Private Limited is a trusted Non-Banking Finance Company (NBFC), proudly registered with the Reserve Bank of India (RBI). Under the brand name Only1Loan, we specialize in providing instant, hassle-free financial solutions tailored to meet your urgent needs. Whether it’s unexpected expenses or consolidating multiple unsecured debts into one manageable payment, we’re here to offer swift, reliable support.<br/>
              At Only1Loan, our mission is clear to be your dependable partner during financial emergencies. We provide easy access to loans with transparency and integrity, ensuring that you can overcome challenges with confidence and peace of mind. Beyond lending, we are committed to empowering you with financial education and personalized guidance to help you manage your finances better and escape the burden of high-interest debts.<br/>
            </p>
          </motion.div>
          <div className="hero-media">
            <video 
              src={aboutVideo} 
              autoPlay 
              loop 
              muted 
              className="hero-video"
            ></video>
            <p className="media-caption">Discover the journey that brought us here.</p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <motion.h2
            className="vision-title"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Welcome to Only1Loan Your Digital Lending Buddy
          </motion.h2>
          <motion.p
            className="vision-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            At Only1Loan, we understand the financial struggles many individuals face. Our mission is to make accessing loans easier and more convenient for everyone, especially those who may not qualify for traditional financing. We provide quick, hassle-free loans with transparent terms, so you can focus on your goals and dreams without the stress of complicated paperwork or long waiting periods. Whether you need a loan for education, medical expenses, or personal needs, we are here to help you every step of the way. We’re more than just a lending service—we’re here to support your journey toward financial stability and freedom. Our goal is to bridge the gap in traditional banking by providing a seamless, technology-driven solution to meet your financial needs. With Only1Loan, you can expect quick approvals, hassle-free processes, and complete transparency.         
          </motion.p>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <motion.h2
            className="vision-title"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="vision-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            <b>Transforming Financial Futures Through Empowerment</b><br/>
            At Only1Loan, our vision is to transform the way individuals manage urgent financial needs. We aim to be a trusted, innovative provider of fast and transparent solutions, helping you navigate challenges with ease. Leveraging cutting-edge technology, we ensure seamless access to credit while empowering you with financial tools and education. Our goal is to provide not only immediate relief but also long-term resilience, supporting your journey to financial stability and success.
          </motion.p>
        </section>

        {/* Mission Section */}
        <section className="vision-section">
          <motion.h2
            className="vision-title"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="vision-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            <b>Empowering Financial Resilience Through Innovative Solutions</b><br/>
            At Only1Loan, we offer fast, reliable emergency loans to help you navigate unexpected financial challenges. Leveraging cutting-edge technology, we provide swift, tailored credit solutions and empower individuals with essential financial education for better management and debt recovery. Our mission is to support underserved communities with customized offerings that deliver speed and compassion. We envision a world of limitless financial empowerment, combining technology with care to foster lasting financial freedom.
          </motion.p>
        </section>

        {/* Values Section */}
        {/* What Sets Us Apart Section */}
        <section className="what-sets-us-apart">
  <motion.h2
    className="sets-us-apart-title"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    What Sets Us Apart
  </motion.h2>
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

      </div>
    </div>
  );
}

export default AboutUs;
