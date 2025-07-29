import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AboutUs = ({ onFeatureClick }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(prev => !prev);
  };

  return (
    <section id="about" className="py-4 md:py-6 bg-white scroll-mt-18">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
      >
        <h2 className="section-title text-center text-black !text-black">About Us</h2>
        <div className="section-title-underline mx-auto mb-6"></div>

        <div className="text-gray-700 ">
          <div>
            <h3 className="text-3xl font-bold text-[#0B0F29]/90">
              Empowering Business Transformation with Start IT Now
            </h3>
            <p>
              At Start IT Now, we enable organizations to excel in today's fast-paced digital environment through advanced business process automation and Agentic AI solutions. Our expertise helps clients streamline operations and elevate customer engagement, fostering meaningful transformation across industries.
            </p>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              expanded ? 'max-h-full' : 'max-h-[20px]'
            }`}
          >
            <h3 className="text-2xl font-bold text-[#0B0F29]/90 mt-1">Innovation as a Cornerstone</h3>
            <p>
              We prioritize innovation, delivering customized solutions that consistently exceed client expectations. Our approach ensures every offering is deeply aligned with unique business needs, guaranteeing optimal adoption and satisfaction.
            </p>

            <h3 className="text-2xl font-bold text-[#0B0F29]/90 mt-1">Strategic Growth Through Technology</h3>
            <p>
              Through strong strategic partnerships and dedicated expert guidance, we cultivate environments where organizations thrive. We are committed to empowering our clients to embrace new technologies, optimize performance, and future-proof their operations.
            </p>
          </div>

          <Button
            variant="link"
            className="text-[#0B0F29]/90 text-lg"
            onClick={toggleReadMore}
          >
            {expanded ? 'Read Less' : 'Read More...'}
          </Button>

          <p className="text-lg font-semibold">
            Choose Start IT Now and unlock new opportunities for growth, resilience, and technological advancement.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
