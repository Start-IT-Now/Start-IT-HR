import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../white-logo.png';

const Header = ({ onFeatureClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Solutions', 'Benefits', 'Features', 'About'];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-[#0B0F29]/80 backdrop-blur-lg sticky top-0 z-50 border-b border-[#1E2A5E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-3xl font-bold text-white" onClick={(e) => handleNavClick(e, 'hero')}>
                  <img  class="w-full h-full object-cover" src={logo} alt="Start IT Now"  />
            </a>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-gray-300 hover:text-[#67E8F9] transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0B0F29] border-t border-[#1E2A5E]"
        >
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-gray-300 hover:text-[#67E8F9] transition-colors duration-300 font-medium text-lg"
              >
                {item}
              </a>
            ))}
   
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;