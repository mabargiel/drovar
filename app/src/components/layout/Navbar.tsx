"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/pl", scroll: false },
  { key: "realizations", href: "/pl/realizations", scroll: false },
  { key: "about", href: "/#about", scroll: true },
  { key: "contact", href: "/pl/contact", scroll: false },
] as const;

function getLinkId(link: (typeof navLinks)[number]) {
  return "label" in link ? link.label : link.key;
}

function getLinkText(
  link: (typeof navLinks)[number],
  t: (key: string) => string,
) {
  return "label" in link ? link.label : t(link.key);
}

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isHome = pathname === "/pl" || pathname === "/pl/";
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

  function isActive(link: (typeof navLinks)[number]) {
    // Home link — active when on home page and no section is in view (top of page)
    if ("label" in link) {
      return isHome && !activeSection;
    }
    // Scroll link (about) — active when that section is in view
    if (link.scroll) {
      const id = link.href.replace("/#", "");
      return isHome && activeSection === id;
    }
    // Route links — active when pathname matches
    return pathname === link.href || pathname === `${link.href}/`;
  }

  function handleLinkClick(
    e: React.MouseEvent,
    link: (typeof navLinks)[number],
  ) {
    setMenuOpen(false);

    // Home link on home page — scroll to top
    if ("label" in link && isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Scroll link on home page
    if (link.scroll && isHome) {
      e.preventDefault();
      const id = link.href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function resolveHref(link: (typeof navLinks)[number]) {
    if (link.scroll && isHome) return link.href;
    if (link.scroll && !isHome) return `/pl/${link.href}`;
    return link.href;
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/pl" className="relative h-8 w-28 shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Drovar"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={getLinkId(link)}>
              <Link
                href={resolveHref(link)}
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

        <div className="hidden items-center gap-1 text-sm font-bold md:flex">
          <span className={scrolled ? "text-accent" : "text-cream"}>PL</span>
          <span className={scrolled ? "text-border" : "text-cream/30"}>|</span>
          <span
            className={`cursor-default ${scrolled ? "text-border" : "text-cream/30"}`}
            title="Coming soon"
          >
            EN
          </span>
          <span className={scrolled ? "text-border" : "text-cream/30"}>|</span>
          <span
            className={`cursor-default ${scrolled ? "text-border" : "text-cream/30"}`}
            title="Coming soon"
          >
            DE
          </span>
          <span className={scrolled ? "text-border" : "text-cream/30"}>|</span>
          <span
            className={`cursor-default ${scrolled ? "text-border" : "text-cream/30"}`}
            title="Coming soon"
          >
            IT
          </span>
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
                  href={resolveHref(link)}
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
