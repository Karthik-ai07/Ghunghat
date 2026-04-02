import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ghunghat.com";
  const now = new Date();

  const publicRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/skincare", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/makeup", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/ayurvedic", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/gifting", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/shade-finder", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/shipping", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  return publicRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
