import React from 'react';
import Link from 'next/link';

interface RelatedServicesProps {
  heading: string;
  background?: 'white' | 'gray';
  items: { label: string; href: string }[];
}

export default function RelatedServices({ heading, background = 'white', items }: RelatedServicesProps) {
  const bgClass = background === 'gray' ? 'bg-gray' : 'bg-white';

  return (
    <section className={`related-services ${bgClass}`} style={{ padding: '60px 0' }}>
      <div className="container">
        <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>
          {heading}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          {items.map((item, index) => (
            <Link key={index} href={item.href} style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '30px',
              color: '#333',
              textDecoration: 'none',
              fontWeight: '500',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
