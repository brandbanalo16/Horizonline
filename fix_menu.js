const fs = require('fs');
const newServicesData = require('./data/newServicesData.json');

// Read main menu list as string
let content = fs.readFileSync('./data/mainMenuList.tsx', 'utf8');

// Build a map of sub_category -> slug
const serviceMap = new Map();
for (const sub of newServicesData.sub_services) {
    // lowercase alphanumeric only for matching if needed, but exact is better
    serviceMap.set(sub.sub_category.toLowerCase(), sub.slug);
}

// Replace paths
content = content.replace(/"title": "([^"]+)",\s*"path": "\/services\/([^"]+)"/g, (match, title, oldPath) => {
    // Don't replace main categories (they might just be one level deep)
    const lowerTitle = title.toLowerCase();
    if (serviceMap.has(lowerTitle)) {
        return '"title": "' + title + '",\n                                "path": "/services/' + serviceMap.get(lowerTitle) + '"';
    }
    return match;
});

fs.writeFileSync('./data/mainMenuList.tsx', content, 'utf8');
