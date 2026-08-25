const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'data', 'service-data');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
const rawServices = [];

for (const file of files) {
  try {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const data = JSON.parse(content);
    if (Array.isArray(data)) rawServices.push(...data);
    else if (data && data.services) rawServices.push(...data.services);
  } catch(e) {
    console.error(`Error parsing ${file}`);
  }
}

const extractSlug = (item) => {
  let parsed = item.metadata?.['URL Slug'];
  if (parsed) {
    parsed = parsed.replace(/[\`\/]/g, '').trim();
    if (parsed) return parsed;
  }
  const kw = item.metadata?.['Primary SEO Keyword'];
  if (kw) return kw.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/-uae$/, '');
  return item.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/-uae$/, '');
};

const allServices = rawServices.filter((item, index, self) => 
  index === self.findIndex((t) => extractSlug(t) === extractSlug(item))
);

const grouped = {};
allServices.forEach(s => {
  let cat = s.metadata?.['Main Category'] || 'Other Services';
  if (cat.includes('–')) {
    cat = cat.split('–')[1].trim();
  }
  if (!grouped[cat]) grouped[cat] = [];
  grouped[cat].push({
    title: s.metadata?.['Service Name'] || s.title,
    path: '/services/' + extractSlug(s)
  });
});

const generateId = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const megaMenuCategories = Object.keys(grouped).map(catName => {
  return {
    id: generateId(catName),
    title: catName,
    path: '/services/' + generateId(catName),
    services: grouped[catName]
  };
});

const tsContent = `export interface MegaMenuService {
  title: string;
  path: string;
}

export interface MegaMenuCategory {
  id: string;
  title: string;
  path: string;
  services: MegaMenuService[];
}

export interface MegaMenuGroup {
  groupLabel: string;
  categories: MegaMenuCategory[];
}

const megaMenuData: MegaMenuCategory[] = ${JSON.stringify(megaMenuCategories, null, 2)};

export default megaMenuData;
`;

fs.writeFileSync('./data/megaMenuData.ts', tsContent, 'utf8');
console.log('Successfully generated data/megaMenuData.ts with ' + megaMenuCategories.length + ' categories and ' + allServices.length + ' total services.');
