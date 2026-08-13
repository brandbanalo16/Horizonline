const fs = require('fs');
const path = require('path');

const dataFile = 'data/newServicesData.json';
const imageDir = 'public/img/service/main-services';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const slugImageOverrides = {
  'dewa/utilities': 'dewa-utilities',
  'sewa/utilities': 'sewa-utilities',
  'etihad-water-and-electricity/utilities': 'ewes-utilities',
  'dubai-municipality/municipality': 'dubai-municipality-2',
  'sharjah-municipality/municipality': 'sharjah-municipality-2',
};

function getImageBaseName(slug) {
  if (slugImageOverrides[slug]) {
    return slugImageOverrides[slug];
  }
  const parts = slug.split('/');
  return parts[parts.length - 1];
}

function getMatchingImage(slug) {
  const slugBase = getImageBaseName(slug);
  const exts = ['.webp', '.png', '.jpg', '.jpeg'];
  for (const ext of exts) {
    if (fs.existsSync(path.join(imageDir, slugBase + ext))) {
      return `/img/service/main-services/${slugBase}${ext}`;
    }
  }
  for (const ext of exts) {
    if (fs.existsSync(path.join(imageDir, slugBase.toUpperCase() + ext))) {
      return `/img/service/main-services/${slugBase.toUpperCase()}${ext}`;
    }
  }
  return null;
}

function buildImageObject(src, alt) {
  return {
    src,
    width: 968,
    height: 862,
    alt: alt || 'Service',
    loading: 'lazy',
  };
}

let sliderUpdates = 0;
let subServiceUpdates = 0;

if (data.main_services) {
  for (const service of data.main_services) {
    const mainImg = getMatchingImage(service.slug);
    if (mainImg) {
      service.image = mainImg;
    }

    if (service.our_services_slider?.cards) {
      for (const card of service.our_services_slider.cards) {
        const cardImg = getMatchingImage(card.slug);
        if (cardImg) {
          card.image = cardImg;
          sliderUpdates++;
        }
      }
    }
  }
}

if (data.sub_services) {
  for (const service of data.sub_services) {
    const img = getMatchingImage(service.slug);
    if (!img) continue;

    if (!service.our_company_section) {
      service.our_company_section = {};
    }

    const alt = service.sub_category || service.seo?.h1_tag || 'Service';
    service.our_company_section.image = buildImageObject(img, alt);
    subServiceUpdates++;
  }
}

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');
console.log(`Updated ${sliderUpdates} slider card images and ${subServiceUpdates} sub-service page images.`);
