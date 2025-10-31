import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserPlus, Heart, BarChart, LogOut } from 'lucide-react';
import pattern from '../pattern.png';

const stages = [
  { icon: Search, title: "Recruitment", description: "AI-powered screening & Qualifying" },
  { icon: UserPlus, title: "Onboarding", description: "Automated documentation & training" },
  { icon: Heart, title: "Engagement", description: "24/7 support with My Buddy" },
  { icon: BarChart, title: "Performance", description: "Real-time tracking & analytics" },
  { icon: LogOut, title: "Offboarding", description: "Seamless exit workflows" },
];

const EmployeeLifecycle = ({ onFeatureClick }) => {
  return (
    <section className="relative py-16 text-center overflow-hidden ">
      {/* ✅ Full background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={pattern}
          alt="Background pattern"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Heading visible and clear */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 ">
          Employee Lifecycle Automation
        </h2>
        <div className="mx-auto mb-10 h-1 w-24 bg-[#67E8F9] rounded-full"></div>

        <div className="relative mt-12">
          {/* horizontal line behind icons */}
          <div className="hidden md:block absolute top-[86px] left-0 w-full h-0.5 bg-[#67E8F9]/30 z-0"></div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 relative z-10">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center cursor-pointer group"
                onClick={onFeatureClick}
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1E2A5E] to-[#121A41] border-2 border-[#67E8F9]/40 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-[#67E8F9] group-hover:scale-110 shadow-lg">
                  <stage.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-1 text-white">{stage.title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm px-2">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeLifecycle;
