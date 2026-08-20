export interface MegaMenuService {
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

const megaMenuData: MegaMenuCategory[] = [
  // ── BUSINESS SETUP ────────────────────────────────────────────────────────
  {
    id: "business-setup",
    title: "Business Setup",
    path: "/services/business-setup",
    services: [
      { title: "Mainland Company Formation", path: "/services/mainland-company-formation-uae" },
      { title: "Free Zone Company Formation", path: "/services/free-zone-company-formation-uae" },
      { title: "Offshore Company Formation", path: "/services/offshore-company-formation-uae" },
      { title: "Branch Office Setup", path: "/services/branch-office-setup-uae" },
      { title: "Professional License", path: "/services/professional-license-uae" },
      { title: "Commercial License", path: "/services/commercial-license-uae" },
      { title: "Industrial License", path: "/services/industrial-license-uae" },
      { title: "Trade License Renewal", path: "/services/trade-license-renewal-uae" },
    ],
  },

  // ── FREE ZONES ────────────────────────────────────────────────────────────
  {
    id: "free-zones",
    title: "Free Zones",
    path: "/services/free-zone",
    services: [
      { title: "IFZA", path: "/services/ifza-fujairah" },
      { title: "SPC Free Zone", path: "/services/spc-free-zone-sharjah" },
      { title: "SHAMS", path: "/services/shams-sharjah" },
      { title: "RAKEZ", path: "/services/rakez-ras-al-khaimah" },
      { title: "SRTIP", path: "/services/srtip-sharjah" },
      { title: "Meydan Free Zone", path: "/services/meydan-free-zone-dubai" },
      { title: "DMCC", path: "/services/dmcc-dubai" },
      { title: "JAFZA", path: "/services/jafza-dubai" },
      { title: "Dubai South", path: "/services/dubai-south-dubai" },
      { title: "Fujairah Creative City", path: "/services/fujairah-creative-city-fujairah" },
    ],
  },

  // ── CORPORATE SERVICES ────────────────────────────────────────────────────
  {
    id: "corporate-services",
    title: "Corporate Services",
    path: "/services/corporate-services",
    services: [
      { title: "Business Consultation", path: "/services/business-consultation-uae" },
      { title: "Business Plan", path: "/services/business-plan-uae" },
      { title: "PRO Services", path: "/services/pro-services-uae" },
      { title: "Document Clearing", path: "/services/document-clearing-uae" },
      { title: "Company Liquidation", path: "/services/company-liquidation-uae" },
      { title: "Corporate Restructuring", path: "/services/corporate-restructuring-uae" },
    ],
  },

  // ── VISA SERVICES ─────────────────────────────────────────────────────────
  {
    id: "visa-services",
    title: "Visa Services",
    path: "/services/visa-services",
    services: [
      { title: "Investor Visa", path: "/services/investor-visa-uae" },
      { title: "Employment Visa", path: "/services/employment-visa-uae" },
      { title: "Family Visa", path: "/services/family-visa-uae" },
      { title: "Golden Visa", path: "/services/golden-visa-uae" },
      { title: "Emirates ID", path: "/services/emirates-id-uae" },
      { title: "Medical Test", path: "/services/medical-test-uae" },
    ],
  },

  // ── TAX & COMPLIANCE ──────────────────────────────────────────────────────
  {
    id: "tax-compliance",
    title: "Tax & Compliance",
    path: "/services/tax-and-compliance",
    services: [
      { title: "VAT Registration", path: "/services/vat-registration-uae" },
      { title: "VAT Return Filing", path: "/services/vat-return-filing-uae" },
      { title: "Corporate Tax Registration", path: "/services/corporate-tax-registration-uae" },
      { title: "Corporate Tax Filing", path: "/services/corporate-tax-filing-uae" },
      { title: "Accounting & Bookkeeping", path: "/services/accounting-bookkeeping-uae" },
      { title: "Audit Support", path: "/services/audit-support-uae" },
    ],
  },

  // ── BANKING ───────────────────────────────────────────────────────────────
  {
    id: "banking",
    title: "Banking",
    path: "/services/banking",
    services: [
      { title: "Corporate Bank Account", path: "/services/corporate-bank-account-uae" },
    ],
  },

  // ── OFFICE SOLUTIONS ──────────────────────────────────────────────────────
  {
    id: "office-solutions",
    title: "Office Solutions",
    path: "/services/office-solutions",
    services: [
      { title: "Flexi Desk", path: "/services/flexi-desk-uae" },
      { title: "Virtual Office", path: "/services/virtual-office-uae" },
      { title: "Private Office", path: "/services/private-office-uae" },
    ],
  },

  // ── LEGAL SERVICES ────────────────────────────────────────────────────────
  {
    id: "legal-services",
    title: "Legal Services",
    path: "/services/legal-services",
    services: [
      { title: "Legal Documentation", path: "/services/legal-documentation-uae" },
      { title: "MOA Amendment", path: "/services/moa-amendment-uae" },
    ],
  },

  // ── HR SERVICES ───────────────────────────────────────────────────────────
  {
    id: "hr-services",
    title: "HR Services",
    path: "/services/hr-services",
    services: [
      { title: "Payroll Management", path: "/services/payroll-management-uae" },
      { title: "Recruitment Support", path: "/services/recruitment-support-uae" },
    ],
  },

  // ── DIGITAL SERVICES ──────────────────────────────────────────────────────
  {
    id: "digital-services",
    title: "Digital Services",
    path: "/services/digital-services",
    services: [
      { title: "Website Development", path: "/services/website-development-uae" },
      { title: "Digital Marketing", path: "/services/digital-marketing-uae" },
    ],
  },

  // ── BUSINESS SUPPORT ──────────────────────────────────────────────────────
  {
    id: "business-support",
    title: "Business Support",
    path: "/services/business-support",
    services: [
      { title: "Business License Amendment", path: "/services/business-license-amendment-uae" },
      { title: "Business License Cancellation", path: "/services/business-license-cancellation-uae" },
    ],
  },

  // ── MINISTRY OF EDUCATION ─────────────────────────────────────────────────
  {
    id: "ministry-of-education",
    title: "Ministry of Education",
    path: "/services/ministry-of-education",
    services: [
      { title: "Student Services", path: "/services/student-services-uae" },
      { title: "Academic Services", path: "/services/academic-services-uae" },
    ],
  },

  // ── MOHAP ─────────────────────────────────────────────────────────────────
  {
    id: "mohap",
    title: "MOHAP",
    path: "/services/mohap",
    services: [
      { title: "Health", path: "/services/health-uae" },
    ],
  },

  // ── EHS ───────────────────────────────────────────────────────────────────
  {
    id: "ehs",
    title: "EHS",
    path: "/services/ehs",
    services: [
      { title: "Patients", path: "/services/patients-ajman" },
    ],
  },

  // ── DUBAI MUNICIPALITY ────────────────────────────────────────────────────
  {
    id: "dubai-municipality",
    title: "Dubai Municipality",
    path: "/services/dubai-municipality-services-dubai",
    services: [
      { title: "Municipality", path: "/services/sharjah-municipality/municipality" },
    ],
  },

  // ── SHARJAH MUNICIPALITY ──────────────────────────────────────────────────
  {
    id: "sharjah-municipality",
    title: "Sharjah Municipality",
    path: "/services/sharjah-municipality-services-sharjah",
    services: [
      { title: "Municipality", path: "/services/sharjah-municipality/municipality" },
    ],
  },

  // ── DEWA ──────────────────────────────────────────────────────────────────
  {
    id: "dewa",
    title: "DEWA",
    path: "/services/dewa-utility-connection-dubai",
    services: [
      { title: "Utilities", path: "/services/etihad-water-and-electricity/utilities" },
    ],
  },

  // ── SEWA ──────────────────────────────────────────────────────────────────
  {
    id: "sewa",
    title: "SEWA",
    path: "/services/sewa-account-activation-sharjah",
    services: [
      { title: "Electricity Connection", path: "/services/electricity-connection-sharjah" },
      { title: "Water Connection", path: "/services/water-connection-sharjah" },
      { title: "Gas Connection", path: "/services/gas-connection-sharjah" },
      { title: "New Account Opening", path: "/services/new-account-opening-sharjah" },
      { title: "Bill Payment", path: "/services/bill-payment-sharjah" },
      { title: "Final Bill", path: "/services/final-bill-sharjah" },
      { title: "Move In", path: "/services/move-in-sharjah" },
      { title: "Move Out", path: "/services/move-out-sharjah" },
      { title: "Meter Testing", path: "/services/meter-testing-sharjah" },
      { title: "High Bill Investigation", path: "/services/high-bill-investigation-sharjah" },
      { title: "Clearance Certificate", path: "/services/clearance-certificate-sharjah" },
      { title: "Complaint Registration", path: "/services/complaint-registration-sharjah" },
    ],
  },

  // ── ETIHAD WATER AND ELECTRICITY ─────────────────────────────────────────
  {
    id: "etihad-water-electricity",
    title: "Etihad Water & Electricity",
    path: "/services/etihad-water-and-electricity",
    services: [
      { title: "Utilities", path: "/services/etihad-water-and-electricity/utilities" },
    ],
  },

  // ── FTA ───────────────────────────────────────────────────────────────────
  {
    id: "fta",
    title: "FTA",
    path: "/services/fta",
    services: [
      { title: "Tax", path: "/services/tax-uae" },
    ],
  },

  // ── RTA ───────────────────────────────────────────────────────────────────
  {
    id: "rta",
    title: "RTA",
    path: "/services/rta",
    services: [
      { title: "Driving Licence Renewal", path: "/services/driving-licence-renewal-dubai" },
      { title: "Driving Licence Replacement", path: "/services/driving-licence-replacement-dubai" },
      { title: "Vehicle Registration", path: "/services/vehicle-registration-dubai" },
      { title: "Vehicle Renewal", path: "/services/vehicle-renewal-dubai" },
      { title: "Vehicle Transfer", path: "/services/vehicle-transfer-dubai" },
      { title: "Salik Account", path: "/services/salik-account-dubai" },
      { title: "Parking Permit", path: "/services/parking-permit-dubai" },
      { title: "Vehicle Export Certificate", path: "/services/vehicle-export-certificate-dubai" },
    ],
  },

  // ── POLICE ────────────────────────────────────────────────────────────────
  {
    id: "police",
    title: "Police",
    path: "/services/police",
    services: [
      { title: "Police Clearance Certificate", path: "/services/police-clearance-certificate-uae" },
      { title: "Good Conduct Certificate", path: "/services/good-conduct-certificate-uae" },
      { title: "Lost Passport Report", path: "/services/lost-passport-report-uae" },
      { title: "Lost Emirates ID Report", path: "/services/lost-emirates-id-report-uae" },
      { title: "Lost Mobile Report", path: "/services/lost-mobile-report-uae" },
      { title: "Traffic Fine Payment", path: "/services/traffic-fine-payment-uae" },
      { title: "Traffic Accident Report", path: "/services/traffic-accident-report-uae" },
      { title: "Vehicle Impound Release", path: "/services/vehicle-impound-release-uae" },
      { title: "Cybercrime Complaint", path: "/services/cybercrime-complaint-uae" },
      { title: "Criminal Complaint", path: "/services/criminal-complaint-uae" },
    ],
  },
];

export default megaMenuData;
