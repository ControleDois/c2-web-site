import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/recursos`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/nichos`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/contato`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/termos-de-uso`, lastModified: now, priority: 0.3 },
    { url: `${SITE_URL}/politica-de-privacidade`, lastModified: now, priority: 0.3 },
  ];
}
