import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/home-2',
          '/home-3',
          '/home-4',
          '/home-5',
          '/home-6',
          '/home-7',
          '/home-8',
          '/home-9',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://www.horizonlineuae.com/sitemap.xml',
  };
}
