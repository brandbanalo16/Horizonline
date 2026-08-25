import { CheckCircle } from 'lucide-react';

export const DocsSection = ({ s, isGray }: { s: any; isGray: boolean }) => {
  const content = s.content || (s.paragraphs ? s.paragraphs.map((p: string) => ({ type: 'paragraph', text: p })) : []);
  const paras = content.filter((b: any) => b.type === 'paragraph');
  if (paras.length === 0 && s.description) paras.push({ text: s.description });

  const rawItems: any[] = s.items || [];
  let listItems: string[] = [];
  
  // Check if items are plain strings
  if (rawItems.length > 0 && typeof rawItems[0] === 'string') {
    listItems = rawItems as string[];
  }
  // Or extract from content lists
  if (listItems.length === 0) {
    content.filter((b: any) => b.type === 'list').forEach((b: any) => {
      listItems.push(...(b.items || []));
    });
  }

  // Rich items with title+text
  const hasRichItems = rawItems.length > 0 && typeof rawItems[0] === 'object' && rawItems[0].text;
  
  if (!hasRichItems && listItems.length === 0 && paras.length === 0) return null;

  return (
    <section className={`sp-section-wrap ${isGray ? 'bg-gray' : 'bg-white'}`}>
      <div className="sp-container">
        <span className="sp-section-label">Documentation</span>
        <h2 className="sp-section-h2">{s.heading}</h2>
        {paras[0] && <p className="sp-section-p">{paras[0].text}</p>}
        {hasRichItems ? (
          <div className="sp-docs-grid">
            {rawItems.map((item: any, i: number) => (
              <div key={i} className="sp-doc-item" style={{ alignItems: 'flex-start' }}>
                <CheckCircle style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ display: 'block', marginBottom: 4 }}>{item.title || item.heading}</strong>
                  {item.text && <span style={{ color: 'var(--sp-muted)', fontSize: 14 }}>{item.text}</span>}
                </div>
              </div>
            ))}
          </div>
        ) : listItems.length > 0 ? (
          <div className="sp-docs-grid">
            {listItems.map((item: string, i: number) => (
              <div key={i} className="sp-doc-item">
                <CheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};
