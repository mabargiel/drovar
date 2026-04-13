"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const heroImages = [
  "/assets/hero/hero-7.jpg",
  "/assets/hero/hero-1.jpg",
  "/assets/hero/hero-2.jpg",
  "/assets/hero/hero-3.jpg",
  "/assets/hero/hero-4.jpg",
  "/assets/hero/hero-5.jpg",
  "/assets/hero/hero-8.jpg",
];

const SLIDE_COUNT = heroImages.length;
const ROTATION_INTERVAL = 6000;

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDE_COUNT);
    }, ROTATION_INTERVAL);
  }

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function goToSlide(index: number) {
    setCurrent(index);
    startTimer();
  }

  return (
    <section className="relative flex h-dvh items-center justify-center overflow-hidden">
      {heroImages.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={t(`slides.${i}`)}
          fill
          className={`pointer-events-none object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-black/55" />

      <div className="pointer-events-none relative z-10 text-center">
        <h1
          className="text-5xl font-bold text-cream md:text-6xl lg:text-8xl"
          style={{ textShadow: "0 2px 30px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.6)" }}
        >
          {t("title")}
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 bg-accent" />
        <p
          className="mt-6 text-lg font-light tracking-[0.3em] uppercase text-cream/90 md:text-xl"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.5)" }}
        >
          {t("keywords")}
        </p>

        <div className="pointer-events-auto mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="primary" href={`/${locale}/realizations`}>
            {t("ctaPrimary")}
          </Button>
          <Button
            variant="outline"
            href={`/${locale}/contact`}
            className="!border-cream !text-cream hover:!bg-cream hover:!text-primary"
          >
            {t("ctaSecondary")}
          </Button>
        </div>
      </div>

      {/* Carousel dots */}
      <nav
        className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 gap-2.5"
        aria-label="Carousel"
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            className={`h-3 w-3 rounded-full border border-cream/50 transition-all ${
              i === current
                ? "scale-125 bg-accent border-accent"
                : "bg-cream/30 hover:bg-cream/60"
            }`}
            aria-label={t("goToSlide", { number: i + 1 })}
            aria-current={i === current ? "true" : undefined}
          />
        ))}
      </nav>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-cream/60 transition-colors hover:text-cream"
        aria-label={t("scrollDown")}
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  );
}
