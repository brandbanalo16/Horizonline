import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BlogGrid from '@/components/sections/BlogGrid';
import SeoFaqSection from '@/components/seo/SeoFaqSection';
import JsonLd from '@/components/seo/JsonLd';
import RelatedServices from '@/components/seo/RelatedServices';
import { BlogsFaqAccordion } from '@/data/blogsFaqAccordion';

const PAGE_TITLE: string = 'UAE Business Setup Blog — Insights & Guides';
export const metadata: Metadata = {
  title: 'UAE Business Setup Blog – Insights & Guides | Horizon Line',
  description: 'Read our UAE business setup guide for the latest company formation articles, free zone vs mainland comparisons, trade license news, and VAT updates.',
  alternates: {
    canonical: 'https://www.horizonlineuae.com/blogs',
  },
  openGraph: {
    title: 'UAE Business Setup Blog — Insights & Guides | Horizon Line',
    description: 'Expert articles and guides on UAE company formation, free zone setup, visa processes, VAT, trade licensing, and business compliance.',
    url: 'https://www.horizonlineuae.com/blogs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Business Setup Blog | Horizon Line',
    description: 'Guides and insights on UAE business setup, company formation, visas, VAT, and compliance.',
  },
}

const blogsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: BlogsFaqAccordion.map((f) => ({
    '@type': 'Question',
    name: f.title,
    acceptedAnswer: { '@type': 'Answer', text: f.text },
  })),
};

const blogsBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.horizonlineuae.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://www.horizonlineuae.com/blogs' },
  ],
};

const Blog = () => {
    return(
        <>
            <JsonLd schema={blogsFaqSchema} />
            <JsonLd schema={blogsBreadcrumbSchema} />
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
            <BlogGrid cls="mt-100 mb-100" />

            {/* SEO FAQ Section */}
            <SeoFaqSection
                heading="Frequently Asked Questions About Our Blog & Guides"
                background="gray"
                faqs={BlogsFaqAccordion.map(f => ({ question: f.title, answer: f.text }))}
            />

            {/* Related Services */}
            <RelatedServices
                heading="Read More About Our Services"
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
        </>
    )
}

export default Blog;