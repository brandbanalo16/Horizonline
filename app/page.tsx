import type { Metadata } from 'next';
import { ScrollingTextData } from '@/data/sections/scrollingTextData';
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
    title: 'Horizon Line - Business Setup in Dubai, UAE and Abu Dhabi',
    description: 'Horizon Line helps entrepreneurs and investors with business setup in Dubai, business setup in UAE, business setup in Sharjah, business setup in Abu Dhabi, mainland company formation, free zone company formation, visas, VAT, and compliance support.',
    keywords: [
        'Business Setup in Dubai',
        'Business Setup in UAE',
        'Business Setup in Sharjah',
        'Business Setup in Abu Dhabi',
        'Mainland Company Formation',
        'Free Zone Company Formation',
        'Offshore Company Formation',
        'UAE Visa Services',
        'VAT Registration UAE',
        'PRO Services UAE'
    ],
    alternates: {
        canonical: 'https://www.horizonlineconsultancy.ae/'
    },
    openGraph: {
        title: 'Horizon Line - Business Setup in Dubai, UAE and Abu Dhabi',
        description: 'Trusted support for company setup, licensing, visas, VAT, and compliance in Dubai, Sharjah, Abu Dhabi, and across the UAE.',
        url: 'https://www.horizonlineconsultancy.ae/',
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
            <ScrollingTextFullWidth data={ScrollingTextData} />

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
            <FeaturedBlog2 data={FeaturedBlog2Data} />

            {/* Contact Form */}
            <ContactSection data={Contact2Data} />
        </>
    )
}

export default Home3;