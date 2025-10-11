import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Bot, Settings, LineChart, Link, Smartphone, Shield } from 'lucide-react';

const features = [
  { icon: Users, title: "Multi-Agent Orchestration", description: "3 specialized AI agents working together seamlessly" },
  { icon: FileText, title: "Resume Parsing", description: "Bias-free context based analysis with 95% accuracy" },
  { icon: Bot, title: "Employee Engagement", description: "Dedicated 'My Buddy' conversational AI agent" },
  { icon: Settings, title: "Workflow Automation", description: "No-code customization for all HR processes" },
  { icon: LineChart, title: "Real-time Analytics", description: "Predictive insights and performance tracking" },
  { icon: Link, title: "Smart Integrations", description: "150+ HR system connections with API-first design" },
  { icon: Smartphone, title: "Mobile Access", description: "Complete functionality across all devices" },
  { icon: Shield, title: "Compliance Management", description: "Enterprise-grade security and data protection" },
];

const ProductFeatures = ({ onFeatureClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
<section id="features" className="py-4 md:py-6 bg-white scroll-mt-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="section-title text-black !text-black">Product Features</h2>
    <div className="section-title-underline bg-[#0BC5EA]"></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
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
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#E6F7FB] flex items-center justify-center">
              <feature.icon className="w-8 h-8 text-[#0BC5EA]" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">{feature.title}</h3>
          <p className="text-gray-300 text-center text-sm">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ProductFeatures;