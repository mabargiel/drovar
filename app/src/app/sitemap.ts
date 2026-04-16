import type { MetadataRoute } from "next";
import { getAllRealizations } from "@/lib/sanity/queries";

const BASE_URL = "https://drovar.pl";
const LOCALES = ["en", "pl", "de", "it"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (process.env.SITE_AUTH_BASIC) {
    return [];
  }

  const realizations = await getAllRealizations();

  const staticRoutes = ["", "/contact", "/realizations"];

  const staticEntries = staticRoutes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}${route}`]),
        ),
      },
    })),
  );

  const realizationEntries = realizations.flatMap((r) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/realizations/${r.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}/realizations/${r.slug}`]),
        ),
      },
    })),
  );

  return [...staticEntries, ...realizationEntries];
}
