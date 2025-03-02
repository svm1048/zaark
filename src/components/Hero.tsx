import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const particlesRef = useRef<HTMLDivElement>(null);
  
  // Event date - set to 3 months from now
  const eventDate = new Date();
  eventDate.setMonth(eventDate.getMonth() + 3);
  
  useEffect(() => {
    // Create particles
    if (particlesRef.current) {
      const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 30 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Set styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesRef.current.appendChild(particle);
      }
    }
    
    // Countdown timer
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    // GSAP animation for logo
    gsap.from('.logo-animation', {
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: 'power3.out'
    });
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          filter: 'brightness(0.3)'
        }}
      ></div>
      
      {/* Particles */}
      <div ref={particlesRef} className="particles"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <img src="/devjams-logo.svg" alt="DevJams Logo" className="w-24 h-24 logo-animation" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 logo-animation">
            Dev<span className="text-google-blue">J</span><span className="text-google-red">a</span><span className="text-google-yellow">m</span><span className="text-google-green">s</span>
          </h1>
          
          <div className="h-12 overflow-hidden">
            <p className="typewriter text-xl md:text-2xl text-gray-300 logo-animation">
              Wham Bam Let's DevJams
            </p>
          </div>
        </motion.div>
        
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center space-x-4 md:space-x-8 mb-12"
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="text-center">
              <div className="bg-surface-1 rounded-lg w-16 md:w-24 h-16 md:h-24 flex items-center justify-center shadow-elevation-1">
                <span className="text-2xl md:text-4xl font-bold">{value}</span>
              </div>
              <span className="text-sm md:text-base text-gray-400 mt-2 capitalize">{label}</span>
            </div>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#register" className="btn-primary inline-block">
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;