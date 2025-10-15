import React from "react";
import { motion } from "framer-motion";
import bg from "../bg.png";
import zoho from "../ZOHO QNTRL.png";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 text-left overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-white text-lg md:text-xl leading-relaxed mb-4"> 
            Imagine transforming the most time-consuming, repetitive, and rigorous processes making collaboration simpler and enhancing the employee experience with rapid, thoughtful responses.
            Our solution empowers every stakeholder with timely insights and actionable triggers, ensuring more meaningful interactions and a smoother journey for candidates, recruiters, and hiring managers alike.
            Experience recruitment and employee retention that’s not just efficient, but also caring and genuinely supportive so everyone feels heard, valued, and set up for success.
          </p>

          {/* Partner logos */}
          <span className="text-xl font-semibold flex items-center gap-4 mt-12">
            Workflows Powered by:
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              src={zoho}
              alt="Zoho"
              className="h-16 md:h-20 w-auto inline-block"
            />
          </span>

          <div className="text-xl font-semibold flex items-center gap-4 mt-12">
            Contact Us: 
            <a href="mailto:Connect@startitnow.co.in" className="text-blue-400 underline">Connect@startitnow.co.in</a>
            <a href="tel:+918431403016" className="text-blue-400 underline">+91 8431403016</a>
          </div>
           </motion.div>
      </div>
    </section>
  );
};

export default Hero;
