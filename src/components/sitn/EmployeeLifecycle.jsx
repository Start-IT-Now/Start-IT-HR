import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserPlus, Heart, BarChart, LogOut } from 'lucide-react';


const stages = [
  { icon: Search, title: "Recruitment", description: "AI-powered screening & Qualifying" },
  { icon: UserPlus, title: "Onboarding", description: "Automated documentation & training" },
  { icon: Heart, title: "Engagement", description: "24/7 support with My Buddy" },
  { icon: BarChart, title: "Performance", description: "Real-time tracking & analytics" },
  { icon: LogOut, title: "Offboarding", description: "Seamless exit workflows" },
];

const EmployeeLifecycle = ({ onFeatureClick }) => {
  return (
       <section className="relative py-20 md:py-32 text-center overflow-hidden bg-white">

    <section className="py-4 md:py-6 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" style={{color: '#0c0c0cff'}}>Employee Lifecycle Automation</h2>
        <div className="section-title-underline"></div>

        <div className="relative mt-12">
          {/* horizontal line behind icons */}
          <div className="hidden md:block absolute top-[86px] left-0 w-full h-0.5 bg-[#1E2A5E] z-0"></div>

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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1E2A5E] to-[#121A41] border-2 border-[#1E2A5E] flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-[#67E8F9] group-hover:scale-110">
                  <stage.icon className="w-10 h-10 text-[#67E8F9]" />
                </div>

                {/* Title styled with the same color as icon background */}
                <h3 className="font-bold text-lg mb-1 text-[#1E2A5E]">{stage.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm px-2">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default EmployeeLifecycle;
