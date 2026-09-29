import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import OurTeam from '@/components/sections/OurTeam';
import SeoFaqSection from '@/components/seo/SeoFaqSection';
import JsonLd from '@/components/seo/JsonLd';
import RelatedServices from '@/components/seo/RelatedServices';
import { TeamsFaqAccordion } from '@/data/teamsFaqAccordion';

const PAGE_TITLE: string = 'Our Team';
export const metadata: Metadata = {
  title: { absolute: 'Best Our Team | Horizonline UAE Business Setup Experts' },
  description: 'Meet the Horizon Line team of business setup consultants, PRO experts, and corporate advisors supporting your company formation across the UAE.',
  alternates: {
    canonical: 'https://www.horizonlineuae.com/teams',
  },
}

const teamsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TeamsFaqAccordion.map((f) => ({
    '@type': 'Question',
    name: f.title,
    acceptedAnswer: { '@type': 'Answer', text: f.text },
  })),
};

const teamsBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.horizonlineuae.com/' },
    { '@type': 'ListItem', position: 2, name: 'Our Team', item: 'https://www.horizonlineuae.com/teams' },
  ],
};

const Team = () => {
    return (
        <>
            <JsonLd schema={teamsFaqSchema} />
            <JsonLd schema={teamsBreadcrumbSchema} />
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

            {/* Our Team */}
            <OurTeam 
                wrapperCls="mt-100 mb-100"
                container="container"
            />

            {/* SEO FAQ Section */}
            <SeoFaqSection
                heading="Frequently Asked Questions About Our Experts"
                background="gray"
                faqs={TeamsFaqAccordion.map(f => ({ question: f.title, answer: f.text }))}
            />

            {/* Related Services */}
            <RelatedServices
                heading="How Our Team Can Help You"
                background="white"
                items={[
                    { label: 'Mainland Company Formation UAE', href: '/services/mainland-company-formation' },
                    { label: 'Free Zone Company Setup', href: '/services/free-zone-company-formation' },
                    { label: 'UAE Investor Visa', href: '/services/employment-visa' },
                    { label: 'PRO Services UAE', href: '/services/pro-services' },
                    { label: 'VAT Registration UAE', href: '/services/vat-registration' },
                    { label: 'Trade License Renewal', href: '/services/commercial-license' },
                    { label: 'Contact Our Experts', href: '/contact-us' },
                ]}
            />
        </>
    )
}

export default Team;