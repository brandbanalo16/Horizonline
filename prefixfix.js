const fs = require('fs');

let megaMenu = fs.readFileSync('data/megaMenuData.ts', 'utf8');
const megaMenuRegex = /\{\s*\"title\"\s*:\s*\"([^\"]+)\"\s*,\s*\"path\"\s*:\s*\"([^\"]+)\"\s*\}/g;

let fixedCount = 0;
megaMenu = megaMenu.replace(megaMenuRegex, (match, title, currentPath) => {
  let correctPath = currentPath;
  if (!correctPath.startsWith('/services/')) {
    if (correctPath.startsWith('/')) correctPath = '/services' + correctPath;
    else correctPath = '/services/' + correctPath;
  }
  // remove trailing slash
  if (correctPath.endsWith('/')) correctPath = correctPath.slice(0, -1);

  if (currentPath !== correctPath) {
    fixedCount++;
    console.log('Updating mega menu: ' + title + ' (' + currentPath + ' -> ' + correctPath + ')');
    return '{' +
        '\n        "title": "' + title + '",' +
        '\n        "path": "' + correctPath + '"' +
        '\n      }';
  }
  return match;
});

if (fixedCount > 0) {
  fs.writeFileSync('data/megaMenuData.ts', megaMenu);
  console.log('Fixed ' + fixedCount + ' links in megaMenuData.ts to ensure /services/ prefix');
}
