import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ghunghat.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/account/",
          "/cart/",
          "/checkout/",
          "/login/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
