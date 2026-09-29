import type { Metadata } from 'next';
// import { ScrollingTextData } from '@/data/sections/scrollingTextData';
import { ImageTextData } from '@/data/sections/imageTextData';
import { OurServicesData } from '@/data/sections/ourServicesData';
import { TextBannerData } from "@/data/sections/textBannerData";
import { StickyBannerData } from "@/data/sections/stickyBannerData";
import { TestimonialSliderData } from "@/data/sections/testimonialSliderData";
import { FeaturedBlog2Data } from '@/data/sections/featuredBlog2Data';
import { Contact2Data } from "@/data/sections/contact2Data";
import { WhyChooseUsData2 } from "@/data/sections/whyChooseUsData2";
import { WorkingProcessStickyData } from "@/data/sections/workingProcessStickyData";
import { HeroSlides2Data } from "@/data/sections/heroSlider2Data";

import ScrollingTextFullWidth from '@/components/sections/ScrollingTextFullWidth';



import ImageText from '@/components/sections/ImageText';
import OurServicesSix from '@/components/sections/OurServicesSix';
import StickyBanner from "@/components/sections/StickyBanner";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import FeaturedBlog2 from '@/components/sections/FeaturedBlog2';
import ContactSection from '@/components/sections/Contact';
import HeroSlider2 from "@/components/sections/HeroSlider2";
import WhyChooseUs3 from "@/components/sections/WhyChooseUs3";
import WorkingProcessSticky from "@/components/sections/WorkingProcessSticky";

import SeoFaqSection from '@/components/seo/SeoFaqSection';
import JsonLd from '@/components/seo/JsonLd';
import RelatedServices from '@/components/seo/RelatedServices';
import { HomeFaqAccordion } from '@/data/homeFaqAccordion';

export const metadata: Metadata = {
    title: { absolute: 'Horizon Line | Setup your business in UAE all 7 Emirates with Best Support and Consultation' },
    description: 'Start your business anywhere in the UAE — Dubai, Abu Dhabi, RAK, Fujairah & more. End-to-end setup, visas, office space & bank account support. Free consultation.',
    keywords: [
        'Business Setup in Dubai',
        'Business Setup in UAE',
        'Company Formation UAE',
        'Business Setup in RAK',
        'Business Setup in Fujairah',
        'Free Zone Company Formation UAE',
        'Mainland Company Setup UAE',
        'UAE Visa Assistance',
        'Corporate Bank Account Opening UAE',
        'Business Setup All 7 Emirates',
        'Ras Al Khaimah Company Formation',
        'Office Fit-Out UAE',
        'PRO Services UAE',
        'Legal Status Regularization UAE'
    ],
    alternates: {
        canonical: 'https://www.horizonlineuae.com/'
    },
    openGraph: {
        title: 'Horizon Line — Business Setup Across All 7 Emirates of the UAE',
        description: 'From mainland and free zone formation to visas, office space, and bank account opening — Horizon Line supports your business journey across Dubai, Abu Dhabi, Sharjah, RAK, Fujairah, Ajman & UAQ.',
        url: 'https://www.horizonlineuae.com/',
        type: 'website',
        images: [
            {
                url: 'https://www.horizonlineuae.com/img/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Horizon Line — Business Setup Across All 7 UAE Emirates',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Horizon Line — Business Setup Across All 7 UAE Emirates',
        description: 'Mainland, free zone, offshore, visas, VAT, PRO services and more — Horizon Line covers all your UAE business setup needs.',
        images: ['https://www.horizonlineuae.com/img/og-image.png'],
    },
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HomeFaqAccordion.map((f) => ({
    '@type': 'Question',
    name: f.title,
    acceptedAnswer: { '@type': 'Answer', text: f.text },
  })),
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Horizon Line',
  url: 'https://www.horizonlineuae.com/',
  logo: 'https://www.horizonlineuae.com/img/logo.png',
  description: 'Horizon Line provides expert business setup, company formation, visa, and PRO services across all 7 Emirates in the UAE.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AE'
  }
};

const Home3 = () => {
    return (
        <>
            <JsonLd schema={homeFaqSchema} />
            <JsonLd schema={organizationSchema} />
            {/* Hero Banner */}
            <HeroSlider2
                wrapperCls="with-floating-header"
                slides={HeroSlides2Data}
            />

            {/* Scrolling Text */}
            {/* <ScrollingTextFullWidth data={ScrollingTextData} /> */}

            {/* Image Text */}
            <ImageText data={ImageTextData} />

            {/* Service Section */}
            <OurServicesSix data={OurServicesData} />

            {/* Sticky Banner */}
            <StickyBanner data={StickyBannerData} />

            {/* Why Choose Us */}
            <WhyChooseUs3 data={WhyChooseUsData2} />

            {/* Working Process */}
            <WorkingProcessSticky data={WorkingProcessStickyData} />

            {/* Testimonial Slider */}
            <TestimonialSlider
                data={TestimonialSliderData}
                pagination={true}
            />

            {/* Featured Blog */}
            {/* <FeaturedBlog2 data={FeaturedBlog2Data} /> */}

            {/* Contact Form */}
            <ContactSection data={Contact2Data} />

            {/* SEO FAQ Section */}
            <SeoFaqSection
                heading="Frequently Asked Questions About Business Setup in UAE"
                background="gray"
                faqs={HomeFaqAccordion.map(f => ({ question: f.title, answer: f.text }))}
            />

            {/* Related Services */}
            <RelatedServices
                heading="Explore Our Core Business Setup Services"
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

export default Home3;