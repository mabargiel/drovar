"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const locales = ["pl", "en", "de", "it"] as const;

type NavLink =
  | { label: string; path: string; scroll: false }
  | { key: string; path: string; scroll: false }
  | { key: string; path: string; scroll: true };

const navLinks: NavLink[] = [
  { label: "Home", path: "", scroll: false },
  { key: "realizations", path: "/realizations", scroll: false },
  { key: "about", path: "/#about", scroll: true },
  { key: "contact", path: "/contact", scroll: false },
];

function getLinkId(link: NavLink) {
  return "label" in link ? link.label : link.key;
}

function getLinkText(link: NavLink, t: (key: string) => string) {
  return "label" in link ? link.label : t(link.key);
}

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const homePath = `/${locale}`;
  const isHome = pathname === homePath || pathname === `${homePath}/`;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ["about"];
      let current: string | null = null;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  function getHref(link: NavLink) {
    if (link.scroll && isHome) return link.path;
    if (link.scroll && !isHome) return `/${locale}${link.path}`;
    return `/${locale}${link.path}`;
  }

  function isActive(link: NavLink) {
    if ("label" in link) return isHome && !activeSection;
    if (link.scroll) {
      const id = link.path.replace("/#", "");
      return isHome && activeSection === id;
    }
    const href = `/${locale}${link.path}`;
    return pathname === href || pathname === `${href}/`;
  }

  function handleLinkClick(e: React.MouseEvent, link: NavLink) {
    setMenuOpen(false);

    if ("label" in link && isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (link.scroll && isHome) {
      e.preventDefault();
      const id = link.path.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function switchLocalePath(targetLocale: string) {
    return pathname.replace(`/${locale}`, `/${targetLocale}`);
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href={`/${locale}`} className="shrink-0">
          <img
            src={scrolled ? "/assets/logo.svg" : "/assets/logo-light.svg"}
            alt="Drovar"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={getLinkId(link)}>
              <Link
                href={getHref(link)}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive(link)
                    ? scrolled
                      ? "text-accent"
                      : "text-accent-light"
                    : scrolled
                      ? "text-primary hover:text-accent"
                      : "text-cream hover:text-accent-light"
                }`}
              >
                {getLinkText(link, t)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language switcher */}
        <div className="hidden items-center gap-1 text-sm font-bold md:flex">
          {locales.map((loc, i) => (
            <span key={loc} className="flex items-center gap-1">
              {i > 0 && (
                <span className={scrolled ? "text-border" : "text-cream/30"}>
                  |
                </span>
              )}
              {loc === locale ? (
                <span className={scrolled ? "text-accent" : "text-cream"}>
                  {loc.toUpperCase()}
                </span>
              ) : (
                <Link
                  href={switchLocalePath(loc)}
                  className={`transition-colors ${
                    scrolled
                      ? "text-primary-light hover:text-accent"
                      : "text-cream/60 hover:text-cream"
                  }`}
                >
                  {loc.toUpperCase()}
                </Link>
              )}
            </span>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden ${
            scrolled ? "text-primary" : "text-cream"
          }`}
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-cream md:hidden">
          <ul className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => (
              <li key={getLinkId(link)}>
                <Link
                  href={getHref(link)}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-lg font-bold uppercase tracking-wider transition-colors ${
                    isActive(link)
                      ? "text-accent"
                      : "text-primary hover:text-accent"
                  }`}
                >
                  {getLinkText(link, t)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
