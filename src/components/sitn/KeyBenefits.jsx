import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, Headphones, BarChart3, UserCheck } from 'lucide-react';

const benefits = [
  { icon: TrendingUp, title: "35% Faster Hiring", description: "AI-powered multi-agent screening and scheduling" },
  { icon: DollarSign, title: "40% Cost Reduction", description: "Eliminate manual processes and recruitment agency fees" },
  { icon: Target, title: "95% Screening Accuracy", description: "Advanced semantic parsing with bias-free matching" },
  { icon: Headphones, title: "24/7 Employee support", description: "'My Buddy' resolves 80% of HR queries instantly" },
  { icon: BarChart3, title: "325% ROI", description: "Proven return on automation investment within 12 months" },
  { icon: UserCheck, title: "80% Retention Boost", description: "Proactive engagement reduces turnover significantly" },
];

const KeyBenefits = ({ onFeatureClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="benefits" className="py-1 md:py-0 bg-white scroll-mt-18">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="section-title text-black !text-black">Key Benefits</h2>
        <div className="section-title-underline"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="info-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              onClick={onFeatureClick}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1E2A5E] flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#67E8F9]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
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