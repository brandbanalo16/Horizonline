import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import { AboutImageTextData } from '@/data/sections/aboutImageTextData';
import { AboutMissionData } from '@/data/sections/aboutMissionData';
import { AboutWhyChooseUsData } from '@/data/sections/aboutWhyChooseUsData';
import { AboutWorkingProcessData } from '@/data/sections/aboutWorkingProcessData';
import { AboutTextBannerData } from '@/data/sections/aboutTextBannerData';
import { AboutTeamSliderData } from '@/data/sections/aboutTeamSliderData';
import { AboutTestimonialData } from '@/data/sections/aboutTestimonialData';
import { AboutFaqData } from '@/data/sections/aboutFaqData';
import { AboutContactData } from '@/data/sections/aboutContactData';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ImageText from '@/components/sections/ImageText';
import WhyChooseUs3 from '@/components/sections/WhyChooseUs3';
import WorkingProcessSticky from '@/components/sections/WorkingProcessSticky';
import TextBanner from '@/components/sections/TextBanner';
import TeamSlider from '@/components/sections/TeamSlider';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import ContactSection from '@/components/sections/Contact';

import '@/styles/about-page.css';

const PAGE_TITLE = 'About Us — Business Setup Across All 7 Emirates | Horizon Line';

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: 'Learn about Horizon Line — your trusted UAE business setup consultancy covering Dubai, Abu Dhabi, Sharjah, RAK, Fujairah, Ajman & UAQ. Company formation, visas, office setup & banking support.',
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
        canonical: 'https://horizononlineuae.com/about-us'
    },
    openGraph: {
        title: 'About Horizon Line — UAE Business Setup Across All 7 Emirates',
        description: 'Horizon Line helps entrepreneurs and investors set up businesses across every Emirates — with honest guidance, transparent pricing, and end-to-end support.',
        url: 'https://horizononlineuae.com/about-us',
        type: 'website'
    }
};

const About = () => {
    return (
        <>
            <BreadcrumbBanner
                title="About Us"
                image={{
                    src: BreadcrumbBannerImage.src,
                    srcMobile: BreadcrumbBannerImageTablet.src,
                    srcTablet: BreadcrumbBannerImageMobile.src,
                    width: 1920,
                    height: 520,
                    cls: "media media-bg",
                    alt: "About Horizon Line — UAE business setup consultancy",
                    loading: "eager"
                }}
            />

            <ImageText data={AboutImageTextData} />

            <ImageText data={AboutMissionData} />

            <WhyChooseUs3 data={AboutWhyChooseUsData} />

            <WorkingProcessSticky data={AboutWorkingProcessData} />

            <TextBanner data={AboutTextBannerData} />

            <TeamSlider
                data={AboutTeamSliderData}
                pagination={true}
            />

            <Testimonials data={AboutTestimonialData} />

            <Faq data={AboutFaqData} />

            <ContactSection data={AboutContactData} />
        </>
    )
}

export default About;
