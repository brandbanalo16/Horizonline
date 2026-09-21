import { MetadataRoute } from 'next';
import servicesData from '@/data/services.json';
import subservicesData from '@/data/subservice.json';
import postsData from '@/data/posts.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.horizonlineuae.com';

  // Static routes — only canonical, indexable, public pages
  // Excluded: /blogs-list (duplicate of /blogs), /privacy-policy and /terms-condition (noindex)
  const staticRoutes = [
    '',
    '/about-us',
    '/services',
    '/blogs',
    '/contact-us',
    '/faq',
    '/pricing-plan',
    '/projects',
    '/teams',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Map dynamic services (main category pages)
  const dynamicServices = servicesData.map((service: any) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Map dynamic subservices — force slugs to lowercase to prevent capitalization issues
  const dynamicSubservices = subservicesData.services.map((sub: any) => {
    const rawSlug = sub.url_slug.startsWith('/') ? sub.url_slug : `/${sub.url_slug}`;
    // Lowercase the entire path to avoid canonical mismatches (e.g. Emirates-id → emirates-id)
    const slugPath = rawSlug.toLowerCase();
    return {
      url: `${baseUrl}${slugPath}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    };
  });

  // Map dynamic blogs
  const dynamicBlogs = postsData.map((post: any) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicServices, ...dynamicSubservices, ...dynamicBlogs];
}
