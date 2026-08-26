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
  {
    "id": "business-setup",
    "title": "Business Setup",
    "path": "/services/business-setup",
    "services": [
      {
        "title": "Mainland Company Formation",
        "path": "/services/mainland-company-formation-uae"
      },
      {
        "title": "Free Zone Company Formation",
        "path": "/services/free-zone-company-formation-uae"
      },
      {
        "title": "Offshore Company Formation",
        "path": "/services/offshore-company-formation-uae"
      },
      {
        "title": "Trade License",
        "path": "/services/trade-license-uae"
      },
      {
        "title": "Branch Office Setup",
        "path": "/services/branch-office-setup-uae"
      },
      {
        "title": "Company Registration Process",
        "path": "/services/company-registration-process-uae"
      }
    ]
  },
  {
    "id": "corporate-services",
    "title": "Corporate Services",
    "path": "/services/corporate-services",
    "services": [
      {
        "title": "Business Consultation",
        "path": "/services/business-consultation-uae"
      },
      {
        "title": "Business Plan",
        "path": "/services/business-plan-services-uae"
      },
      {
        "title": "PRO Services",
        "path": "/services/pro-services-uae"
      },
      {
        "title": "Document Clearing",
        "path": "/services/document-clearing-services-uae"
      },
      {
        "title": "Company Liquidation",
        "path": "/services/company-liquidation-uae"
      }
    ]
  },
  {
    "id": "trademark-ip",
    "title": "Trademark & IP",
    "path": "/services/trademark-ip",
    "services": [
      {
        "title": "Trademark Registration",
        "path": "/services/trademark-registration-uae"
      },
      {
        "title": "Copyright Registration",
        "path": "/services/Copyright Registration"
      }
    ]
  },
  {
    "id": "visa-immigration",
    "title": "Visa and Immigration",
    "path": "/services/visa-immigration",
    "services": [
      {
        "title": "Golden Visa",
        "path": "/services/golden-visa-uae"
      },
      {
        "title": "Tourist Visa",
        "path": "/services/tourist-visa-uae"
      },
      {
        "title": "Mainland Visas",
        "path": "/services/mainland-visa-uae"
      },
      {
        "title": "Free Zone Visas",
        "path": "/services/free-zone-visa-uae"
      },
      {
        "title": "Sponsorship",
        "path": "/services/family-sponsorship-visa-uae"
      },
      {
        "title": "Second Citizenship & Residency",
        "path": "/services/second-citizenship-residency-uae"
      },
      {
        "title": "Visa Cancellation",
        "path": "/services/visa-cancellation-uae"
      },
      {
        "title": "Student Visa",
        "path": "/services/student-visa-uae"
      },
      {
        "title": "Medical Visa",
        "path": "/services/medical-visa-uae"
      }
    ]
  },
  {
    "id": "accounting-finance-tax",
    "title": "Accounting / Finance / Tax",
    "path": "/services/accounting-finance-tax",
    "services": [
      {
        "title": "VAT Return Filing",
        "path": "/services/vat-return-filing-uae"
      },
      {
        "title": "Corporate Tax Registration",
        "path": "/services/corporate-tax-registration-uae"
      },
      {
        "title": "Corporate Tax Filing",
        "path": "/services/corporate-tax-filing-uae"
      },
      {
        "title": "Accounting & Bookkeeping",
        "path": "/services/accounting-bookkeeping-services-uae"
      },
      {
        "title": "Audit Support",
        "path": "/services/audit-support-services-uae"
      },
      {
        "title": "ICV Certificate",
        "path": "/services/icv-certificate-uae"
      }
    ]
  },
  {
    "id": "legal-services",
    "title": "Legal Services",
    "path": "/services/legal-services",
    "services": [
      {
        "title": "Legal Documentation",
        "path": "/services/legal-documentation-services-uae"
      },
      {
        "title": "MOA Amendment",
        "path": "/services/moa-amendment-uae"
      },
      {
        "title": "Power of Attorney",
        "path": "/services/power-of-attorney-uae"
      },
      {
        "title": "Notary",
        "path": "/services/notary-services-uae"
      },
      {
        "title": "Intellectual Properties",
        "path": "/services/intellectual-property-legal-services-uae"
      },
      {
        "title": "Commercial Contract",
        "path": "/services/commercial-contract-services-uae"
      },
      {
        "title": "Legal Translation",
        "path": "/services/legal-translation-services-uae"
      },
      {
        "title": "Document Clearance",
        "path": "/services/document-clearance-services-uae"
      },
      {
        "title": "Local Sponsor",
        "path": "/services/local-sponsor-services-uae"
      },
      {
        "title": "Legal License",
        "path": "/services/legal-license-services-uae"
      }
    ]
  },
  {
    "id": "public-services",
    "title": "Public Services",
    "path": "/services/public-services",
    "services": [
      {
        "title": "Police & Legal Services",
        "path": "/services/police-legal-services-uae"
      },
      {
        "title": "Traffic & Driving Services",
        "path": "/services/traffic-driving-services-uae"
      },
      {
        "title": "Vehicle Services",
        "path": "/services/vehicle-services-uae"
      },
      {
        "title": "Utilities & Billing Services",
        "path": "/services/utilities-billing-services-uae"
      },
      {
        "title": "Accounts & Payments Services",
        "path": "/services/accounts-payments-services-uae"
      },
      {
        "title": "Permits & Complaints Services",
        "path": "/services/permits-complaints-services-uae"
      }
    ]
  },
  {
    "id": "other-services",
    "title": "Other Services",
    "path": "/services/other-services",
    "services": [
      {
        "title": "Government Approvals & Permits",
        "path": "/services/government-approvals-permits-uae"
      },
      {
        "title": "Civil & Identity Services",
        "path": "/services/civil-identity-services-uae"
      },
      {
        "title": "Health & Medical Services",
        "path": "/services/health-medical-services-uae"
      },
      {
        "title": "Utilities & Municipalities Services",
        "path": "/services/utilities-municipalities-services-uae"
      }
    ]
  }

];

export default megaMenuData;
