import React from 'react';
import { motion } from 'framer-motion';

export default function Ganesha({ className = "", showText = true, showSymbol = true }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`text-center ${className}`} 
      style={{ margin: '1rem auto' }}
    >
      {showSymbol && (
        <div style={{ 
          display: 'inline-block',
          padding: '1rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(197, 48, 48, 0.05)',
          border: '1px solid rgba(197, 48, 48, 0.1)',
          color: 'var(--primary)'
        }}>
          {/* Ganesha Om symbol */}
          <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" style={{ opacity: 0.9 }}>
            <text x="50" y="70" fontSize="80" fontFamily="Arial, sans-serif" textAnchor="middle" fill="currentColor">ॐ</text>
          </svg>
          {showText && (
            <div style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)', marginTop: '0.5rem', fontWeight: 600 }}>
              ॥ श्री गणेशाय नमः ॥
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
