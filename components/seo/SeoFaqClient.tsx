'use client';

import { useState } from 'react';

export default function SeoFaqClient({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="accordion-wrapper">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`accordion-item ${isOpen ? 'active' : ''}`} style={{ marginBottom: '16px', borderBottom: '1px solid #ddd', paddingBottom: '16px' }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '16px 0', fontSize: '18px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              aria-expanded={isOpen}
            >
              {faq.question}
              <span style={{ fontSize: '24px', transition: 'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 0 16px 0', fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
