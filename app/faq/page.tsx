import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import { FaqWithContactFormData } from '@/data/sections/faqWithContactFormData';
import { FaqAccordionUAE } from '@/data/faqAccordionUAE';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import FaqWithContactForm from '@/components/sections/FaqWithContactForm';
import JsonLd from '@/components/seo/JsonLd';
import RelatedServices from '@/components/seo/RelatedServices';

const PAGE_TITLE: string = 'Frequently Asked Questions About UAE Business Setup';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions About UAE Business Setup | Horizon Line',
  description: 'Answers to common UAE business setup questions — costs, timelines, documents, mainland vs free zone, local sponsors, VAT, PRO services, and trade license renewal.',
  alternates: {
    canonical: 'https://www.horizonlineuae.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions — UAE Business Setup | Horizon Line',
    description: 'Common questions answered about UAE company formation, free zone vs mainland, visa processes, VAT, trade licensing, and more.',
    url: 'https://www.horizonlineuae.com/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Business Setup FAQ | Horizon Line',
    description: 'Answers to common UAE business setup questions — company formation, visas, VAT, licensing and more.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FaqAccordionUAE.map((f) => ({
    '@type': 'Question',
    name: f.title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.text,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.horizonlineuae.com/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.horizonlineuae.com/faq' },
  ],
};

const Faq = () => {
    return(
        <>
            <JsonLd schema={faqSchema} />
            <JsonLd schema={breadcrumbSchema} />

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
                    alt: "Frequently Asked Questions — UAE Business Setup | Horizon Line",
                    loading: "eager"
                }}
            />

            {/* FAQ — UAE-specific questions */}
            <FaqWithContactForm data={FaqWithContactFormData} faqData={FaqAccordionUAE} />

            {/* Related Services */}
            <RelatedServices
                heading="Explore Our UAE Business Setup Services"
                background="gray"
                items={[
                    { label: 'Mainland Company Formation UAE', href: '/services/mainland-company-formation' },
                    { label: 'Free Zone Company Setup', href: '/services/free-zone-company-formation' },
                    { label: 'Corporate Bank Account Opening', href: '/services/corporate-bank-account' },
                    { label: 'UAE Visa Services', href: '/services/employment-visa' },
                    { label: 'VAT Registration UAE', href: '/services/vat-registration' },
                    { label: 'PRO Services UAE', href: '/services/pro-services' },
                    { label: 'Trade License Renewal UAE', href: '/services/commercial-license' },
                    { label: 'View All Services', href: '/services' },
                ]}
            />
        </>
    )
}

export default Faq;