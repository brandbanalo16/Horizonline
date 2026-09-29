import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import { AboutImageTextData } from '@/data/sections/aboutImageTextData';
import { AboutMissionData } from '@/data/sections/aboutMissionData';
import { AboutWhyChooseUsData } from '@/data/sections/aboutWhyChooseUsData';
import { AboutWorkingProcessData } from '@/data/sections/aboutWorkingProcessData';
import { AboutTextBannerData } from '@/data/sections/aboutTextBannerData';
// import { AboutTeamSliderData } from '@/data/sections/aboutTeamSliderData';
import { AboutTestimonialData } from '@/data/sections/aboutTestimonialData';
import { AboutFaqData } from '@/data/sections/aboutFaqData';
import { AboutContactData } from '@/data/sections/aboutContactData';
import { AboutFaqAccordion } from '@/data/aboutFaqAccordion';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ImageText from '@/components/sections/ImageText';
import WhyChooseUs3 from '@/components/sections/WhyChooseUs3';
import WorkingProcessSticky from '@/components/sections/WorkingProcessSticky';
import TextBanner from '@/components/sections/TextBanner';
import TeamSlider from '@/components/sections/TeamSlider';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import ContactSection from '@/components/sections/Contact';
import JsonLd from '@/components/seo/JsonLd';
import RelatedServices from '@/components/seo/RelatedServices';

import '@/styles/about-page.css';

const PAGE_TITLE = 'About Us — Business Setup Across All 7 Emirates | Horizon Line';

export const metadata: Metadata = {
    title: { absolute: 'About Us — Horizonline Best Business Setup Across All 7 Emirates' },
    description: 'Horizon Line is a trusted UAE business setup consultancy covering all 7 Emirates. We handle company formation, visas, PRO services, trade licences, and bank account opening.',
    keywords: [
        'Horizon Line UAE',
        'Business Setup Consultancy UAE',
        'Company Formation UAE',
        'Business Setup All 7 Emirates',
        'UAE Business Setup Experts',
        'RAK Business Setup',
        'Fujairah Company Formation',
    ],
    alternates: {
        canonical: 'https://www.horizonlineuae.com/about-us'
    },
    openGraph: {
        title: 'About Horizon Line — UAE Business Setup Across All 7 Emirates',
        description: 'Horizon Line helps entrepreneurs and investors set up businesses across every Emirates — with honest guidance, transparent pricing, and end-to-end support.',
        url: 'https://www.horizonlineuae.com/about-us',
        type: 'website'
    }
};

const aboutFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: AboutFaqAccordion.map((f) => ({
        '@type': 'Question',
        name: f.title,
        acceptedAnswer: { '@type': 'Answer', text: f.text },
    })),
};

const aboutBreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.horizonlineuae.com/' },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.horizonlineuae.com/about-us' },
    ],
};

const About = () => {
    return (
        <>
            <JsonLd schema={aboutFaqSchema} />
            <JsonLd schema={aboutBreadcrumbSchema} />

            <BreadcrumbBanner
                title="About Us"
                image={{
                    src: BreadcrumbBannerImage.src,
                    srcMobile: BreadcrumbBannerImageTablet.src,
                    srcTablet: BreadcrumbBannerImageMobile.src,
                    width: 1920,
                    height: 520,
                    cls: "media media-bg",
                    alt: "About Horizon Line — trusted UAE business setup consultancy covering all 7 Emirates",
                    loading: "eager"
                }}
            />

            <ImageText data={AboutImageTextData} />

            <ImageText data={AboutMissionData} />

            <WhyChooseUs3 data={AboutWhyChooseUsData} />

            <WorkingProcessSticky data={AboutWorkingProcessData} />

            <TextBanner data={AboutTextBannerData} />

            {/* <TeamSlider
                data={AboutTeamSliderData}
                pagination={true}
            /> */}

            <Testimonials data={AboutTestimonialData} />

            {/* Existing FAQ — data from aboutFaqAccordion.ts (5 original + 3 new questions) */}
            <Faq data={AboutFaqData} />

            <ContactSection data={AboutContactData} />

            {/* Related Services */}
            <RelatedServices
                heading="Our UAE Business Setup Services"
                background="gray"
                items={[
                    { label: 'Mainland Company Formation UAE', href: '/services/mainland-company-formation' },
                    { label: 'Free Zone Company Setup', href: '/services/free-zone-company-formation' },
                    { label: 'Offshore Company Formation UAE', href: '/services/offshore-company-formation' },
                    { label: 'Corporate Bank Account Opening', href: '/services/corporate-bank-account' },
                    { label: 'UAE Investor Visa', href: '/services/employment-visa' },
                    { label: 'PRO Services UAE', href: '/services/pro-services' },
                    { label: 'VAT Registration UAE', href: '/services/vat-registration' },
                    { label: 'Business Setup FAQ', href: '/faq' },
                    { label: 'View All Services', href: '/services' },
                ]}
            />
        </>
    )
}

export default About;
