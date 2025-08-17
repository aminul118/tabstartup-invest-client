import { MetaProps } from '@/types';
import { Metadata } from 'next';

const baseUrl = 'https://www.tabedge.com';

export const generateMetaTags = ({
  title,
  description,
  keywords,
  image = './ss/hero-bg.png',
  siteUrlPath = '',
}: MetaProps): Metadata => {
  const normalizedPath = siteUrlPath.replace(/^\/+/, ''); // prevent double slashes
  const imageUrl = Array.isArray(image) ? image : [image];

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,
    category: 'Investor',
    openGraph: {
      type: 'website',
      url: `${baseUrl}/${normalizedPath}`,
      title,
      description,
      siteName: 'Tabedge',
      images: imageUrl.map((img) => ({
        url: img,
        alt: title,
      })),
    },
    robots: { index: true, follow: true },
    twitter: {
      card: 'summary_large_image',
      site: '@tabedge',
      creator: '@tabedge',
      title,
      description,
      images: imageUrl,
    },
    applicationName: 'Tabedge',
    alternates: {
      canonical: `${baseUrl}/${normalizedPath}`,
      languages: {
        'en-US': `${baseUrl}/en-US`,
      },
    },
    other: {
      'facebook:app_id': '580317868506376',
    },
    manifest: '/manifest.webmanifest',
    authors: [
      {
        name: 'Tabedge',
      },
    ],
  };
};
