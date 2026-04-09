import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollDownIndicator() {
  return (
    <motion.div 
      animate={{ y: [0, 12, 0] }} 
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      {/* Scroll text */}
      <span style={{ 
        color: 'var(--primary-dark)', 
        fontSize: '12px', 
        fontWeight: 500,
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}>
        Scroll
      </span>
      
      {/* Animated arrow down */}
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: 'var(--primary-dark)' }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </motion.svg>
    </motion.div>
  );
}
