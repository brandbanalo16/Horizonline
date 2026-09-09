import type { Metadata } from 'next';
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import Posts from '@/data/posts.json';
import BlogDetails from '@/components/sections/BlogDetails';
import { ArticleType } from '@/types/article';
import { notFound } from 'next/navigation';

const PAGE_TITLE: string = 'Blog Details';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = Posts.find((post: ArticleType) => post.slug === slug);

  if (!article) {
    return {
      title: PAGE_TITLE,
      description: 'Read business setup insights, company formation guides, and UAE market updates from Horizon Line.',
    };
  }

  return {
    title: article.metaTitle || article.title || PAGE_TITLE,
    description: article.metaDescription || article.excerpt || 'Read the latest business setup insights from Horizon Line.',
    alternates: {
      canonical: `https://www.horizonlineuae.com/blogs/${article.slug}`,
    },
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const posts = Posts;
  const article: ArticleType | undefined = posts.find((post: ArticleType) => post.slug === slug);

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
      {article ? (
        <BlogDetails container="w-[85%] mx-auto" article={article} />
      ) : (
        notFound()
      )}
    </>
  )
}

export default Page;