import { siteConfig } from "@/config/site";
import { source } from "@/lib/source";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const docRoutes: MetadataRoute.Sitemap = source.getPages().map((page) => {
    // Higher priority for component pages
    const isComponentPage = page.slugs[0] === "components";
    
    return {
      url: `${baseUrl}/docs/${page.slugs.join("/")}`,
      lastModified: currentDate,
      changeFrequency: isComponentPage ? "weekly" : "monthly",
      priority: isComponentPage ? 0.8 : 0.6,
    };
  });

  return [...staticRoutes, ...docRoutes];
}
