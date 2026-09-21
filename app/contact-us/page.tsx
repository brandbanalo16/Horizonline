import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { ContactData } from '@/data/sections/contactData';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ContactSection from '@/components/sections/Contact';
import MapSection from '@/components/sections/Map';

const PAGE_TITLE: string = 'Contact Horizon Line — UAE Business Setup Enquiries';
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: 'Get in touch with Horizon Line for business setup, company formation, visa, VAT, or PRO service enquiries across Dubai, Abu Dhabi, Sharjah, and all 7 UAE Emirates.',
  alternates: {
    canonical: 'https://www.horizonlineuae.com/contact-us',
  },
  openGraph: {
    title: 'Contact Horizon Line — UAE Business Setup Enquiries',
    description: 'Reach out to Horizon Line for expert guidance on business setup, licensing, visas, and compliance across the UAE. Free consultation available.',
    url: 'https://www.horizonlineuae.com/contact-us',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Horizon Line — UAE Business Setup Enquiries',
    description: 'Get expert guidance on UAE business setup, company formation, and visa services. Contact Horizon Line today.',
  },
}

const Contact = () => {
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

            {/* Contact Form */}
            <ContactSection data={ContactData} />

            {/* Google Map */}
            <MapSection />
        </>
    )
}

export default Contact;