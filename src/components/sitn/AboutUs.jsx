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
    <section id="integrations" className="py-4 md:py-6 bg-gray-50 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
      >
        <h2 className="section-title text-center text-gray-800">Integrations</h2>
        <div className="section-title-underline mx-auto mb-6"></div>

{/* 🟢 Paragraph + Logos Side-by-Side */}
<div className="flex flex-col md:flex-row items-center justify-between text-gray-700 gap-8">
  
  {/* 🟩 Left Side - Paragraph */}
  <div className="md:w-1/2">
    <p className="text-lg leading-relaxed">
      The AI agents integrate with leading productivity and collaboration apps so
      your team spends less time on time-consuming tasks.
    </p>
  </div>

  {/* 🟦 Right Side - Logos */}
  <div className="md:w-1/2 flex items-center justify-center gap-8 mt-6 md:mt-0">
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      src={zoho}
      alt="Zoho"
      className="h-16 md:h-20 w-auto"
    />
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      src={SN}
      alt="ServiceNow"
      className="h-16 md:h-20 w-auto"
    />
  </div>
</div>

<div className="mt-8 text-gray-800">
  <p className="text-lg font-semibold text-center md:text-left">
    Choose Start IT Now and unlock new opportunities for growth, resilience, and technological advancement.
  </p>
</div>

      </motion.div>
    </section>
  );
};

export default AboutUs;
