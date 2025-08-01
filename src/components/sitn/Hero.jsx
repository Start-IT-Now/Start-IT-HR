import React from 'react';
import { motion } from 'framer-motion';
import bg from '../bg.png';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 text-center overflow-hidden">

      {/* Background Image */}
      <img
        src={bg}
        alt="Start IT Now"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Foreground Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl text-white text-lg md:text-2xl"
        >
          Adopting new technologies can feel overwhelming, especially when you're
          focused on driving measurable business results. At Start IT Now, we make
          your digital adoption journey smooth and strategic offering tailored
          solutions equipped with Workflow Automation, advanced AI Agents, flexible
          integrations, and expert guidance at every step.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
