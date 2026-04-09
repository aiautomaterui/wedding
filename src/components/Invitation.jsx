import React from 'react';
import Ganesha from './Ganesha';
import { AnimatedCouple } from './AnimatedCharacters';
import ScrollDownIndicator from './ScrollDownIndicator';

export function InvitationIntro() {
  return (
    <section className="section text-center" style={{ position: 'relative' }}>
      <div className="max-w-4xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '0.5rem' }}><Ganesha /></div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Celebrate Our Love</h2>
        <AnimatedCouple scale={1} />
        <div className="glass-panel" style={{ padding: '1.5rem 1.2rem', marginTop: '1rem', maxWidth: '600px' }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--primary-dark)' }}>
            "A new journey begins with the love and blessings of our family and friends."
          </p>
        </div>
      </div>
      <ScrollDownIndicator />
    </section>
  );
}

export function InvitationDetails() {
  return (
    <section className="section text-center" style={{ position: 'relative' }}>
      <div className="max-w-4xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Join Us</h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-light)', maxWidth: '600px', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          We are thrilled to invite you to our wedding celebration. This website contains all the details for our multi-day festivities. We can't wait to share our joy!
        </p>

        <div style={{ borderTop: '1px solid rgba(197, 48, 48, 0.2)', borderBottom: '1px solid rgba(197, 48, 48, 0.2)', padding: '1.5rem 1rem', maxWidth: '500px' }}>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>The Main Event</h3>
          <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>Tuesday, May 05, 2026</p>
          <p style={{ fontSize: '1rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Wedding Reception & Blessing</p>
          
          <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
            <p><strong>Time:</strong> 07:00 PM onwards</p>
            <p><strong>Venue:</strong> Anand Marriage Garden, RAPTC, Indore</p>
          </div>
        </div>
      </div>
      <ScrollDownIndicator />
    </section>
  );
}
