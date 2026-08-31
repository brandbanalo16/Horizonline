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

export const metadata: Metadata = {
    title: 'Business Setup in UAE — All 7 Emirates | Horizon Line',
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
        canonical: 'https://horizononlineuae.com/'
    },
    openGraph: {
        title: 'Horizon Line — Business Setup Across All 7 Emirates of the UAE',
        description: 'From mainland and free zone formation to visas, office space, and bank account opening — Horizon Line supports your business journey across Dubai, Abu Dhabi, Sharjah, RAK, Fujairah, Ajman & UAQ.',
        url: 'https://horizononlineuae.com/',
        type: 'website'
    }
};

const Home3 = () => {
    return (
        <>
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
        </>
    )
}

export default Home3;