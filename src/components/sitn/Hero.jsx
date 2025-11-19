import React from "react";
import { motion } from "framer-motion";
import bg from "../bg.png";
import zoho from "../ZOHO QNTRL.png";
import SN from "../SN Logo.png";

const Hero = () => {
  return (
    <section className="relative py-4 sm:py-6 md:py-8 lg:py-10 overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col justify-center items-center min-h-[60vh] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl md:max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Transform HR Workflows with AI Agents
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8">
            Simplify collaboration, speed up hiring, and empower your team with real-time insights.
          </p>

          {/* Partner + Contact Row */}
         <div className="flex flex-row flex-nowrap gap-4 sm:gap-8 text-white text-sm sm:text-base mt-4">
  <span className="text-lg sm:text-xl font-semibold whitespace-nowrap">
    Proven Compatible with workflows:
  </span>

  <motion.img
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.6 }}
    src={zoho}
    alt="Zoho"
    className="h-10 sm:h-12 md:h-12 w-auto shrink-0"
  />

  <motion.img
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.6 }}
    src={SN}
    alt="ServiceNow"
    className="h-10 md:h-12 w-auto shrink-0"
  />

  <a
    href="mailto:connect@startitnow.co.in"
    className="text-white underline hover:text-gray-200 whitespace-nowrap shrink-0"
  >
    📧 connect@startitnow.co.in
  </a>

  <a
    href="tel:+918431403016"
    className="text-white underline hover:text-gray-200 whitespace-nowrap shrink-0"
  >
    Ph: +91 8431403016
  </a>
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
