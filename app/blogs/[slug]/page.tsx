import type { Metadata } from 'next';
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import Posts from '@/data/posts.json';
import BlogDetails from '@/components/sections/BlogDetails';
import { ArticleType } from '@/types/article';
import { notFound } from 'next/navigation';

const BASE_URL = 'https://www.horizonlineuae.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/img/og-image.png`;

// Pre-render all blog posts at build time
export async function generateStaticParams() {
  return Posts.map((post: ArticleType) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = Posts.find((post: ArticleType) => post.slug === slug);

  if (!article) {
    return {
      title: 'Blog Article | Horizon Line',
      description: 'Read business setup insights, company formation guides, and UAE market updates from Horizon Line.',
      robots: { index: false, follow: false },
    };
  }

  const ogImage = article.image
    ? article.image.startsWith('http') ? article.image : `${BASE_URL}${article.image}`
    : DEFAULT_OG_IMAGE;

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt || 'Read the latest business setup insights from Horizon Line.',
    alternates: {
      canonical: `${BASE_URL}/blogs/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt || '',
      url: `${BASE_URL}/blogs/${article.slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt || '',
      images: [ogImage],
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
        title={article?.title || 'Blog Article'}
        image={{
          src: BreadcrumbBannerImage.src,
          srcMobile: BreadcrumbBannerImageTablet.src,
          srcTablet: BreadcrumbBannerImageMobile.src,
          width: 1920,
          height: 520,
          cls: "media media-bg",
          alt: article ? `${article.title} — Horizon Line Blog` : "Horizon Line Blog",
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