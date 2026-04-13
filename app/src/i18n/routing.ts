import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pl", "de", "it"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: true,
});
