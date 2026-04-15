"use client";

import { useState, useEffect, useRef } from "react";
import RealizationCard from "./RealizationCard";
import type { SanityRealization } from "@/lib/sanity/queries";

type RealizationGridProps = {
  realizations: SanityRealization[];
  batchSize: number;
};

export default function RealizationGrid({
  realizations,
  batchSize,
}: RealizationGridProps) {
  const [visible, setVisible] = useState(batchSize);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible((prev) => Math.min(prev + batchSize, realizations.length));
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [batchSize, realizations.length]);

  const shown = realizations.slice(0, visible);

  return (
    <>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((realization, index) => (
          <div
            key={realization._id}
            className="animate-on-scroll animate-fade-up"
            data-delay={(index % 3) + 1}
          >
            <RealizationCard realization={realization} />
          </div>
        ))}
      </div>

      {visible < realizations.length && (
        <div ref={sentinelRef} className="h-1" />
      )}
    </>
  );
}
