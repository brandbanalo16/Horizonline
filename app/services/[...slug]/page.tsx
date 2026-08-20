import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import ServicePage from '@/components/sections/ServicePage';
import ServicePageLegacy from '@/components/sections/ServicePageLegacy';
import ServiceThreeColumnLayout from '@/components/layout/ServiceThreeColumnLayout';
import { ServiceSidebarLeft } from '@/components/sections/sub-services/ServiceSidebarLeft';
import { ServiceContentMain } from '@/components/sections/sub-services/ServiceContentMain';
import { ServiceSidebarRight } from '@/components/sections/sub-services/ServiceSidebarRight';

import NewServicesData from '@/data/newServicesData.json';
import Services from '@/data/services.json';
import SubServiceData from '@/data/subservice.json';
import { NewServiceType } from '@/types/newService';
import { ServiceProps } from '@/types/service';

// Support both flat array (old) and object with main_services/sub_services (new)
const AllNewServices: NewServiceType[] = (() => {
    const data = NewServicesData as any;
    if (Array.isArray(data)) return data as NewServiceType[];
    const main = Array.isArray(data.main_services) ? data.main_services : [];
    const sub = Array.isArray(data.sub_services) ? data.sub_services : main.flatMap((m: any) => m.sub_services || []);
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
        service.seo?.meta_title ||
        service.seo?.h1_tag ||
        service.content?.h1_tag ||
        service.sub_category;
    return baseTitle;
};

const mapSubServiceToNewService = (sub: any): NewServiceType => {
    const title = sub.name || 'Service';
    const slug = (sub.url_slug || '').replace('/services/', '');
    const description = sub.meta_description || '';
    const canonicalUrl = `https://www.horizonlineconsultancy.ae/services/${slug}`;

    return {
        id: title, // use title as id for mapping
        main_service_group: sub.target_location || 'UAE',
        category: sub.focus_keyword || title,
        sub_category: title,
        slug,
        seo: {
            meta_title: sub.meta_title || `${title} | Horizon Line`,
            meta_description: description,
            canonical_url: canonicalUrl,
            image_alt_tag: title,
            keywords: [sub.focus_keyword, title],
            h1_tag: title,
        },
        content: {
            h1_tag: title,
            intro_line: sub.seo_intro,
            overview: sub.introduction,
        },
        what_we_offer_section: {
            eyebrow: "Key Benefits",
            heading: "What you gain",
            subtext: "",
            checklist: (sub.key_benefits || []).map((b: any) => `${b.point}:::${b.explanation}`),
            cta_button: ""
        },
        documents_required_section: {
            checklist: (sub.documents_required || []).map((d: any) => `${d.point}:::${d.explanation}`)
        },
        how_it_works_section: {
            steps: (sub.process || []).map((p: any) => ({ step: p.point, description: p.explanation, title: p.point }))
        },
        faq_section: {
            items: [] // You can add FAQs later if needed
        },
        // We will pass the new fields along as a custom property to not break the type,
        // or just add them as raw properties since TypeScript in JS runtime doesn't complain.
        // We will cast it to any.
        ...(sub as any)
    };
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
    // 1. Check the new subservice.json (High Priority)
    const newSubService = SubServiceData.services.find((item: any) => {
        const itemSlug = (item.url_slug || '').replace('/services/', '');
        return itemSlug === slug;
    });
    if (newSubService) return mapSubServiceToNewService(newSubService);

    // 2. Check new data (main_services + sub_services)
    const service = AllNewServices.find((item) => item.slug === slug);
    if (service) return service;

    // 3. Fallback to legacy services.json
    const legacyService = (Services as ServiceProps[]).find((item) => item.slug === slug);
    if (legacyService) return mapLegacyServiceToNewService(legacyService);

    return undefined;
};

export async function generateStaticParams() {
    const subServiceParams = SubServiceData.services.map((item: any) => {
        const slug = (item.url_slug || '').replace('/services/', '');
        return { slug: slug.split('/') };
    });

    const allNewParams = AllNewServices.map((service) => ({ slug: service.slug.split('/') }));

    // Combine and deduplicate
    const combined = [...subServiceParams, ...allNewParams];
    const unique = Array.from(new Set(combined.map(p => p.slug.join('/')))).map(slug => ({ slug: slug.split('/') }));

    return unique;
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

    const seo = service.seo || {};
    const title = getEnhancedMetaTitle(service) || 'Service';

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

    const seo = service.seo || {};
    const sub_category = service.sub_category;
    const h1 = seo.h1_tag || service.content?.h1_tag || service.hero?.page_title || sub_category;

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

    const useLegacyLayout = MainServiceSlugs.has(joinedSlug);

    return (
        <>
            {seo.schema_markup && (
                <Script
                    id={`schema-${joinedSlug.replace(/\//g, '-')}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema_markup) }}
                />
            )}

            <BreadcrumbBanner
                title={h1 || 'Service'}
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
                <ServiceThreeColumnLayout>

                    {/* Left Column (20%) */}
                    <div style={{ minWidth: 0, width: '100%' }}>
                        <ServiceSidebarLeft />
                    </div>

                    {/* Center Column (60%) */}
                    <div style={{ minWidth: 0, width: '100%' }}>
                        <ServiceContentMain service={service} />
                    </div>

                    {/* Right Column (20%) */}
                    <div style={{ minWidth: 0, width: '100%' }}>
                        <ServiceSidebarRight serviceName={sub_category} />
                    </div>

                </ServiceThreeColumnLayout>
            )}
        </>
    );
};

export default Page;
