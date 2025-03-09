import React, { useEffect, useState } from 'react';
import { Twitter, Linkedin, Github, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900 pt-16 pb-8 overflow-hidden">
      {/* Parallax Effect */}
      <motion.div 
        className="absolute inset-0 opacity-10 pattern-dino-footprints"
        style={{ backgroundPositionY: `${scrollY * 0.3}px` }}
      />
      
      {/* Floating T-Rex illustration */}
      <motion.div 
        className="absolute right-0 bottom-0 w-48 h-48 opacity-10"
        variants={floatVariants}
        animate="animate"
      >
        <div className="w-full h-full bg-[#4285F4] mask-dino"></div>
      </motion.div>

      <motion.div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Event Details', 'Schedule', 'Register', 'FAQ'].map((text) => (
                <li key={text} className="text-gray-600 dark:text-gray-400 hover:text-[#4285F4] transition-colors duration-300">{text}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center">&copy; {new Date().getFullYear()} DevJams. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;