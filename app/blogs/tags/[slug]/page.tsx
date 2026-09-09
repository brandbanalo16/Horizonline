import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { createHandle } from '@/utils/createHandle';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BlogTags from '@/components/sections/BlogTags';

const PAGE_TITLE: string = 'Tags';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const label = slug
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return {
    title: `${label || PAGE_TITLE} | Horizon Line`,
    description: `Explore Horizon Line blog posts tagged ${label || 'business setup'} for UAE business insights and guides.`,
    alternates: {
      canonical: `https://www.horizonlineuae.com/blogs/tags/${slug}`,
    },
  };
}

interface TagProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: TagProps) => {
    const { slug } = await params;
    const handle = createHandle(slug);

    return (
        <>
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
            <BlogTags slug={handle} />
        </>
    )
}

export default Page;