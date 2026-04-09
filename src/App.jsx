import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import { InvitationIntro, InvitationDetails } from './components/Invitation';
import { Itinerary4 } from './components/Itinerary';
import Families from './components/Families';
import Location from './components/Location';
import FixedFrame from './components/FixedFrame';

const slides = [Hero, InvitationIntro, InvitationDetails, Itinerary4, Families, Location];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);

  const changeSlide = (direction) => {
    if (isThrottled) return;
    
    if (direction === 1 && currentPage < slides.length - 1) {
      setCurrentPage(prev => prev + 1);
      triggerThrottle();
    } else if (direction === -1 && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      triggerThrottle();
    }
  };

  const triggerThrottle = () => {
    setIsThrottled(true);
    setTimeout(() => setIsThrottled(false), 1200); // Wait for transition duration
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.y < -50) changeSlide(1);
    else if (info.offset.y > 50) changeSlide(-1);
  };

  const handleWheel = (e) => {
    if (e.deltaY > 50) changeSlide(1);
    else if (e.deltaY < -50) changeSlide(-1);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') changeSlide(1);
      if (e.key === 'ArrowUp' || e.key === 'PageUp') changeSlide(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isThrottled]);

  const CurrentComponent = slides[currentPage];

  return (
    <div 
      className="app-container" 
      style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative' }}
      onWheel={handleWheel}
    >
      <FixedFrame />

      <AnimatePresence mode="wait">
        <motion.div
           key={currentPage}
           initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
           animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
           exit={{ opacity: 0, filter: 'blur(12px)', transition: { duration: 0.6 } }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           drag="y"
           dragConstraints={{ top: 0, bottom: 0 }}
           onDragEnd={handleDragEnd}
           style={{ 
             height: '100%', 
             width: '100%', 
             display: 'flex', 
             alignItems: 'center', 
             justifyContent: 'center', 
             touchAction: 'none', 
             cursor: 'grab',
             position: 'absolute',
             top: 0,
             left: 0,
             zIndex: 10
           }}
           whileTap={{ cursor: 'grabbing' }}
        >
           <CurrentComponent />
        </motion.div>
      </AnimatePresence>
      

    </div>
  );
}

export default App;
