import React from 'react';
import { motion } from 'framer-motion';

export default function Ganesha({ className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`text-center ${className}`} 
      style={{ margin: '1rem auto' }}
    >
      <div style={{ 
        display: 'inline-block',
        padding: '1rem',
        borderRadius: '50%',
        backgroundColor: 'rgba(197, 48, 48, 0.05)',
        border: '1px solid rgba(197, 48, 48, 0.1)',
        color: 'var(--primary)'
      }}>
        {/* We use an elegant Om and Shree Ganeshay Namah which serves as the traditional logo */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3592/3592864.png" 
          alt="Lord Ganesha" 
          style={{ width: '60px', height: '60px', opacity: 0.8, filter: 'sepia(1) hue-rotate(-50deg) saturate(3) brightness(0.8)' }} 
        />
        <div style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)', marginTop: '0.5rem', fontWeight: 600 }}>
          ॥ श्री गणेशाय नमः ॥
        </div>
      </div>
    </motion.div>
  );
}
