import React from 'react';
import { Twitter, Linkedin, Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900 pt-16 pb-8 overflow-hidden">
      {/* Dinosaur footprint pattern background */}
      <div className="absolute inset-0 opacity-5 pattern-dino-footprints"></div>
      
      {/* T-Rex illustration */}
      <div className="absolute right-0 bottom-0 w-48 h-48 opacity-10 transform translate-x-1/4 translate-y-1/4">
        <div className="w-full h-full bg-[#4285F4] mask-dino"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#4285F4] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white mask-dino"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">DevJams</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The premier tech event for developers, designers, and tech enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#4285F4] hover:text-[#DB4437] transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#DB4437] hover:text-[#F4B400] transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#F4B400] hover:text-[#0F9D58] transition-colors duration-300" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-[#0F9D58] hover:text-[#4285F4] transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '#hero', text: 'Home' },
                { href: '#details', text: 'Event Details' },
                { href: '#schedule', text: 'Schedule' },
                { href: '#register', text: 'Register' },
                { href: '#faq', text: 'FAQ' }
              ].map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#4285F4] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#4285F4] rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              {[
                'Code of Conduct',
                'Privacy Policy',
                'Terms of Service',
                'Accessibility',
                'Press Kit'
              ].map((resource) => (
                <li key={resource}>
                  <a 
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#DB4437] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#DB4437] rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@devjams.tech"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#F4B400] transition-colors duration-300 flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  info@devjams.tech
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                VIT Vellore
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} DevJams. All rights reserved.
          </p>
          <div className="mt-2 flex items-center justify-center space-x-2 text-lg font-bold">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#DB4437]">D</span>
            <span className="text-[#F4B400]">S</span>
            <span className="text-[#0F9D58]">C</span>
            <span className="text-gray-600 dark:text-gray-400 mx-2">&lt;&gt;</span>
            <div className="w-6 h-6 bg-[#4285F4] mask-dino"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;