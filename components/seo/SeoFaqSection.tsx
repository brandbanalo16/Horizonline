import React from 'react';
import SeoFaqClient from './SeoFaqClient';

interface SeoFaqSectionProps {
  heading: string;
  background?: 'white' | 'gray';
  faqs: { question: string; answer: string }[];
}

export default function SeoFaqSection({ heading, background = 'white', faqs }: SeoFaqSectionProps) {
  const bgClass = background === 'gray' ? 'bg-gray' : 'bg-white';
  
  return (
    <section className={`faq-section ${bgClass}`} style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>{heading}</h2>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SeoFaqClient faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
