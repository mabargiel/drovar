"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex h-dvh items-center justify-center overflow-hidden">
      <Image
        src="/assets/hero-bg.png"
        alt=""
        fill
        className="scale-105 object-cover blur-[2px]"
        priority
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-cream md:text-6xl lg:text-8xl">
          {t("title")}
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 bg-accent" />
        <p className="mt-6 text-lg font-light tracking-[0.3em] uppercase text-cream/90 md:text-xl">
          {t("keywords")}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="primary" href="/pl/realizations">
            {t("ctaPrimary")}
          </Button>
          <Button
            variant="outline"
            href="/pl/contact"
            className="!border-cream !text-cream hover:!bg-cream hover:!text-primary"
          >
            {t("ctaSecondary")}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/60 transition-colors hover:text-cream"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  );
}
