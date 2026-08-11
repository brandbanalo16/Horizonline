import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import ServicePage from '@/components/sections/ServicePage';
import ServicePageLegacy from '@/components/sections/ServicePageLegacy';

import NewServicesData from '@/data/newServicesData.json';
import Services from '@/data/services.json';
import { NewServiceType } from '@/types/newService';
import { ServiceProps } from '@/types/service';

// Support both flat array (old) and object with main_services/sub_services (new)
const AllNewServices: NewServiceType[] = (() => {
    const data = NewServicesData as any;
    if (Array.isArray(data)) return data as NewServiceType[];
    const main = Array.isArray(data.main_services) ? data.main_services : [];
    const sub = Array.isArray(data.sub_services) ? data.sub_services : [];
    return [...main, ...sub] as NewServiceType[];
})();

const MainServiceSlugs = new Set(
    (Array.isArray((NewServicesData as { main_services?: { slug: string }[] }).main_services)
        ? (NewServicesData as { main_services: { slug: string }[] }).main_services
        : []
    ).map((item) => item.slug)
);

const getEnhancedMetaTitle = (service: NewServiceType) => {
    const baseTitle =
        service.seo.meta_title ||
        service.seo.h1_tag ||
        service.content?.h1_tag ||
        service.sub_category;
    return baseTitle;
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
    // First check new data (main_services + sub_services)
    const service = AllNewServices.find((item) => item.slug === slug);
    if (service) return service;

    // Fallback to legacy services.json
    const legacyService = (Services as ServiceProps[]).find((item) => item.slug === slug);
    if (legacyService) return mapLegacyServiceToNewService(legacyService);

    return undefined;
};

export async function generateStaticParams() {
    return AllNewServices.map((service) => ({ slug: service.slug.split('/') }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const joinedSlug = slug.join('/');
    const service = findServiceBySlug(joinedSlug);
    if (!service) return { title: 'Service Not Found' };

    const seo = service.seo;
    const title = getEnhancedMetaTitle(service);

    return {
        title,
        description: seo.meta_description,
        keywords: seo.keywords?.join(', '),
        alternates: { canonical: seo.canonical_url },
        openGraph: {
            title,
            description: seo.open_graph?.og_description,
            type: 'website',
            url: seo.canonical_url,
            siteName: 'Horizon Line Management Consultancy LLC',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: seo.twitter_card?.description,
        },
        robots: { index: true, follow: true },
    };
}

const Page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { slug } = await params;
    const joinedSlug = slug.join('/');
    const service = findServiceBySlug(joinedSlug);
    if (!service) notFound();

    const { seo, sub_category } = service;
    const h1 = service.seo.h1_tag || service.content?.h1_tag || service.hero?.page_title || sub_category;

    const relatedServices = AllNewServices.filter(
        (item) =>
            item.slug !== joinedSlug &&
            (item.category === service.category ||
                item.main_service_group === service.main_service_group)
    )
        .slice(0, 4)
        .map((item) => ({
            id: item.id,
            slug: item.slug,
            title: item.sub_category,
            description: item.content?.intro_line || item.content?.overview || '',
        })) as ServiceProps[];

    // CTA banner removed per user request

    const useLegacyLayout = MainServiceSlugs.has(joinedSlug);

    return (
        <>
            <Script
                id={`schema-${joinedSlug.replace(/\//g, '-')}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema_markup) }}
            />

            <BreadcrumbBanner
                title={h1}
                image={{
                    src: BreadcrumbBannerImage.src,
                    srcMobile: BreadcrumbBannerImageTablet.src,
                    srcTablet: BreadcrumbBannerImageMobile.src,
                    width: 1920,
                    height: 520,
                    cls: 'media media-bg',
                    alt: seo.image_alt_tag || 'Banner Image',
                    loading: 'eager',
                }}
            />

            {useLegacyLayout ? (
                <ServicePageLegacy service={service} relatedServices={relatedServices} />
            ) : (
                <ServicePage service={service} relatedServices={relatedServices} />
            )}
        </>
    );
};

export default Page;
