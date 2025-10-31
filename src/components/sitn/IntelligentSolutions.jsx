import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

// ✅ Import Lottie animations
import aiBrain from '../AIanimation.json';
import chatbotBuddy from '../Livechatbot.json';
import lightningAutomation from '../Lightningbolt.json';

const solutions = [
  {
    animation: aiBrain,
    title: "Talent Sift (AI)",
    description: "AI agents designed for industry specific resume screening and qualification."
  },
  {
    animation: chatbotBuddy,
    title: "My Buddy",
    description: "Boost productivity with a smart assistant that supports and resolves employee queries instantly."
  },
  {
    animation: lightningAutomation,
    title: "Easy Automate",
    description: "Streamline operations with low code automation - Resilient, Transparent and Tailored for every user."
  }
];

const IntelligentSolutions = ({ onFeatureClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="solutions" className="py-4 md:py-6 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" style={{ color: '#212529' }}>Our Intelligent Solutions</h2>
        <div className="section-title-underline"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="info-card text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              onClick={onFeatureClick}
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
                  <Lottie animationData={solution.animation} loop={true} style={{ width: 80, height: 80 }} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{solution.title}</h3>
              <p className="text-gray-500">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;
