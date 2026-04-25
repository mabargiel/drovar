import { Suspense } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjektyTabs from "@/components/projekty/ProjektyTabs";
import { getAllProjektSketches } from "@/lib/sanity/queries";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projekty" });

  return {
    title: t("title"),
    alternates: {
      canonical: `https://drovar.pl/${locale}/projekty`,
      languages: Object.fromEntries(
        ["en", "pl", "de", "it"].map((l) => [
          l,
          `https://drovar.pl/${l}/projekty`,
        ]),
      ),
    },
  };
}

export default async function ProjektyPage() {
  const sketches = await getAllProjektSketches();

  return <ProjektyPageContent sketches={sketches} />;
}

function ProjektyPageContent({
  sketches,
}: {
  sketches: Awaited<ReturnType<typeof getAllProjektSketches>>;
}) {
  const t = useTranslations("projekty");

  return (
    <section className="pt-28 pb-20 lg:pb-28">
      <Container>
        <div className="animate-on-scroll animate-fade-up mb-12">
          <SectionHeading title={t("title")} centered />
        </div>

        <Suspense fallback={<div className="h-32" />}>
          <ProjektyTabs sketches={sketches} />
        </Suspense>
      </Container>
    </section>
  );
}
