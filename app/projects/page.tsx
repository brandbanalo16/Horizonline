import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import Projects from '@/components/sections/Projects';
import SeoFaqSection from '@/components/seo/SeoFaqSection';
import JsonLd from '@/components/seo/JsonLd';
import RelatedServices from '@/components/seo/RelatedServices';
import { ProjectsFaqAccordion } from '@/data/projectsFaqAccordion';


const PAGE_TITLE: string = 'Our Projects';
export const metadata: Metadata = {
  title: { absolute: 'Best Our Projects | Horizonline UAE Leading Business Setup service Provider company' },
  description: 'Explore Horizon Line business setup case studies, company formation success stories, and strategic consulting project results across all 7 UAE Emirates.',
  alternates: {
    canonical: 'https://www.horizonlineuae.com/projects',
  },
}

const projectsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ProjectsFaqAccordion.map((f) => ({
    '@type': 'Question',
    name: f.title,
    acceptedAnswer: { '@type': 'Answer', text: f.text },
  })),
};

const projectsBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.horizonlineuae.com/' },
    { '@type': 'ListItem', position: 2, name: 'Our Projects', item: 'https://www.horizonlineuae.com/projects' },
  ],
};

const PageProjects = () => {
    return(
        <>
            <JsonLd schema={projectsFaqSchema} />
            <JsonLd schema={projectsBreadcrumbSchema} />
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

            {/* Project Cards */}
            <Projects 
                wrapperCls="mt-100 mb-100"
                container="container-fluid"
            />

            {/* SEO FAQ Section */}
            <SeoFaqSection
                heading="Frequently Asked Questions About Our Case Studies"
                background="gray"
                faqs={ProjectsFaqAccordion.map(f => ({ question: f.title, answer: f.text }))}
            />

            {/* Related Services */}
            <RelatedServices
                heading="Start Your Own UAE Business Setup Project"
                background="white"
                items={[
                    { label: 'Mainland Company Formation UAE', href: '/services/mainland-company-formation' },
                    { label: 'Free Zone Company Setup', href: '/services/free-zone-company-formation' },
                    { label: 'Corporate Bank Account Opening', href: '/services/corporate-bank-account' },
                    { label: 'UAE Investor Visa', href: '/services/employment-visa' },
                    { label: 'PRO Services UAE', href: '/services/pro-services' },
                    { label: 'Contact Our Experts', href: '/contact-us' },
                ]}
            />
        </>
    )
}

export default PageProjects;