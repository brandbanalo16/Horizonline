import type { Metadata } from 'next';
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import OurServices from '@/components/sections/OurServices';
import ContactSection from '@/components/sections/Contact';
import { OurServicesData } from '@/data/sections/ourServicesData';
import { Contact2Data } from '@/data/sections/contact2Data';
import { ServicesFaqAccordion } from '@/data/servicesFaqAccordion';

import SeoFaqSection from '@/components/seo/SeoFaqSection';
import JsonLd from '@/components/seo/JsonLd';
import RelatedServices from '@/components/seo/RelatedServices';

const PAGE_TITLE = 'Our Services | Horizon Line';

export const metadata: Metadata = {
    title: 'Business Setup Services in UAE | Horizon Line',
    description: "Explore Horizon Line's comprehensive business setup services in the UAE. From mainland and free zone company formation to trade licenses, visas, and VAT.",
    alternates: {
        canonical: 'https://www.horizonlineuae.com/services'
    },
};

const servicesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ServicesFaqAccordion.map((f) => ({
    '@type': 'Question',
    name: f.title,
    acceptedAnswer: { '@type': 'Answer', text: f.text },
  })),
};

const servicesBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.horizonlineuae.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.horizonlineuae.com/services' },
  ],
};

const PageServices = () => {
    return (
        <>
            <JsonLd schema={servicesFaqSchema} />
            <JsonLd schema={servicesBreadcrumbSchema} />
            <BreadcrumbBanner
                title="Our Services"
                image={{
                    src: BreadcrumbBannerImage.src,
                    srcMobile: BreadcrumbBannerImageTablet.src,
                    srcTablet: BreadcrumbBannerImageMobile.src,
                    width: 1920,
                    height: 520,
                    cls: "media media-bg",
                    alt: "Our Services — Horizon Line UAE",
                    loading: "eager"
                }}
            />

            <div style={{ backgroundColor: '#ffffff' }}>
                <OurServices
                    data={{
                        ...OurServicesData,
                        wrapperCls: "section-padding",
                        subheading: "Our Services",
                        heading: "Wide Range of Services to Support Your Business Across the UAE",
                        button: undefined,
                        backgroundImage: undefined,
                    }}
                    maxItems={8}
                />
            </div>

            <ContactSection data={Contact2Data} />

            {/* SEO FAQ Section */}
            <SeoFaqSection
                heading="Frequently Asked Questions About Our Services"
                background="gray"
                faqs={ServicesFaqAccordion.map(f => ({ question: f.title, answer: f.text }))}
            />

            {/* Related Services */}
            <RelatedServices
                heading="Explore More Business Setup Services"
                background="white"
                items={[
                    { label: 'Mainland Company Formation UAE', href: '/services/mainland-company-formation' },
                    { label: 'Free Zone Company Setup', href: '/services/free-zone-company-formation' },
                    { label: 'Offshore Company Formation', href: '/services/offshore-company-formation' },
                    { label: 'Corporate Bank Account Opening', href: '/services/corporate-bank-account' },
                    { label: 'UAE Investor Visa', href: '/services/employment-visa' },
                    { label: 'PRO Services UAE', href: '/services/pro-services' },
                    { label: 'VAT Registration UAE', href: '/services/vat-registration' },
                    { label: 'Trade License Renewal', href: '/services/commercial-license' },
                    { label: 'Business Setup FAQ', href: '/faq' },
                ]}
            />
        </>
    )
}

export default PageServices;