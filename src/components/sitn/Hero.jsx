import React from 'react';
import { motion } from 'framer-motion';
import bg from '../bg.png';
import logo from '../logo.png';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 text-center overflow-hidden">

      {/* Background Image */}
      <img
        src={bg}
        alt="Start IT Now"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
              <img src={logo}
              alt="Start IT Now" 
              className="px-60"          
  />
  

      {/* Foreground Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-white"
        >
          Adopting new technologies can feel overwhelming, especially when you're
          focused on driving measurable business results. At Start IT Now, we make
          your digital adoption journey smooth and strategic—offering tailored
          solutions equipped with Workflow Automation, advanced AI Agents, flexible
          integrations, and expert guidance at every step.
        </motion.p>
      </div>
      </div>
    </section>
  );
};

export default Hero;
