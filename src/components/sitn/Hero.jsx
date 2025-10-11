import React from "react";
import { motion } from "framer-motion";
import bg from "../bg.png";
import zoho from "../ZOHO QNTRL.png";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 text-left overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Foreground Content */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-white text-lg md:text-2xl leading-relaxed">
            Adopting new technologies can feel overwhelming, especially when
            you're focused on driving measurable business results. <br />
            At <b>Start IT Now</b>, we make your digital adoption journey smooth
            and strategic - offering tailored solutions equipped with Workflow
            Automation, advanced AI Agents, flexible integrations, and expert
            guidance at every step.
            <br />
            <br />
            <span className="text-xl font-semibold">Powered by:</span>
          </p>

          {/* Partner logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-10 mt-8"
          >
            <img src={zoho} alt="Zoho" className="h-16 md:h-20 w-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
