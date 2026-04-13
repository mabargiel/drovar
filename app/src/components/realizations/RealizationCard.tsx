import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import type { SanityRealization } from "@/lib/sanity/queries";
import { sanityImageUrl } from "@/lib/sanity/image";

type RealizationCardProps = {
  realization: SanityRealization;
};

export default function RealizationCard({ realization }: RealizationCardProps) {
  const locale = useLocale();
  const t = useTranslations("categories");
  const imageUrl = sanityImageUrl(realization.coverImage)
    .width(800)
    .format("webp")
    .url();

  return (
    <Link
      href={`/${locale}/realizations/${realization.slug}`}
      className="group overflow-hidden rounded-lg border border-border bg-cream-light transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={imageUrl}
          alt={realization.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-bold uppercase tracking-wider text-accent">
          {t(realization.category)}
        </span>
        <h3 className="mt-1 font-bold">{realization.title}</h3>
      </div>
    </Link>
  );
}
