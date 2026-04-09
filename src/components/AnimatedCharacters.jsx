import React from 'react';
import { motion } from 'framer-motion';

// --- Animated Baraat (Groom on Horse) ---
export const AnimatedBaraat = ({ scale = 1 }) => {
  return (
    <motion.div
      style={{ width: 140 * scale, height: 140 * scale, display: 'inline-block', position: 'relative' }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        {/* Decorative background sun / mandala */}
        <motion.circle cx="100" cy="100" r="70" fill="none" stroke="#d69e2e" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" 
          animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Horse */}
        <path d="M40 130 Q70 70 110 70 L150 70 Q170 70 170 100 L150 130 Z" fill="#ffffff" />
        <path d="M150 70 Q160 40 180 40 L170 70 Z" fill="#ffffff" /> {/* Head */}
        {/* Horse Legs (Animated Trot) */}
        <motion.rect x="50" y="130" width="8" height="40" fill="#ffffff" rx="4" animate={{ rotate: [0, 15, 0], y: [0, -5, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
        <motion.rect x="70" y="130" width="8" height="40" fill="#ffffff" rx="4" animate={{ rotate: [0, -15, 0], y: [0, -5, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} />
        <motion.rect x="130" y="130" width="8" height="40" fill="#ffffff" rx="4" animate={{ rotate: [0, 15, 0], y: [0, -5, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
        <motion.rect x="150" y="130" width="8" height="40" fill="#ffffff" rx="4" animate={{ rotate: [0, -15, 0], y: [0, -5, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} />
        {/* Horse tail */}
        <path d="M40 100 Q20 120 30 140" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />

        {/* Groom */}
        <circle cx="110" cy="35" r="12" fill="#fbd38d" /> {/* head */}
        <path d="M98 30 Q110 20 122 30 Z" fill="#c53030" /> {/* safa / turban */}
        <rect x="100" y="50" width="20" height="35" rx="5" fill="#c53030" /> {/* sherwani */}
        
        {/* Royal Umbrella Umbrella */}
        <motion.g animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ originX: '110px', originY: '70px' }}>
          <line x1="110" y1="60" x2="110" y2="5" stroke="#d69e2e" strokeWidth="3" />
          <path d="M75 15 Q110 -10 145 15 Z" fill="#c53030" />
          <path d="M75 15 Q110 0 145 15" fill="none" stroke="#fbd38d" strokeWidth="2" />
          <circle cx="75" cy="22" r="2.5" fill="#fbd38d" />
          <circle cx="110" cy="22" r="2.5" fill="#fbd38d" />
          <circle cx="145" cy="22" r="2.5" fill="#fbd38d" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

// --- Animated Haldi ---
export const AnimatedHaldi = ({ scale = 1 }) => {
  return (
    <motion.div
      style={{ width: 140 * scale, height: 140 * scale, display: 'inline-block', position: 'relative' }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        {/* Decorative Haldi Drops / Marigolds */}
        <motion.circle cx="160" cy="80" r="6" fill="#d69e2e" animate={{ y: [-5, 5, -5] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="140" cy="110" r="4" fill="#d69e2e" animate={{ y: [5, -5, 5] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.circle cx="50" cy="70" r="5" fill="#d69e2e" animate={{ y: [-3, 3, -3] }} transition={{ duration: 1.8, repeat: Infinity }} />
        <motion.circle cx="55" cy="110" r="8" fill="#d69e2e" animate={{ y: [4, -4, 4], scale: [1, 1.2, 1] }} transition={{ duration: 2.2, repeat: Infinity }} />

        {/* Bride Seated */}
        <circle cx="100" cy="65" r="16" fill="#fbd38d" /> {/* head */}
        {/* Haldi paste on face */}
        <ellipse cx="95" cy="63" rx="4" ry="2" fill="#d69e2e" opacity="0.8" />
        <ellipse cx="105" cy="63" rx="4" ry="2" fill="#d69e2e" opacity="0.8" />
        {/* Yellow Dress / Lehenga */}
        <path d="M70 145 Q100 80 130 145 Z" fill="#d69e2e" /> 
        <path d="M65 145 Q100 160 135 145 Z" fill="#b7791f" opacity="0.5" /> 
        
        {/* Seated Hands raised slightly */}
        <path d="M85 100 Q65 120 75 130" fill="none" stroke="#fbd38d" strokeWidth="6" strokeLinecap="round" />
        <path d="M115 100 Q135 120 125 130" fill="none" stroke="#fbd38d" strokeWidth="6" strokeLinecap="round" />

        {/* Big Kalash / Haldi Bowl in front */}
        <motion.g animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <path d="M80 160 Q100 190 120 160 Z" fill="#c53030" />
          <ellipse cx="100" cy="160" rx="20" ry="6" fill="#b7791f" /> {/* Inner shadow */}
          <ellipse cx="100" cy="158" rx="16" ry="4" fill="#fbd38d" /> {/* Glowing haldi paste */}
        </motion.g>
      </svg>
    </motion.div>
  );
};

// --- Animated Couple (Reception) ---
export const AnimatedCouple = ({ scale = 1 }) => {
  return (
    <motion.div
      style={{ width: 140 * scale, height: 140 * scale, display: 'inline-block', position: 'relative' }}
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        {/* Beautiful floral arch behind them */}
        <path d="M40 180 L40 80 Q100 20 160 80 L160 180" fill="none" stroke="#d69e2e" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />
        
        {/* Groom (Left) */}
        <circle cx="70" cy="60" r="14" fill="#fbd38d" /> {/* head */}
        <path d="M56 50 Q70 34 84 50 Z" fill="#c53030" /> {/* safa */}
        <rect x="58" y="80" width="24" height="60" rx="6" fill="#c53030" /> {/* sherwani */}
        {/* Legs */}
        <rect x="62" y="140" width="6" height="30" fill="#ffffff" /> 
        <rect x="72" y="140" width="6" height="30" fill="#ffffff" /> 
        {/* Stole/Dupatta on groom */}
        <path d="M58 80 Q45 110 55 140" fill="none" stroke="#d69e2e" strokeWidth="4" />

        {/* Bride (Right) */}
        <motion.g animate={{ y: [0, 2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <circle cx="130" cy="65" r="13" fill="#fbd38d" /> {/* head */}
          {/* Hair / bridal bun */}
          <circle cx="145" cy="65" r="7" fill="#2d3748" />
          <path d="M100 85 L85 170 L175 170 L160 85 Z" fill="#c53030" /> {/* Heavy Lehenga */}
          {/* Lehenga gold embroidery */}
          <path d="M90 155 L170 155" stroke="#d69e2e" strokeWidth="4" strokeDasharray="10 5" />
          <path d="M95 165 L165 165" stroke="#d69e2e" strokeWidth="2" />
          {/* Bridal Veil covering head and flowing */}
          <path d="M125 50 Q160 50 160 110 Q160 150 170 170" fill="none" stroke="#d69e2e" strokeWidth="5" opacity="0.8" />
        </motion.g>

        {/* Joined Hands holding together */}
        <path d="M82 110 Q100 120 115 110" fill="none" stroke="#fbd38d" strokeWidth="5" strokeLinecap="round" />
        {/* Little floating heart */}
        <motion.path 
          d="M100 80 A5 5 0 0 0 95 85 A5 5 0 0 0 100 90 A5 5 0 0 0 105 85 A5 5 0 0 0 100 80 Z" 
          fill="#c53030"
          animate={{ y: [0, -15], opacity: [1, 0] }} 
          transition={{ duration: 2, repeat: Infinity }} 
        />
      </svg>
    </motion.div>
  );
};
