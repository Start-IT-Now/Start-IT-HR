import React from 'react';
import { motion } from 'framer-motion';
import boost from '../boost.png';
import dollar from '../dollar.png';
import target from '../target.png';
import support from '../support.png';
import roi from '../roi.png';
import growth from '../growth.png';

const benefits = [
  { icon: boost, title: "35% Faster Hiring", description: "AI-powered multi-agent screening and scheduling" },
  { icon: dollar, title: "40% Cost Reduction", description: "Eliminate manual processes and recruitment agency fees" },
  { icon: target, title: "95% Screening Accuracy", description: "Advanced semantic parsing with bias-free matching" },
  { icon: support, title: "24/7 Employee Support", description: "'My Buddy' resolves 80% of HR queries instantly" },
  { icon: roi, title: "325% ROI", description: "Proven return on automation investment within 12 months" },
  { icon: growth, title: "80% Retention Boost", description: "Proactive engagement reduces turnover significantly" },
];

const KeyBenefits = ({ onFeatureClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-gray-800 text-center">Key Benefits</h2>
        <div className="section-title-underline"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2 mb-1">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="info-card bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              onClick={onFeatureClick}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#E6F7FB] flex items-center justify-center shadow-sm">
                  <img src={benefit.icon} alt={benefit.title} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
