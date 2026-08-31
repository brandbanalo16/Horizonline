import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js', // This tells Turbopack to treat the SVG as a JavaScript module
      },
    },
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
      issuer: {
        and: [/\.(js|ts|md)x?$/], // Apply only when imported from JS/TS/MDX
      },
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.horizononlineuae.com',
          },
        ],
        destination: 'https://horizononlineuae.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

