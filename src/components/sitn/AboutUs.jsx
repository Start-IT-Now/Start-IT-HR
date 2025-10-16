import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import zoho from '../ZOHO QNTRL.png';
import SN from '../SN Logo.png';

const AboutUs = ({ onFeatureClick }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(prev => !prev);
  };

  return (
    <section id="about" className="py-4 md:py-6 bg-white scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
      >
        <h2 className="section-title text-center text-black !text-black">Integrations</h2>
        <div className="section-title-underline mx-auto mb-6"></div>

        <div className="text-gray-700 ">
          <div>

            <p>
             
The AI agents integrates with leading productivity and collaboration apps so your team spends less time on time-consuming tasks.
            </p>
          </div>

          <p className="text-lg font-semibold">
            Choose Start IT Now and unlock new opportunities for growth, resilience, and technological advancement.
          </p>
     <div className="mt-4">
  <span className="text-xl font-semibold flex items-center gap-8 mt-12">
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      src={zoho}
      alt="Zoho"
      className="h-16 md:h-20 w-auto inline-block"
    />
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      src={SN}
      alt="ServiceNow"
      className="h-16 md:h-20 w-auto inline-block"
    />
  </span>
</div>
        </div>

      </motion.div>
    </section>
  );
};

export default AboutUs;
