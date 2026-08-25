import { ICONS } from './Block';

export const CardsSection = ({ s, isGray, label, showNumber = false }: { s: any; isGray: boolean; label: string; showNumber?: boolean }) => {
  const lists = s.content?.filter((b: any) => b.type === 'list').flatMap((b: any) => b.items?.map((i: string) => ({ heading: i, content: [] })) || []) || [];
  let items = s.subsections?.length > 0 ? s.subsections : (s.items?.length > 0 ? s.items : lists);
  if (items.length === 0 && s.items) {
    items = s.items.map((it: any) => ({ heading: it.title || it.heading, content: [{ text: it.text || it.description }] }));
  }
  if (items.length === 0) return null;

  const content = s.content || (s.paragraphs ? s.paragraphs.map((p: string) => ({ type: 'paragraph', text: p })) : []);
  return (
    <section className={`sp-section-wrap ${isGray ? 'bg-gray' : 'bg-white'}`}>
      <div className="sp-container" style={{ textAlign: 'center' }}>
        <span className="sp-section-label">{label}</span>
        <h2 className="sp-section-h2">{s.heading}</h2>
        {content.find((b: any) => b.type === 'paragraph') && (
          <p className="sp-section-p" style={{ maxWidth: 700, margin: '0 auto' }}>{content.find((b: any) => b.type === 'paragraph').text}</p>
        )}
        <div className="sp-cards-grid">
          {items.slice(0, 8).map((item: any, i: number) => {
            const title = typeof item === 'string' ? item : (item.heading || item.title);
            const desc = item.content?.[0]?.text || item.text || item.description || '';
            return (
              <div key={i} className="sp-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="sp-card-icon">{ICONS[i % ICONS.length]}</div>
                {showNumber && <div className="sp-card-num">{String(i + 1).padStart(2, '0')}</div>}
                <h3 className="sp-card-title">{title}</h3>
                {desc && <p className="sp-card-text">{desc}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
