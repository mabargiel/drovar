"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjektSketch } from "@/lib/sanity/queries";
import { sanityImageUrl } from "@/lib/sanity/image";

type ProjektyGridProps = {
  sketches: ProjektSketch[];
  categoryLabel: string;
};

export default function ProjektyGrid({
  sketches,
  categoryLabel,
}: ProjektyGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }

  const navigate = useCallback(
    (direction: -1 | 1) => {
      if (lightboxIndex === null) return;
      setLightboxIndex(
        (lightboxIndex + direction + sketches.length) % sketches.length,
      );
    },
    [lightboxIndex, sketches.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, navigate]);

  if (sketches.length === 0) return null;

  return (
    <>
      <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
        {sketches.map((sketch, i) => {
          const { width, height } = sketch.image.asset.metadata.dimensions;
          const thumbUrl = sanityImageUrl(sketch.image)
            .width(900)
            .format("webp")
            .url();

          return (
            <button
              key={sketch._id}
              type="button"
              onClick={() => openLightbox(i)}
              className="group mb-5 block w-full break-inside-avoid border border-border/30 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <Image
                src={thumbUrl}
                alt={`${categoryLabel} — ${i + 1}`}
                width={width}
                height={height}
                className="w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={categoryLabel}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {sketches.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(-1);
                }}
                className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(1);
                }}
                className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="relative h-[85vh] w-[92vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={sanityImageUrl(sketches[lightboxIndex].image)
                .width(1800)
                .format("webp")
                .url()}
              alt={`${categoryLabel} — ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="92vw"
              priority
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {lightboxIndex + 1} / {sketches.length}
          </div>
        </div>
      )}
    </>
  );
}
