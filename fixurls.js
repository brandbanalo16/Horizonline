const fs = require('fs');
const path = require('path');

const subservice = JSON.parse(fs.readFileSync('data/subservice.json', 'utf8'));
const validSlugs = {}; 
subservice.services.forEach(s => {
  if (s.name && s.url_slug) {
    validSlugs[s.name.trim().toLowerCase()] = s.url_slug.startsWith('/') ? s.url_slug : '/' + s.url_slug;
  }
});

const dir = 'data/service-data';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  try {
    const data = JSON.parse(content);
    if (Array.isArray(data)) {
      data.forEach(item => {
        let title = (item.title || item.metadata?.['Service Name'] || item.name || '').trim().toLowerCase();
        let currentSlug = item.metadata?.['URL Slug'] || item.slug || '';
        
        if (currentSlug && (currentSlug.includes(' ') || currentSlug.match(/[A-Z]/))) {
           const fixed = '/' + currentSlug.replace(/\//g, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') + (currentSlug.toLowerCase().includes('uae') ? '' : '-uae');
           item.metadata['URL Slug'] = fixed;
           currentSlug = fixed;
           changed = true;
        }
        
        if (title && currentSlug) {
          const formattedSlug = currentSlug.startsWith('/') ? currentSlug : '/services/' + currentSlug;
          validSlugs[title] = formattedSlug.replace(/\/\/+/g, '/');
        }
      });
      if (changed) {
         fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
         console.log('Fixed URLs in', file);
      }
    }
  } catch(e) {}
}

let megaMenu = fs.readFileSync('data/megaMenuData.ts', 'utf8');
const megaMenuRegex = /\{\s*\"title\"\s*:\s*\"([^\"]+)\"\s*,\s*\"path\"\s*:\s*\"([^\"]+)\"\s*\}/g;

let fixedCount = 0;
megaMenu = megaMenu.replace(megaMenuRegex, (match, title, currentPath) => {
  const normalizedTitle = title.trim().toLowerCase();
  let correctPath = validSlugs[normalizedTitle];
  
  if (!correctPath) {
    const fuzzy = Object.keys(validSlugs).find(k => k.includes(normalizedTitle) || normalizedTitle.includes(k));
    if (fuzzy) correctPath = validSlugs[fuzzy];
  }

  if (correctPath && currentPath !== correctPath) {
    fixedCount++;
    console.log('Updating mega menu: ' + title + ' (' + currentPath + ' -> ' + correctPath + ')');
    return '{' +
        '\n        "title": "' + title + '",' +
        '\n        "path": "' + correctPath + '"' +
        '\n      }';
  }
  
  if (!correctPath && currentPath.includes(' ')) {
     const fixed = '/services/' + currentPath.replace('/services/', '').replace(/\//g, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-uae';
     console.log('Updating mega menu (fallback): ' + title + ' (' + currentPath + ' -> ' + fixed + ')');
     fixedCount++;
     return '{' +
        '\n        "title": "' + title + '",' +
        '\n        "path": "' + fixed + '"' +
        '\n      }';
  }
  
  return match;
});

if (fixedCount > 0) {
  fs.writeFileSync('data/megaMenuData.ts', megaMenu);
  console.log('Fixed ' + fixedCount + ' links in megaMenuData.ts');
} else {
  console.log('No broken links found in megaMenuData.ts');
}
