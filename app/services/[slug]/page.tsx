import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ServicePage from '@/components/sections/ServicePage';
import TextBanner from '@/components/sections/TextBanner';

import NewServiceList from '@/data/newServicesData.json';
import Services from '@/data/services.json';
import { NewServiceType } from '@/types/newService';
import { ServiceProps } from '@/types/service';

const getEnhancedMetaTitle = (service: NewServiceType) => {
    const baseTitle = service.seo.meta_title || service.content.h1_tag || service.sub_category;
    const strongWord = ['Expert', 'Trusted', 'Reliable', 'Proven', 'Strategic'][(service.id - 1) % 5];

    return `${baseTitle} | ${service.id} ${strongWord}`;
};

const mapLegacyServiceToNewService = (legacy: ServiceProps): NewServiceType => {
    const title = legacy.title || 'Service';
    const slug = legacy.slug || 'service';
    const description = legacy.description || '';
    const canonicalUrl = `https://www.horizonlineconsultancy.ae/services/${slug}`;

    return {
        id: legacy.id || 1,
        main_service_group: title,
        category: title,
        sub_category: title,
        slug,
        seo: {
            meta_title: `${title} | Horizon Line`,
            meta_description: description,
            canonical_url: canonicalUrl,
            image_alt_tag: title,
            keywords: [title, `${title} UAE`, `${title} services UAE`],
            open_graph: {
                og_title: `${title} | Horizon Line`,
                og_description: description,
                og_image_alt: title,
                og_type: 'website',
            },
            twitter_card: {
                card: 'summary_large_image',
                title: `${title} | Horizon Line`,
                description,
            },
            schema_markup: {
                '@context': 'https://schema.org',
                '@type': 'Service',
                serviceType: title,
                provider: {
                    '@type': 'Organization',
                    name: 'Horizon Line Management Consultancy LLC',
                    url: 'https://www.horizonlineconsultancy.ae',
                },
                areaServed: 'United Arab Emirates',
                url: canonicalUrl,
            },
        },
        content: {
            h1_tag: title,
            intro_line: description,
            overview: description,
            our_services: legacy.list?.map((item) => item.title) || [],
            html_content: legacy.content || '',
        },
    };
};

const findServiceBySlug = (slug: string): NewServiceType | undefined => {
    const service = (NewServiceList as NewServiceType[]).find((item) => item.slug === slug);

    if (service) {
        return service;
    }

    const legacyService = (Services as ServiceProps[]).find((item) => item.slug === slug);
    if (legacyService) {
        return mapLegacyServiceToNewService(legacyService);
    }

    return undefined;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = findServiceBySlug(slug);
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
    const service = findServiceBySlug(slug);

    if (!service) notFound();

    const { seo, content, sub_category } = service;

    const relatedServices = ((NewServiceList as NewServiceType[])
        .filter((item) => item.slug !== slug)
        .filter((item) => item.category === service.category || item.main_service_group === service.main_service_group)
        .slice(0, 4)
        .map((item) => ({
            id: item.id,
            slug: item.slug,
            title: item.sub_category,
            description: item.content.intro_line || item.content.overview || '',
        })) as ServiceProps[])
        .filter((item) => item.slug);

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

            <ServicePage service={service} relatedServices={relatedServices} />

            <TextBanner data={ctaData} />
        </>
    );
};

export default Page;
