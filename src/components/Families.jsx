import React from 'react';
import { motion } from 'framer-motion';
import Ganesha from './Ganesha';
import { AnimatedLotus, RotatingMandala } from './Graphics';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, type: "spring", bounce: 0.4 }
  }
};

export default function Families() {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <RotatingMandala size={450} opacity={0.04} style={{ position: 'absolute', top: '-10%', left: '-10%' }} />
      <RotatingMandala size={400} opacity={0.04} style={{ position: 'absolute', bottom: '-10%', right: '-10%' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="glass-panel text-center"
        style={{
          maxWidth: '650px',
          margin: '0 auto',
          padding: '2rem 1.5rem',
          zIndex: 2
        }}
      >
        <motion.div variants={itemVariants} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
          <Ganesha />
        </motion.div>
        
        <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <AnimatedLotus size={50} color="var(--primary)" />
        </motion.div>
        
        <motion.h2 variants={itemVariants} style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Our Families</motion.h2>
        
        <motion.p variants={itemVariants} style={{ fontSize: '1.2rem', marginBottom: '2rem', fontStyle: 'italic', color: 'var(--text-light)' }}>
          With the blessings of our elders and the love of our kin:
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
          <motion.h3 variants={itemVariants} style={{ fontSize: '2.2rem', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--primary-dark)' }}>The Rathore Family</motion.h3>
          <motion.span variants={itemVariants} style={{ fontSize: '1.5rem', opacity: 0.8, color: 'var(--primary)' }}>&</motion.span>
          <motion.h3 variants={itemVariants} style={{ fontSize: '2.2rem', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--primary-dark)' }}>The Sahu Family</motion.h3>
        </div>

        <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--secondary)' }}>
          We welcome you to join in our joy!
        </motion.p>
      </motion.div>
    </section>
  );
}
