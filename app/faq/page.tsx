import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import { FaqWithContactFormData } from '@/data/sections/faqWithContactFormData';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import FaqWithContactForm from '@/components/sections/FaqWithContactForm';


const PAGE_TITLE: string = 'Frequently Asked Questions About UAE Business Setup';
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: 'Find answers to common questions about business setup, company formation, visa services, VAT registration, PRO services, and licensing across the UAE.',
  alternates: {
    canonical: 'https://www.horizonlineuae.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions — UAE Business Setup | Horizon Line',
    description: 'Common questions answered about UAE company formation, free zone vs mainland, visa processes, VAT, trade licensing, and more.',
    url: 'https://www.horizonlineuae.com/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Business Setup FAQ | Horizon Line',
    description: 'Answers to common UAE business setup questions — company formation, visas, VAT, licensing and more.',
  },
}

const Faq = () => {
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

            {/* FAQ */}
            <FaqWithContactForm data={FaqWithContactFormData} />
        </>
    )
}

export default Faq;