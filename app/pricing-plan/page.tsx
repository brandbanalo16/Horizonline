import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { PricingPlan3Data } from '@/data/sections/pricingPlan3Data';
import { WhyChooseUsGridBgData } from '@/data/sections/whyChooseUsGridBgData';
import { Faq2Data } from '@/data/sections/faq2Data';
import { PricingFaqAccordion } from '@/data/pricingFaqAccordion';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import PricingPlan from '@/components/sections/PricingPlan';
import WhyChooseUsGrid from '@/components/sections/WhyChooseUsGrid';
import Faq from '@/components/sections/Faq';
import JsonLd from '@/components/seo/JsonLd';
import RelatedServices from '@/components/seo/RelatedServices';

const PAGE_TITLE: string = 'Business Setup Pricing Plans | Horizon Line UAE';

export const metadata: Metadata = {
  title: { absolute: 'Best Business Setup Pricing Plans in UAE | Horizonline UAE Business Setup Experts' },
  description: 'Transparent UAE business setup pricing — mainland, free zone, visa, and compliance packages across all 7 Emirates. Get an all-inclusive quote with no hidden fees.',
  alternates: {
    canonical: 'https://www.horizonlineuae.com/pricing-plan',
  },
  openGraph: {
    title: 'Business Setup Pricing Plans | Horizon Line UAE',
    description: 'Clear, transparent pricing for UAE company formation, licensing, visa, and compliance services across Dubai, Sharjah, Abu Dhabi, and all 7 Emirates.',
    url: 'https://www.horizonlineuae.com/pricing-plan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Setup Pricing Plans | Horizon Line UAE',
    description: 'Transparent UAE business setup pricing — mainland, free zone, visa, and compliance packages.',
  },
}

const pricingFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PricingFaqAccordion.map((f) => ({
    '@type': 'Question',
    name: f.title,
    acceptedAnswer: { '@type': 'Answer', text: f.text },
  })),
};

const pricingBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.horizonlineuae.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pricing Plans', item: 'https://www.horizonlineuae.com/pricing-plan' },
  ],
};

const PricingPlanPage = () => {
    return(
        <>
            <JsonLd schema={pricingFaqSchema} />
            <JsonLd schema={pricingBreadcrumbSchema} />

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
                    alt: "UAE Business Setup Pricing Plans — Horizon Line transparent package costs",
                    loading: "eager"
                }}
            />

            {/* Pricing Plan */}
            <PricingPlan data={PricingPlan3Data} />

            {/* Why Choose Us */}
            <WhyChooseUsGrid data={WhyChooseUsGridBgData} />

            {/* FAQ — pricing-specific questions via faqList prop in Faq2Data */}
            <Faq data={Faq2Data} />

            {/* Related Services */}
            <RelatedServices
                heading="Ready to Get Started? Explore Our Services"
                background="gray"
                items={[
                    { label: 'Mainland Company Formation UAE', href: '/services/mainland-company-formation' },
                    { label: 'Free Zone Company Formation', href: '/services/free-zone-company-formation' },
                    { label: 'Offshore Company Formation UAE', href: '/services/offshore-company-formation' },
                    { label: 'Corporate Bank Account Opening', href: '/services/corporate-bank-account' },
                    { label: 'UAE Visa Services', href: '/services/employment-visa' },
                    { label: 'VAT Registration UAE', href: '/services/vat-registration' },
                    { label: 'PRO Services UAE', href: '/services/pro-services' },
                    { label: 'UAE Business Setup FAQ', href: '/faq' },
                    { label: 'Contact Us for a Free Quote', href: '/contact-us' },
                ]}
            />
        </>
    )
}

export default PricingPlanPage;