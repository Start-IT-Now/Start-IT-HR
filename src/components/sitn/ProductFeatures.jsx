import React from 'react';
import { motion } from 'framer-motion';
import mobile from '../mobile.png';
import employee from '../employee.png';
import multi from '../multi.png';
import workflow from '../workflow.png';
import graph from '../graph.png';
import Shield from'../shield.png';
import Link from '../link.png';
import resume from '../resume.png';



const features = [
  { icon: multi, title: "Multi-Agent Orchestration", description: "3 specialized AI agents working together seamlessly" },
  { icon: resume, title: "Resume Parsing", description: "Bias-free context based analysis with 95% accuracy" },
  { icon: employee, title: "Employee Engagement", description: "Dedicated 'My Buddy' conversational AI agent" },
  { icon: workflow, title: "Workflow Automation", description: "No-code customization for all HR processes" },
  { icon: graph, title: "Real-time Analytics", description: "Predictive insights and performance tracking" },
  { icon: Link, title: "Smart Integrations", description: "150+ HR system connections with API-first design" },
  { icon: mobile, title: "Mobile Access", description: "Complete functionality across all devices" },
  { icon: Shield, title: "Compliance Management", description: "Enterprise-grade security and data protection" },
];

const ProductFeatures = ({ onFeatureClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="features" className="py-10 md:py-16 bg-gray-50 scroll-mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 ">
          Product Features
        </h2>
        <div className="w-24 h-1 bg-[#212529] mx-auto mb-2 rounded-full mt-1"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center p-6 cursor-pointer"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              onClick={() => onFeatureClick?.(feature.title)}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#E6F7FB] flex items-center justify-center shadow-sm">
                     <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
