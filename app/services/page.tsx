import type { Metadata } from 'next';
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import OurServices from '@/components/sections/OurServices';
import ContactSection from '@/components/sections/Contact';
import { OurServicesData } from '@/data/sections/ourServicesData';
import { Contact2Data } from '@/data/sections/contact2Data';

const PAGE_TITLE = 'Our Services | Horizon Line';

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: "Explore Horizon Line's comprehensive range of business setup, corporate, legal, tax, and visa services across the UAE.",
    alternates: {
        canonical: 'https://www.horizonlineconsultancy.ae/services'
    },
};

const PageServices = () => {
    return (
        <>
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

            <OurServices 
                data={{
                    ...OurServicesData,
                    wrapperCls: "section-padding",
                    subheading: "Our Services",
                    heading: "Wide Range of Services to Support Your Business Across the UAE",
                    button: undefined,
                }} 
                maxItems={8}
            />

            <ContactSection data={Contact2Data} />
        </>
    )
}

export default PageServices;