
const fs = require("fs");

const dataFile = "data/services.json";
let services = JSON.parse(fs.readFileSync(dataFile, "utf8"));

const iconMap = {
  "Business Setup": "business-setup.png",
  "Corporate Services": "corporate-services.png",
  "Free Zons": "free-zone.png",
  "Free Zone": "free-zone.png",
  "Trademark & IP": "trademarks&i.png",
  "Legal Services": "legal-service.png",
  "Business Support": "business-support.png",
  "Visa Assistance": "visa-service.png",
  "Ministry of Education": "ministry-of-education.png",
  "MOHAP": "MOHAP.png",
  "EHS": "EHS.png",
  "Police": "police.png",
  "Tax & Compliance": "tax&compliance.png",
  "FTA": "FTA.png",
  "Banking": "banking-service.png",
  "DEWA": "DEWA.png",
  "SEWA": "SEWA.png",
  "Etihad Water and Electricity": "etihad-water-and-electricity.png",
  "Dubai Municipality": "dubai-municipality.png",
  "Sharjah Municipality": "sharjah-municipality.png",
  "RTA": "RTA.png",
  "HR Services": "hr-services.png",
  "Office Solutions": "office-solution.png",
  "Digital Services": "digital-service.png"
};

services.forEach(service => {
  if (service.title === "Free Zons") {
    service.title = "Free Zone";
    service.slug = "free-zone";
  }

  const filename = iconMap[service.title];
  if (filename) {
    service.icon = "<img src=\"/img/icons/services/" + filename + "\" alt=\"" + service.title + "\" width=\"40\" height=\"40\" />";
  }

  if (service.content) {
    service.content = service.content.replace(/Free Zons/g, "Free Zone");
  }
});

fs.writeFileSync(dataFile, JSON.stringify(services, null, 4));
console.log("Updated services.json");

