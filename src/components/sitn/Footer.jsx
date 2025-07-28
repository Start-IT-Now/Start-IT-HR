import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Globe, MapPin } from 'lucide-react';
import logo from '../white-logo.png';

const Footer = ({ onFeatureClick }) => {
  return (
    <footer className="bg-[#0F1431] border-t border-[#1E2A5E] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-400 mb-6">A trustable AI solution where your data remains safe.</p>
          <img src={logo} alt='Start IT Now' className='mx-auto'></img>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6 text-gray-300">
            <a href="tel:+918431403016" className="flex items-center gap-2 hover:text-[#67E8F9] transition-colors">
              <Phone size={18} />
              <span>+91-8431403016</span>
            </a>
            <a href="https://www.startitnow.co.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#67E8F9] transition-colors">
              <Globe size={18} />
              <span>www.startitnow.co.in</span>
            </a>
          </div>
          
          <div className="flex justify-center items-center gap-2 mb-8 text-gray-400">
            <MapPin size={18} />
            <span>Electronic City, Phase-2, Bengaluru - 560100, INDIA</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={onFeatureClick}
              className="bg-[#2563EB] hover:bg-[#1E40AF] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-base"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Started Today, Call us for Demonstration
            </Button>
            <Button
              onClick={onFeatureClick}
              variant="secondary"
              className="border-[#2563EB] hover:bg-[#1E40AF] hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-base"
            >
              Customer Support
            </Button>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Start IT Now. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;