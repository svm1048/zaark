import React from 'react';
import { Twitter, Linkedin, Github, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

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

  const linkHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900 pt-16 pb-8 overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5 pattern-dino-footprints"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Floating T-Rex illustration */}
      <motion.div 
        className="absolute right-0 bottom-0 w-48 h-48 opacity-10"
        variants={floatVariants}
        animate="animate"
      >
        <div className="w-full h-full bg-[#4285F4] mask-dino"></div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-10 h-10 bg-[#4285F4] rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-6 h-6 bg-white mask-dino"></div>
              </motion.div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">DevJams</span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The premier tech event for developers, designers, and tech enthusiasts.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, color: "#4285F4", hover: "#DB4437", label: "Twitter" },
                { icon: Linkedin, color: "#DB4437", hover: "#F4B400", label: "LinkedIn" },
                { icon: Github, color: "#F4B400", hover: "#0F9D58", label: "GitHub" },
                { icon: Instagram, color: "#0F9D58", hover: "#4285F4", label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className={`text-[${social.color}]`}
                  variants={linkHoverVariants}
                  whileHover="hover"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '#hero', text: 'Home' },
                { href: '#details', text: 'Event Details' },
                { href: '#schedule', text: 'Schedule' },
                { href: '#register', text: 'Register' },
                { href: '#faq', text: 'FAQ' }
              ].map((link) => (
                <motion.li 
                  key={link.text}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#4285F4] transition-colors duration-300 flex items-center group"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-[#4285F4] rounded-full mr-2"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              {[
                'Code of Conduct',
                'Privacy Policy',
                'Terms of Service',
                'Accessibility',
                'Press Kit'
              ].map((resource) => (
                <motion.li 
                  key={resource}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#DB4437] transition-colors duration-300 flex items-center group"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-[#DB4437] rounded-full mr-2"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                    {resource}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }}>
                <a 
                  href="mailto:info@devjams.tech"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#F4B400] transition-colors duration-300 flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  info@devjams.tech
                </a>
              </motion.li>
              <motion.li 
                className="text-gray-600 dark:text-gray-400"
                whileHover={{ x: 5 }}
              >
                VIT Vellore
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} DevJams. All rights reserved.
          </p>
          <motion.div 
            className="mt-2 flex items-center justify-center space-x-2 text-lg font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="text-[#4285F4]"
              whileHover={{ y: -2 }}
            >
              G
            </motion.span>
            <motion.span 
              className="text-[#DB4437]"
              whileHover={{ y: -2 }}
            >
              D
            </motion.span>
            <motion.span 
              className="text-[#F4B400]"
              whileHover={{ y: -2 }}
            >
              S
            </motion.span>
            <motion.span 
              className="text-[#0F9D58]"
              whileHover={{ y: -2 }}
            >
              C
            </motion.span>
            <motion.span 
              className="text-gray-600 dark:text-gray-400 mx-2"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              &lt;&gt;
            </motion.span>
            <motion.div 
              className="w-6 h-6 bg-[#4285F4] mask-dino"
              variants={floatVariants}
              animate="animate"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;