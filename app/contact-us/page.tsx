import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { ContactData } from '@/data/sections/contactData';
import { ContactFaqAccordion } from '@/data/contactFaqAccordion';

import SeoFaqSection from '@/components/seo/SeoFaqSection';
import JsonLd from '@/components/seo/JsonLd';
import RelatedServices from '@/components/seo/RelatedServices';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ContactSection from '@/components/sections/Contact';
import MapSection from '@/components/sections/Map';

const PAGE_TITLE: string = 'Contact Us';
export const metadata: Metadata = {
  title: 'Contact Us – UAE Business Setup Enquiries | Horizon Line',
  description: 'Get in touch for a free business setup consultation. Contact our UAE company formation helpline for enquiries on visas, PRO services, and trade licenses.',
  alternates: {
    canonical: 'https://www.horizonlineuae.com/contact-us',
  },
  openGraph: {
    title: 'Contact Horizon Line — UAE Business Setup Enquiries',
    description: 'Reach out to Horizon Line for expert guidance on business setup, licensing, visas, and compliance across the UAE. Free consultation available.',
    url: 'https://www.horizonlineuae.com/contact-us',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Horizon Line — UAE Business Setup Enquiries',
    description: 'Get expert guidance on UAE business setup, company formation, and visa services. Contact Horizon Line today.',
  },
}

const contactFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ContactFaqAccordion.map((f) => ({
    '@type': 'Question',
    name: f.title,
    acceptedAnswer: { '@type': 'Answer', text: f.text },
  })),
};

const contactBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.horizonlineuae.com/' },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://www.horizonlineuae.com/contact-us' },
  ],
};

const Contact = () => {
  return (
    <>
      <JsonLd schema={contactFaqSchema} />
      <JsonLd schema={contactBreadcrumbSchema} />
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner
        title={PAGE_TITLE}
        image={{
          src: BreadcrumbBannerImage.src,
          srcMobile: BreadcrumbBannerImageTablet.src,
          srcTablet: BreadcrumbBannerImageMobile.src,
          width: 1920,
          height: 520,
          cls: "media media-bg",
          alt: "Banner Image",
          loading: "eager"
        }}
      />

      {/* Contact Form */}
      <ContactSection data={ContactData} />

      {/* SEO FAQ Section */}
      <SeoFaqSection
        heading="Frequently Asked Questions About Contacting Us"
        background="gray"
        faqs={ContactFaqAccordion.map(f => ({ question: f.title, answer: f.text }))}
      />

      {/* Related Services */}
      <RelatedServices
        heading="Explore Our Core Services"
        background="white"
        items={[
          { label: 'Mainland Company Formation UAE', href: '/services/mainland-company-formation' },
          { label: 'Free Zone Company Setup', href: '/services/free-zone-company-formation' },
          { label: 'Corporate Bank Account Opening', href: '/services/corporate-bank-account' },
          { label: 'UAE Investor Visa', href: '/services/employment-visa' },
          { label: 'PRO Services UAE', href: '/services/pro-services' },
          { label: 'Business Setup Pricing Plans', href: '/pricing-plan' },
          { label: 'UAE Business Setup FAQ', href: '/faq' },
        ]}
      />

      {/* Google Map */}
      <MapSection />
    </>
  )
}

export default Contact;