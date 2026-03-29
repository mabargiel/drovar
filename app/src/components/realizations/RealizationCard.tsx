import Image from "next/image";
import type { Realization } from "@/lib/data/realizations";

type RealizationCardProps = {
  realization: Realization;
};

export default function RealizationCard({ realization }: RealizationCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-cream-light transition-shadow hover:shadow-lg">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={realization.coverImage}
          alt={realization.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-bold uppercase tracking-wider text-accent">
          {realization.category}
        </span>
        <h3 className="mt-1 font-bold">{realization.title}</h3>
      </div>
    </div>
  );
}
