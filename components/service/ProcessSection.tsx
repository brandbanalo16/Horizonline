"use client";

import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export const ProcessSection = ({ s, isGray }: { s: any; isGray: boolean }) => {
  const [activeStep, setActiveStep] = useState(0);

  const lists = s.content?.filter((b: any) => b.type === 'list').flatMap((b: any) => b.items?.map((i: string) => ({ heading: i, content: [] })) || []) || [];
  const steps = s.subsections?.length > 0 ? s.subsections : (s.steps?.length > 0 ? s.steps : (s.items?.length > 0 ? s.items : lists));
  if (steps.length === 0) return null;

  const content = s.content || (s.paragraphs ? s.paragraphs.map((p: string) => ({ type: 'paragraph', text: p })) : []);
  
  const activeData = steps[activeStep] || steps[0];
  const activeTitle = typeof activeData === 'string' ? activeData : (activeData.heading || activeData.title || `Step ${activeStep + 1}`);
  const activeDesc = typeof activeData === 'string' ? '' : (activeData.content?.[0]?.text || activeData.text || activeData.description || '');

  return (
    <section className={`sp-section-wrap ${isGray ? 'bg-gray' : 'bg-white'}`}>
      <div className="sp-container" style={{ textAlign: 'center' }}>
        <span className="sp-section-label">HOW IT WORKS</span>
        <h2 className="sp-section-h2" style={{ maxWidth: 800, margin: '0 auto 16px' }}>{s.heading}</h2>
        {content.find((b: any) => b.type === 'paragraph') && (
          <p className="sp-section-p" style={{ margin: '0 auto 48px' }}>{content.find((b: any) => b.type === 'paragraph').text}</p>
        )}
        
        <div className={`sp-process-wrap ${steps.length > 5 ? 'sp-process-wrap-large' : ''}`}>
          {/* Left Tabs */}
          <div className="sp-process-tabs">
            {steps.map((step: any, i: number) => {
              const title = typeof step === 'string' ? step : (step.heading || step.title || `Step ${i + 1}`);
              const isActive = i === activeStep;
              return (
                <button 
                  key={i} 
                  className={`sp-process-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(i)}
                  onMouseEnter={() => setActiveStep(i)}
                >
                  <div className="sp-process-tab-icon">
                    {isActive ? <Sparkles size={16} /> : <Check size={16} />}
                  </div>
                  <div className="sp-process-tab-info">
                    <span className="sp-process-tab-step">STEP {String(i + 1).padStart(2, '0')}</span>
                    <span className="sp-process-tab-title">{title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Content Pane */}
          <div className="sp-process-content" style={{ textAlign: 'left' }}>
            <div className="sp-process-content-header">
              <div className="sp-process-content-icon">
                <Sparkles />
              </div>
              <div>
                <span className="sp-process-tab-step" style={{ color: '#ef4444' }}>STEP {String(activeStep + 1).padStart(2, '0')}</span>
                <h3 className="sp-process-content-title">{activeTitle}</h3>
              </div>
            </div>
            {activeDesc && (
              <p className="sp-process-content-text">{activeDesc}</p>
            )}
            
            <div style={{ marginTop: 32 }}>
              <span className="sp-section-label" style={{ fontSize: 10 }}>WHAT YOU'LL RECEIVE</span>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500 }}><Check size={14} color="#10b981" /> End-to-end processing</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500 }}><Check size={14} color="#10b981" /> Full documentation support</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500 }}><Check size={14} color="#10b981" /> Expert advisor access</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
