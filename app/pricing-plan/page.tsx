import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { PricingPlan3Data } from '@/data/sections/pricingPlan3Data';
import { WhyChooseUsGridBgData } from '@/data/sections/whyChooseUsGridBgData';
import { Faq2Data } from '@/data/sections/faq2Data';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import PricingPlan from '@/components/sections/PricingPlan';
import WhyChooseUsGrid from '@/components/sections/WhyChooseUsGrid';
import Faq from '@/components/sections/Faq';

const PAGE_TITLE: string = 'Business Setup Pricing Plans | Horizon Line UAE';
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: 'Explore Horizon Line\'s transparent business setup pricing plans for UAE company formation, trade licensing, visa packages, and PRO services across mainland and free zones.',
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

const PricingPlanPage = () => {
    return(
        <>
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

            {/* Pricing Plan */}
            <PricingPlan data={PricingPlan3Data} />

            {/* Why Choose Us */}
            <WhyChooseUsGrid data={WhyChooseUsGridBgData} />

            {/* FAQ */}
            <Faq data={Faq2Data} />
        </>
    )
}

export default PricingPlanPage;