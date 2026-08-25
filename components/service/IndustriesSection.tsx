import { MapPin } from 'lucide-react';
import { ICONS } from './Block';

export const IndustriesSection = ({ s, isGray, isDark = false }: { s: any; isGray: boolean; isDark?: boolean }) => {
  const content = s.content || (s.paragraphs ? s.paragraphs.map((p: string) => ({ type: 'paragraph', text: p })) : []);
  const listItems = content.filter((b: any) => b.type === 'list').flatMap((b: any) => b.items || []);

  let items = s.subsections?.length > 0 ? s.subsections : (s.items || []);
  if (items.length === 0 && listItems.length > 0) {
    items = listItems.map((i: string) => {
      const [name, desc] = i.includes(':') ? i.split(':') : [i, ''];
      return { heading: name.trim(), content: desc ? [{ type: 'paragraph', text: desc.trim() }] : [] };
    });
  }
  if (items.length === 0) return null;

  return (
    <section className={`sp-section-wrap ${isDark ? 'bg-dark' : (isGray ? 'bg-gray' : 'bg-white')}`}>
      <div className="sp-container">
        {!isDark && <span className="sp-section-label">Who We Serve</span>}
        <h2 className="sp-section-h2" style={{ textAlign: 'center' }}>{s.heading}</h2>
        {content.find((b: any) => b.type === 'paragraph') && (
          <p className="sp-section-p" style={{ textAlign: 'center' }}>{content.find((b: any) => b.type === 'paragraph').text}</p>
        )}
        <div className="sp-industry-grid">
          {items.slice(0, 8).map((item: any, i: number) => {
            const title = typeof item === 'string' ? item : (item.heading || item.title);
            return (
              <div key={i} className="sp-industry-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="sp-industry-icon">{isDark ? <MapPin /> : ICONS[i % ICONS.length]}</div>
                <h3 className="sp-industry-title" style={{ color: isDark ? '#fff' : '' }}>{title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
