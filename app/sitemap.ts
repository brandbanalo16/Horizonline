import { MetadataRoute } from 'next';
import servicesData from '@/data/services.json';
import subservicesData from '@/data/subservice.json';
import postsData from '@/data/posts.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.horizonlineuae.com';

  const staticRoutes = [
    '',
    '/about-us',
    '/services',
    '/blogs',
    '/blogs-list',
    '/contact-us',
    '/faq',
    '/pricing-plan',
    '/privacy-policy',
    '/projects',
    '/teams',
    '/terms-condition',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Map dynamic services
  const dynamicServices = servicesData.map((service: any) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Map dynamic subservices
  const dynamicSubservices = subservicesData.services.map((sub: any) => {
    // Some url_slugs in the JSON might start with a slash, some might not. Ensure format:
    const slugPath = sub.url_slug.startsWith('/') ? sub.url_slug : `/${sub.url_slug}`;
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
