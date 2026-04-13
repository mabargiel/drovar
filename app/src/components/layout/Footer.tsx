import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact.info");

  const footerLinks = [
    { label: "Home", href: `/${locale}` },
    { key: "realizations", href: `/${locale}/realizations` },
    { key: "about", href: `/${locale}/#about` },
    { key: "contact", href: `/${locale}/contact` },
  ] as const;

  return (
    <footer className="bg-primary-dark py-12 text-cream lg:py-16">
      <Container>
        <div className="animate-on-scroll animate-fade-in grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="mb-4 block">
              <img
                src="/assets/logo-light.svg"
                alt="Drovar"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-cream-dark">{t("description")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              {t("navigation")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={"label" in link ? link.label : link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-dark transition-colors hover:text-cream"
                  >
                    {"label" in link ? link.label : tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              {t("contactTitle")}
            </h3>
            <ul className="space-y-2 text-sm text-cream-dark">
              <li>
                <a
                  href={`tel:${tContact("phone").replace(/\s/g, "")}`}
                  className="transition-colors hover:text-cream"
                >
                  {tContact("phone")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${tContact("email")}`}
                  className="transition-colors hover:text-cream"
                >
                  {tContact("email")}
                </a>
              </li>
              <li>{tContact("address")}</li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              {t("partnersTitle")}
            </h3>
            <a
              href="https://mdv-boutique.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream-dark transition-colors hover:text-cream"
            >
              MDV Boutique
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-cream/10 pt-6 text-sm text-cream-dark md:flex-row">
          <span>{t("copyright", { year: new Date().getFullYear() })}</span>
          <span>{t("madeBy")} Mateusz Bargiel</span>
        </div>
      </Container>
    </footer>
  );
}
