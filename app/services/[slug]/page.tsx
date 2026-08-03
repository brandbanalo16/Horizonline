import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ServicePage from '@/components/sections/ServicePage';
import ContactSection from '@/components/sections/Contact';
import TextBanner from '@/components/sections/TextBanner';

import { ContactData } from '@/data/sections/contactData';
import NewServiceList from '@/data/newServicesData.json';
import { NewServiceType } from '@/types/newService';

const getEnhancedMetaTitle = (service: NewServiceType) => {
    const baseTitle = service.seo.meta_title || service.content.h1_tag || service.sub_category;
    const strongWord = ['Expert', 'Trusted', 'Reliable', 'Proven', 'Strategic'][(service.id - 1) % 5];

    return `${baseTitle} | ${service.id} ${strongWord}`;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = (NewServiceList as NewServiceType[]).find((item) => item.slug === slug);
    if (!service) return { title: 'Service Not Found' };

    const seo = service.seo;
    const enhancedTitle = getEnhancedMetaTitle(service);

    return {
        title: enhancedTitle,
        description: seo.meta_description,
        keywords: seo.keywords?.join(', '),
        alternates: {
            canonical: seo.canonical_url,
        },
        openGraph: {
            title: enhancedTitle,
            description: seo.open_graph?.og_description,
            type: 'website',
            url: seo.canonical_url,
            siteName: 'Horizon Line Management Consultancy LLC',
        },
        twitter: {
            card: 'summary_large_image',
            title: enhancedTitle,
            description: seo.twitter_card?.description,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const service = (NewServiceList as NewServiceType[]).find((item) => item.slug === slug);

    if (!service) notFound();

    const { seo, content, sub_category } = service;

    const ctaData = {
        container: "container-fluid",
        subheading: "Get Started Today",
        heading: sub_category,
        text: content.final_cta || `Ready to get started with ${sub_category}? Book a free consultation with a Horizon Line specialist today.`,
        button: {
            label: "Book a Free Consultation",
            href: "/contact-us",
            type: "secondary" as const,
        },
    };

    return (
        <>
            <Script
                id={`schema-${slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema_markup) }}
            />

            <BreadcrumbBanner
                title={content.h1_tag || sub_category}
                image={{
                    src: BreadcrumbBannerImage.src,
                    srcMobile: BreadcrumbBannerImageTablet.src,
                    srcTablet: BreadcrumbBannerImageMobile.src,
                    width: 1920,
                    height: 520,
                    cls: "media media-bg",
                    alt: seo.image_alt_tag || "Banner Image",
                    loading: "eager"
                }}
            />

            <ServicePage service={service} />

            <ContactSection data={ContactData} />

            <TextBanner data={ctaData} />
        </>
    );
};

export default Page;
