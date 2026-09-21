import type { Metadata } from "next";
import { fonts } from "@/libs/fonts";
import "@/styles/global.css";
import "@/styles/footer.css";
import "@/styles/modal.css";
import AosInitializer from "@/libs/aos";

import Header from "@/components/sections/Header";
import AdditionalDrawer from "@/components/AdditionalDrawer";
import Footer from "@/components/sections/Footer";
import ScrollTop from "@/components/ScrollToTop";
import DrawerOverlay from "@/components/DrawerOverlay";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: {
    template: '%s | Horizon Line',
    default: 'Business Setup in Dubai, UAE | Horizon Line',
  },
  description: 'Horizon Line provides expert business setup in All 7 Emirates, UAE, Sharjah, and Abu Dhabi with mainland and free zone company formation, visas, VAT, and compliance support.',
  metadataBase: new URL('https://www.horizonlineuae.com'),
  alternates: {
    canonical: 'https://www.horizonlineuae.com/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Business Setup in Dubai, UAE | Horizon Line',
    description: 'Trusted support for company formation, licensing, visas, VAT, and compliance across Dubai, Sharjah, Abu Dhabi, and the wider UAE.',
    url: 'https://www.horizonlineuae.com/',
    siteName: 'Horizon Line',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.horizonlineuae.com/img/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Horizon Line — Business Setup Experts in UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Setup in Dubai, UAE | Horizon Line',
    description: 'Expert business setup across all 7 UAE Emirates — mainland, free zone, visas, VAT, legal, and compliance support.',
    images: ['https://www.horizonlineuae.com/img/og-image.png'],
  },
  verification: {
    google: 'Rb00mp0pIktf64pQjcjBll7gcohr-q_aQy2GvC-8NaI',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Horizon Line',
  url: 'https://www.horizonlineuae.com',
  logo: 'https://www.horizonlineuae.com/img/logo.png',
  description: 'Horizon Line is a UAE business setup consultancy providing mainland and free zone company formation, visa services, VAT compliance, trademark registration, and PRO services across all 7 Emirates.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office No. 103, Juma Al Majid Building, Industrial Area 4',
    addressLocality: 'Sharjah',
    addressCountry: 'AE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971541787863',
    contactType: 'customer service',
    email: 'enquiry@horizonlineuae.com',
    areaServed: 'AE',
    availableLanguage: 'English',
  },
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Horizon Line',
  url: 'https://www.horizonlineuae.com',
  description: 'Business setup consultancy for UAE company formation, visas, VAT, trademark and PRO services across all 7 Emirates.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.horizonlineuae.com/services?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>
        {/* Organization + WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Header />
        <main>{children}</main>
        <Footer />

        {/* Modal and Drawer Overlay */}
        <DrawerOverlay />

        {/* Additional right-side drawer (global) */}
        <AdditionalDrawer />

        {/* AOS Init */}
        <AosInitializer />

        {/* Scroll to Top Button */}
        <ScrollTop />

        {/* Cookie Consent */}
        <CookieConsent />
      </body>
    </html>
  );
}
