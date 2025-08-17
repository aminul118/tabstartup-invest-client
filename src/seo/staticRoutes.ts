import { Routes } from '@/types';

const staticRoutes: Routes[] = [
  {
    url: '',
    changeFrequency: 'monthly',
    priority: 1.0,
  },
  {
    url: 'about',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'fintech',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'contact',
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    url: 'privacy-policy',
    changeFrequency: 'monthly',
    priority: 0.5,
  },
];

export { staticRoutes };
