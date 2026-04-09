import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import Ganesha from './Ganesha';
import ScrollDownIndicator from './ScrollDownIndicator';

const heroImg = "https://decoral.in/wp-content/uploads/2026/03/website-img.png";

export default function Hero() {

  useEffect(() => {
    // Fire a beautiful golden celebration confetti when the hero first loads
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#d69e2e', '#c53030', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#d69e2e', '#c53030', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <section 
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        color: 'white'
      }}
    >
      {/* Full Bleed Image with Premium Fade */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: '25%', left: 0,
          width: '100%', height: '50vh',
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: -2,
          opacity: 0.95
        }}
      />
      
      {/* Seamless Gradient blending the image firmly into the maroon background */}
      <div 
        style={{
          position: 'absolute',
          top: '25%', left: 0,
          width: '100%', height: '51vh',
          background: 'linear-gradient(to bottom, rgba(92,22,46,0.5) 0%, rgba(92,22,46,0.7) 50%, var(--bg-color) 100%)',
          zIndex: -1
        }}
      />

      <div className="text-center" style={{ padding: '2rem', zIndex: 1, width: '100%', marginBottom: '10vh' }}>
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.3 }}
           style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}
        >
          <div style={{ filter: 'brightness(3)' }}>
              <Ganesha />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontStyle: 'italic', letterSpacing: '1px', marginBottom: '1.5rem', color: '#fbd38d' }}>
            We invite you to celebrate our wedding
          </p>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 12vw, 6rem)', 
            lineHeight: 1.1, 
            marginBottom: '0.5rem', 
            color: 'var(--primary)',
            textShadow: '0 4px 15px rgba(0,0,0,0.6)'
          }}>
            Harsha
            <span style={{ fontSize: '0.5em', verticalAlign: 'middle', margin: '0 0.8rem', color: 'var(--secondary)' }}>&</span>
            Rahul
          </h1>

          <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--secondary)', margin: '1.5rem auto' }} />
          
          <p style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--primary)' }}>
            May 05, 2026
          </p>
          <p style={{ fontSize: '1rem', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-light)', marginTop: '0.5rem' }}>
            Indore, India
          </p>
        </motion.div>
      </div>
      <ScrollDownIndicator />
    </section>
  );
}
