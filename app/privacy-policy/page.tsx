import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import PrivacyPolicySection from '@/components/sections/PrivacyPolicy';

const PAGE_TITLE: string = 'Privacy Policy | Horizon Line';
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: 'Read Horizon Line\'s Privacy Policy to understand how we collect, use, and protect your personal information when you use our UAE business setup services.',
  alternates: {
    canonical: 'https://www.horizonlineuae.com/privacy-policy',
  },
  robots: {
    index: false,
    follow: false,
  },
}

const Privacy = () => {
    return(
        <>
            {/* Breadcrumb Banner  */}
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

            {/* Privacy Policy */}
            <PrivacyPolicySection />
        </>
    )
}

export default Privacy;