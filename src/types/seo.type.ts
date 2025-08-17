export interface MetaProps {
  title: string;
  description: string;
  keywords: string | string[]; // supports both single string or array of keywords
  image?: string | string[]; // supports single image or multiple images
  siteUrlPath?: string;
}

export interface Routes {
  url: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}
