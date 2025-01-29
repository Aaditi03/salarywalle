// Create a reusable component (AnimatedSection.js)
import { motion } from "framer-motion";

const AnimatedSection = ({ title, text }) => (
  <section className="common-section">
    <motion.h2
      className="common-title"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    <motion.p
      className="common-text"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.p>
  </section>
);

export default AnimatedSection;
