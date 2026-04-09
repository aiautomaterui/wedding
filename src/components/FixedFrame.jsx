import React from 'react';

const CornerOrnament = ({ style }) => (
  <svg width="60" height="60" viewBox="0 0 100 100" style={{ position: 'absolute', ...style }}>
    <path d="M0 0 L100 0 C100 50 50 100 0 100 Z" fill="none" stroke="url(#goldGrad)" strokeWidth="2" />
    <path d="M0 0 L70 0 C70 35 35 70 0 70 Z" fill="none" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6"/>
    <path d="M0 0 L40 0 C40 20 20 40 0 40 Z" fill="url(#goldGrad)" opacity="0.3"/>
    <circle cx="20" cy="20" r="3" fill="#d69e2e" />
    <circle cx="45" cy="15" r="2" fill="#d69e2e" opacity="0.8"/>
    <circle cx="15" cy="45" r="2" fill="#d69e2e" opacity="0.8"/>
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbd38d" />
        <stop offset="50%" stopColor="#d69e2e" />
        <stop offset="100%" stopColor="#8a6a2f" />
      </linearGradient>
    </defs>
  </svg>
);

const DelicateChandelier = ({ left }) => (
  <svg style={{ position: 'absolute', left, top: 0, transform: 'translateX(-50%)' }} width="40" height="120" viewBox="0 0 40 120">
    <line x1="20" y1="0" x2="20" y2="50" stroke="#d69e2e" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    <path d="M10 50 Q20 30 30 50 Z" fill="none" stroke="#d69e2e" strokeWidth="1" />
    <path d="M5 70 Q20 50 35 70 Z" fill="rgba(214, 158, 46, 0.1)" stroke="#d69e2e" strokeWidth="1" />
    <line x1="20" y1="70" x2="20" y2="100" stroke="#d69e2e" strokeWidth="0.5" />
    <circle cx="20" cy="100" r="2" fill="#fff" />
    <circle cx="10" cy="85" r="1.5" fill="#fbd38d" />
    <circle cx="30" cy="85" r="1.5" fill="#fbd38d" />
  </svg>
);

export default function FixedFrame() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 40, overflow: 'hidden' }}>
      
      {/* Outer Luxury Border */}
      <div style={{ 
        position: 'absolute', inset: '12px',
        border: '1px solid rgba(214, 158, 46, 0.5)',
        borderRadius: '16px',
        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.6)'
      }}>
        {/* Inner subtle border */}
        <div style={{ 
          position: 'absolute', inset: '8px',
          border: '1px solid rgba(214, 158, 46, 0.2)',
          borderRadius: '10px'
        }} />

        {/* 4 Corner Ornaments */}
        <CornerOrnament style={{ top: 0, left: 0 }} />
        <CornerOrnament style={{ top: 0, right: 0, transform: 'scaleX(-1)' }} />
        <CornerOrnament style={{ bottom: 0, left: 0, transform: 'scaleY(-1)' }} />
        <CornerOrnament style={{ bottom: 0, right: 0, transform: 'scale(-1, -1)' }} />

        {/* Top subtle chandeliers */}
        <DelicateChandelier left="20%" />
        <DelicateChandelier left="50%" />
        <DelicateChandelier left="80%" />
      </div>

    </div>
  );
}
