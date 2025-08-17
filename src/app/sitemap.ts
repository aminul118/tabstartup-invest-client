import { staticRoutes } from "@/seo/staticRoutes";
import { Routes } from "@/types";
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.tabedge.com";
const lastModified = new Date();

// Generate sitemap entries from a list of routes
const generateSitemapEntries = (routes: Routes[]): MetadataRoute.Sitemap => {
  return routes.map(({ url, changeFrequency, priority }) => ({
    url: `${BASE_URL}/${url}`.replace(/\/+$/, ""), // remove trailing slashes
    lastModified,
    changeFrequency,
    priority,
  }));
};

// Sitemap for Next.js
const sitemap = (): MetadataRoute.Sitemap => [
  ...generateSitemapEntries(staticRoutes),
];

export default sitemap;
