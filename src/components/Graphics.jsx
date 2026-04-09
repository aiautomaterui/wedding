import React from 'react';
import { motion } from 'framer-motion';

// A beautifully animated overlapping rings SVG
export const AnimatedRings = ({ size = 64, color = "var(--secondary)" }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    style={{ display: 'inline-flex', justifyContent: 'center', margin: '1rem 0' }}
  >
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle 
        cx="35" cy="30" r="22" 
        stroke={color} strokeWidth="4" 
        autoReverse
        animate={{ rotateY: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="65" cy="30" r="22" 
        stroke={color} strokeWidth="4" 
        autoReverse
        animate={{ rotateY: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      {/* Diamond on the right ring */}
      <motion.path 
        d="M65 4 L70 0 L75 4 L70 8 Z" 
        fill="white" stroke={color} strokeWidth="1"
        animate={{ scale: [1, 1.2, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  </motion.div>
);

// A geometric floating Lotus flower representing purity and a traditional Indian wedding motif
export const AnimatedLotus = ({ size = 64, color = "var(--primary)" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{ display: 'inline-flex', justifyContent: 'center' }}
  >
    <motion.svg 
      width={size} height={size * 0.7} viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M50 65 Q50 30 75 10 Q60 50 50 65" fill={color} opacity="0.8" />
      <path d="M50 65 Q50 30 25 10 Q40 50 50 65" fill={color} opacity="0.8" />
      <path d="M50 65 Q60 20 90 25 Q70 60 50 65" fill={color} opacity="0.6" />
      <path d="M50 65 Q40 20 10 25 Q30 60 50 65" fill={color} opacity="0.6" />
      <path d="M50 65 C40 30 60 30 50 65" fill={color} />
      <circle cx="50" cy="65" r="5" fill="var(--secondary)" />
    </motion.svg>
  </motion.div>
);

// A flickering Diya representing Haldi/Light
export const AnimatedDiya = ({ size = 48, color = "var(--secondary)" }) => (
  <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'flex-end', height: size }}>
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M25 5 Q35 15 25 25 Q15 15 25 5" 
        fill="#fbd38d" 
        animate={{ scaleY: [1, 1.1, 0.95, 1.15, 1], scaleX: [1, 0.95, 1.05, 0.9, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: 'center bottom' }}
      />
      <path d="M10 25 Q25 45 40 25 Z" fill="var(--primary)" />
      <path d="M15 25 Q25 35 35 25" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
  </div>
);

// A slowly rotating Mandala backplate
export const RotatingMandala = ({ size = 150, color = "var(--primary)", opacity = 0.1, style }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    style={{ position: 'absolute', pointerEvents: 'none', opacity, zIndex: 0, ...style }}
  >
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="50" cy="50" r="35" stroke={color} strokeWidth="0.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} style={{ transform: `rotate(${angle}deg)`, transformOrigin: '50px 50px' }}>
          <path d="M50 50 L50 10 Q55 25 50 50" fill={color} />
          <path d="M50 50 L50 10 Q45 25 50 50" fill={color} />
        </g>
      ))}
      <circle cx="50" cy="50" r="10" fill={color} />
    </svg>
  </motion.div>
);
