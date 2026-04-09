import React from 'react';
import { Calendar } from 'lucide-react';
import { AnimatedLotus, AnimatedDiya, RotatingMandala } from './Graphics';
import { AnimatedHaldi, AnimatedBaraat } from './AnimatedCharacters';
import ScrollDownIndicator from './ScrollDownIndicator';

// Shared event rendering wrapper to natively fit within single viewport layout
const EventSlide = ({ date, title, description, animationComp, subEvents }) => (
  <section className="section" style={{ position: 'relative' }}>
     <RotatingMandala size={400} opacity={0.03} style={{ position: 'absolute', top: '-10%', right: '-10%' }} />
     <div className="text-center" style={{ width: '100%', maxWidth: '600px', zIndex: 2 }}>
       
       <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
          <Calendar size={18} />
          {date}
       </span>

       <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.8rem' }}>
          {animationComp}
       </div>

       <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{title}</h2>
       <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--secondary)', margin: '0 auto 1rem' }}></div>
       
       <p style={{ color: 'var(--text-light)', marginBottom: subEvents ? '1rem' : '0', fontSize: '1rem', lineHeight: 1.4 }}>{description}</p>
       
       {subEvents && (
         <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left', backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px' }}>
           {subEvents.map((sub, sidx) => (
             <div key={sidx} style={{ borderLeft: '3px solid var(--secondary)', paddingLeft: '1rem' }}>
               <div style={{ fontWeight: 'bold', color: 'var(--primary)', fontSize: '0.9rem' }}>{sub.name}</div>
               <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                 <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>{sub.time}</span> &bull; {sub.location}
               </div>
             </div>
           ))}
         </div>
       )}
     </div>
     <ScrollDownIndicator />
  </section>
);
export const Itinerary4 = () => <EventSlide date="May 05, 2026" title="The Big Day" description="The main event culminates with the Teekafaldan, Baraat, and Wedding Reception." animationComp={<AnimatedBaraat scale={0.8} />} subEvents={[
    { time: '11:00 AM', name: 'Teekafaldan', location: 'RAPTC Police Garden' },
    { time: 'Afternoon', name: 'The Baraat', location: 'Grand procession to venue' },
    { time: '07:00 PM', name: 'Wedding Reception', location: 'Anand Marriage Garden' }
]} />;
