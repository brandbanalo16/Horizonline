import { Block } from './Block';

export const IntroSection = ({ s, isGray, imgSrc }: { s: any; isGray: boolean; imgSrc?: string }) => {
  const content = s.content || (s.paragraphs ? s.paragraphs.map((p: string) => ({ type: 'paragraph', text: p })) : []);
  if (content.length === 0 && !s.subsections?.length) return null;
  return (
    <section className={`sp-section-wrap ${isGray ? 'bg-gray' : 'bg-white'}`}>
      <div className="sp-container">
        <div className="sp-about-grid">
          <div>
            <span className="sp-section-label">About Our Service</span>
            <h2 className="sp-section-h2">{s.heading}</h2>
            {imgSrc && (
              <div style={{ marginTop: 32, borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--sp-shadow-md)' }}>
                <img src={imgSrc} alt={s.heading} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            )}
          </div>
          <div style={{ paddingTop: 8 }}>
            {content.map((b: any, i: number) => <Block key={i} b={b} />)}
            {s.subsections?.length > 0 && (
              <div style={{ marginTop: 32, padding: '24px 28px', background: 'var(--sp-bg-page)', borderRadius: 12, border: '1px solid var(--sp-border)' }}>
                {s.subsections.map((sub: any, i: number) => (
                  <p key={i} className="sp-section-p" style={{ marginBottom: i === s.subsections.length - 1 ? 0 : 16 }}>
                    <strong style={{ color: 'var(--sp-dark)' }}>{sub.heading || sub.title}:</strong> {sub.content?.[0]?.text || sub.text || ''}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
