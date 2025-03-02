import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronUp, Calendar, Clock, MapPin, Video, Plus, Search, X } from 'lucide-react';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [showFab, setShowFab] = useState(false);
  const [customCursor, setCustomCursor] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY > 300);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCustomCursor(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const handleMouseDown = () => {
      setCustomCursor(prev => ({ ...prev, active: true }));
    };

    const handleMouseUp = () => {
      setCustomCursor(prev => ({ ...prev, active: false }));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div 
        className="custom-cursor hidden md:block" 
        style={{ 
          left: `${customCursor.x}px`, 
          top: `${customCursor.y}px`,
          transform: `translate(-50%, -50%) scale(${customCursor.active ? 0.8 : 1})`,
          opacity: customCursor.active ? 0.8 : 0.6
        }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <EventDetails />
        <Schedule />
        <Registration />
        <Faq />
      </main>
      
      <Footer />
      
      <AnimatePresence>
        {showFab && (
          <motion.div 
            className="fab"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
          >
            <ChevronUp size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;