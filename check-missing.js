const fs = require('fs');

const extractSlug = (item) => {
  const seo = item.sections?.find(s => s.heading === 'SEO Metadata');
  const raw = seo?.content?.[0]?.items?.find(i => i.startsWith('URL Slug:')) ?? '';
  const parsed = raw.split(':')[1]?.trim().replace(/[\`\/]/g, '');
  if (parsed) return parsed;

  const kw = item.metadata?.['Primary SEO Keyword'];
  if (kw) return kw.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/-uae$/, '');
  return item.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/-uae$/, '');
};

const findService = (slugPath, allServices) => {
  const target = slugPath.split('/').pop() || slugPath;

  return allServices.find(item => {
    const r = extractSlug(item);
    const baseSlug = r.replace(/-uae$/, '');
    const baseTarget = target.replace(/-uae$/, '');

    return baseSlug === baseTarget || r === target || r === `${target}-uae` || baseSlug.includes(baseTarget) || baseTarget.includes(baseSlug);
  });
};

const data = JSON.parse(fs.readFileSync('data/new-sub-service.json', 'utf8'));
const megaMenuFile = fs.readFileSync('data/megaMenuData.ts', 'utf8');
const paths = [...megaMenuFile.matchAll(/path:\s*"\/services\/([^"]+)"/g)].map(m => m[1]);

const missing = [];
for (const p of paths) {
  const s = findService(p, data);
  if (!s) {
    missing.push(p);
  }
}

console.log('Total paths in mega menu:', paths.length);
console.log('Total paths missing in JSON:', missing.length);
console.log('Missing paths:', missing);
