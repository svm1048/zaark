import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/devjams-logo.svg" alt="DevJams Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">DevJams</span>
            </div>
            <p className="text-gray-400 mb-4">
              The premier tech event for developers, designers, and tech enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#details" className="text-gray-400 hover:text-white transition-colors duration-300">Event Details</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-white transition-colors duration-300">Schedule</a></li>
              <li><a href="#register" className="text-gray-400 hover:text-white transition-colors duration-300">Register</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Accessibility</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@devjams.tech" className="hover:text-white transition-colors duration-300">info@devjams.tech</a>
              </li>
              <li className="text-gray-400">
                TechHub Conference Center<br />
                123 Innovation Drive<br />
                San Francisco, CA 94103
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DevJams. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ for developers everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;