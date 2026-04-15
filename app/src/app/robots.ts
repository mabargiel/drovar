import type { MetadataRoute } from "next";

const BASE_URL = "https://drovar.pl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Block AI training bots
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "Google-Extended",
          "anthropic-ai",
          "ClaudeBot",
          "Bytespider",
          "FacebookBot",
          "cohere-ai",
          "Diffbot",
          "ImagesiftBot",
          "Omgilibot",
          "Omgili",
          "PerplexityBot",
          "YouBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
