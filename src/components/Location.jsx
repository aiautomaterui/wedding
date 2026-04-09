import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import ScrollDownIndicator from './ScrollDownIndicator';

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

export default function Location() {
  const mapLink = "https://maps.google.com/?q=Anand+Marriage+Garden+RAPTC+Palhar+Nagar+Indore";

  return (
    <section className="section text-center" style={{ backgroundColor: 'transparent' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <motion.h2 variants={itemVariants} style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Location</motion.h2>
        <motion.div variants={itemVariants} style={{ width: '40px', height: '2px', backgroundColor: 'var(--secondary)', margin: '0 auto 1rem' }}></motion.div>

        <motion.div variants={itemVariants} className="glass-panel" style={{ 
          padding: '1.5rem', 
          margin: '0 auto 1.5rem',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ 
            backgroundColor: 'rgba(197,48,48,0.1)', 
            padding: '1rem', 
            borderRadius: '50%', 
            marginBottom: '1.5rem' 
          }}>
            <MapPin size={32} color="var(--primary)" />
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Venue</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            <strong>Anand Marriage Garden</strong><br />
            RAPTC, Palhar Nagar,<br />
            Indore, Madhya Pradesh
          </p>

          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn">
            <Navigation size={15} />
            Open in Google Maps
          </a>
        </motion.div>

        <motion.div variants={itemVariants} style={{
          backgroundColor: 'rgba(214, 158, 46, 0.1)',
          borderLeft: '4px solid var(--secondary)',
          padding: '1.5rem',
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <p style={{ color: 'var(--text-main)', margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2rem' }}>Note to Guests:</strong> The Baraat will depart from the Rathor Residence to Anand Marriage Garden.
          </p>
        </motion.div>
      </motion.div>
      <ScrollDownIndicator />
    </section>
  );
}