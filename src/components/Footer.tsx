import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ children, speed = 1, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const springY = useSpring(y, { stiffness: 400, damping: 90 });

  return (
    <motion.div
      ref={ref}
      style={{ y: springY }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Footer: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const footerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!footerRef.current) return;
    
    const rect = footerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
  };

  const socialLinks = [
    { Icon: Github, href: '#', label: 'GitHub', color: '#EA4335' },
    { Icon: Twitter, href: '#', label: 'Twitter', color: '#4285F4' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn', color: '#34A853' },
    { Icon: Mail, href: '#', label: 'Email', color: '#FBBC04' }
  ];

  const googleColors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];

  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[40vh] bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Background Layers */}
      <ParallaxLayer speed={-0.2} className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] 
                      opacity-5 bg-cover bg-center transform scale-110" />
      </ParallaxLayer>

      {/* Geometric Shapes Layer */}
      <ParallaxLayer speed={0.5} className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 rounded-full"
            style={{
              backgroundColor: googleColors[i % googleColors.length] + '1A',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
        ))}
      </ParallaxLayer>

      {/* Content Layer */}
      <div className="relative container mx-auto px-6 py-16">
        <ParallaxLayer speed={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#4285F4]">GDSC Community</h3>
              <p className="text-gray-300">Empowering students to grow as developers and leaders through technical learning and community building.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#EA4335]">Resources</h3>
              <ul className="space-y-2">
                {['Codelabs', 'Developer Console', 'Cloud Platform', 'Firebase'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-[#EA4335] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#FBBC04]">Programs</h3>
              <ul className="space-y-2">
                {['Solution Challenge', 'Study Jams', 'Hackathons', 'Workshops'].map(program => (
                  <li key={program}>
                    <a href="#" className="text-gray-300 hover:text-[#FBBC04] transition-colors duration-300">
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#34A853]">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
                    style={{ color }}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Copyright Section */}
        <ParallaxLayer speed={0.1}>
          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex justify-center space-x-4 mb-4">
              {googleColors.map((color, index) => (
                <div
                  key={color}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Google Developer Student Clubs. All rights reserved.
            </p>
          </div>
        </ParallaxLayer>
      </div>

      {/* Interactive Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-radial pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 100}% ${50 + mousePosition.y * 100}%, 
                      rgba(66, 133, 244, 0.1) 0%, transparent 50%)`
        }}
      />
    </footer>
  );
};

export default Footer;