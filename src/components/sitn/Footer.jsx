import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdHelpOutline } from 'react-icons/md'; 
import { FaFileAlt } from 'react-icons/fa';
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
          <p className="text-lg text-gray-400 mb-6">
            A trustable AI solution where your data remains safe.
          </p>

          <a href="https://www.startitnow.co.in" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Start IT Now" className="mx-auto" />
          </a>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6 text-gray-300">
            <a
              href="tel:+918431403016"
              className="flex items-center gap-2 hover:text-[#67E8F9] transition-colors"
            >
              <Phone size={18} />
              <span>+91-8431403016</span>
            </a>

            <a
              href="https://forms.qntrlusercontent.com/external/publicform/a3d34ee06272ff2f77de1440feeccfecf3fb0cb4855540ae06278496b3e36e13d653f2cd503866811c417fb6bbe559d9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#67E8F9] transition-colors"
            >
              <MdHelpOutline size={18} />
              <span>Help</span>
            </a>
          </div>

<div className="flex justify-center items-center gap-2 mb-8 text-gray-400 mt-1">
  <MapPin size={18} />

    Kaggadasapura Main Road, Kondappa Layout,
    Malleshpalya, C V Raman Nagar,
    Bengaluru, Karnataka 560075

</div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={() => window.open('https://www.startitnow.co.in/contact.php', '_blank')}
              variant="blue"
              size="lg"
              className="flex items-center"
            >
              <FaPhoneAlt className="mr-2 h-5 w-5" />
              Contact Us

            </Button>

            <Button            
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfUunDCgaB4eDQP-ADpV_qFgctArH8kLN_AdmRlRsfn8Abrew/viewform?usp=header', '_blank')}
              variant="blue"
              size="lg"
              className="flex items-center"
            >
              < FaFileAlt className="mr-2 h-5 w-5" />
              Download a White Paper
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
