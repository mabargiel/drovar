import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import RealizationGallery from "@/components/realizations/RealizationGallery";
import { getRealizationBySlug } from "@/lib/sanity/queries";
import { sanityImageUrl } from "@/lib/sanity/image";

function extractYouTubeId(url: string): string {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/,
  );
  return match?.[1] ?? "";
}

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const realization = await getRealizationBySlug(slug);

  if (!realization) return {};

  const description =
    realization.description?.[locale as keyof typeof realization.description] ??
    realization.description?.en ??
    "";

  const ogImage = sanityImageUrl(realization.coverImage)
    .width(1200)
    .height(630)
    .format("webp")
    .url();

  return {
    title: realization.title,
    description: description || undefined,
    openGraph: {
      title: realization.title,
      description: description || undefined,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://drovar.pl/${locale}/realizations/${slug}`,
      languages: Object.fromEntries(
        ["en", "pl", "de", "it"].map((l) => [
          l,
          `https://drovar.pl/${l}/realizations/${slug}`,
        ]),
      ),
    },
  };
}

export default async function RealizationDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const realization = await getRealizationBySlug(slug);

  if (!realization) notFound();

  const t = await getTranslations("realizationDetail");
  const tCat = await getTranslations("categories");
  const description =
    realization.description?.[locale as keyof typeof realization.description] ??
    realization.description?.en ??
    realization.description?.fr ??
    "";

  const coverUrl = sanityImageUrl(realization.coverImage)
    .width(1920)
    .format("webp")
    .url();

  return (
    <>
      {/* Hero banner */}
      <section className="animate-on-scroll animate-fade-in relative flex h-[50vh] min-h-[320px] items-end overflow-hidden">
        <Image
          src={coverUrl}
          alt={realization.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <Container>
          <div className="relative z-10 pb-10">
            <span
              className="text-xs font-bold uppercase tracking-wider text-accent"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
            >
              {tCat(realization.category)}
            </span>
            <h1
              className="mt-2 text-3xl font-bold text-cream md:text-4xl lg:text-5xl"
              style={{
                textShadow:
                  "0 2px 30px rgba(0,0,0,0.95), 0 0 80px rgba(0,0,0,0.6), 0 0 4px rgba(0,0,0,0.9)",
              }}
            >
              {realization.title}
            </h1>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="animate-on-scroll animate-fade-up py-12 lg:py-20">
        <Container>
          <Link
            href={`/${locale}/realizations`}
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToList")}
          </Link>

          {(description || realization.videoUrl) && (
            <div className={`mb-12 ${realization.videoUrl && description ? "grid items-start gap-8 lg:grid-cols-2" : ""}`}>
              {description && (
                <div>
                  <p className="text-lg leading-relaxed text-primary-light">
                    {description}
                  </p>
                </div>
              )}
              {realization.videoUrl && (
                <div className="aspect-video overflow-hidden rounded-lg">
                  <YouTubeEmbed
                    videoId={extractYouTubeId(realization.videoUrl)}
                    title={realization.title}
                  />
                </div>
              )}
            </div>
          )}

          {realization.gallery && realization.gallery.length > 0 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold">{t("gallery")}</h2>
              <RealizationGallery
                images={realization.gallery}
                title={realization.title}
              />
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
