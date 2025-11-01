import React from 'react';
import { color, motion } from 'framer-motion';

const personas = [
  { title: "CHRO", description: "Drive strategic HR transformation" },
  { title: "Director HR", description: "Optimize employee lifecycle workflows" },
  { title: "CIO", description: "Ensure IT compatibility and security" },
  { title: "Talent Agency Owner", description: "Deliver ROI to clients faster" },
];

const Personas = ({ onFeatureClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-2 md:py-4 bg-gray-50 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title " style={{ color: '#212529' }}>Benefits to Personas</h2>
        <div className="section-title-underline"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
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
              <h3 className="text-xl font-bold mb-2 text-gray-800">{persona.title}</h3>
              <p className="text-gray-500">{persona.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;