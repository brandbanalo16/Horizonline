const fs = require('fs');

const dataFile = 'data/newServicesData.json';
let dataStr = fs.readFileSync(dataFile, 'utf8');

// Replace "slug": "free-zons" with "slug": "free-zone"
dataStr = dataStr.replace(/"slug":\s*"free-zons"/g, '"slug": "free-zone"');

let data = JSON.parse(dataStr);

// Helper to get matching image
function getMatchingImage(slugBase) {
    const exts = ['.webp', '.png', '.jpg', '.jpeg'];
    for (const ext of exts) {
        if (fs.existsSync('public/img/service/main-services/' + slugBase + ext)) {
            return `/img/service/main-services/${slugBase}${ext}`;
        }
    }
    // Check uppercase 
    for (const ext of exts) {
        if (fs.existsSync('public/img/service/main-services/' + slugBase.toUpperCase() + ext)) {
            return `/img/service/main-services/${slugBase.toUpperCase()}${ext}`;
        }
    }
    return null;
}

if (data.main_services) {
    for (const service of data.main_services) {
        const slug = service.slug;
        const img = getMatchingImage(slug);
        if (img) {
            service.image = img;
        }

        if (service.our_services_slider && service.our_services_slider.cards) {
            for (const card of service.our_services_slider.cards) {
                const parts = card.slug.split('/');
                const subSlug = parts[parts.length - 1];
                const cardImg = getMatchingImage(subSlug);
                if (cardImg) {
                    card.image = cardImg;
                }
            }
        }
    }
}

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');
console.log('Fixed free-zone slug and updated images.');
