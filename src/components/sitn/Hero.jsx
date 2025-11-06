import React from "react";
import { motion } from "framer-motion";
import bg from "../bg.png";
import zoho from "../ZOHO QNTRL.png";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-14 text-left overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 flex justify-center items-center min-h-[50vh]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl md:max-w-5xl text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transform HR Workflows with AI Agents
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Simplify collaboration, speed up hiring, and empower your team with real-time insights.
          </p>

          {/* Partner logos */}
          <span className="text-xl font-semibold flex items-center gap-10 mt-8">
            Workflows Powered by:
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              src={zoho}
              alt="Zoho"
              className="h-8 md:h-14 w-auto inline-block "
            />
            <div className="text-xl font-semibold flex items-center gap-20 mt-6"> 
            <a href="mailto:Connect@startitnow.co.in" className="text-white underline"> Mail Id: connect@startitnow.co.in</a>
            <a href="tel:+918431403016" className="text-white underline">Phone: +91 8431403016</a>
          </div>
          </span>
           </motion.div>
      </div>
    </section>
  );
};

export default Hero;
