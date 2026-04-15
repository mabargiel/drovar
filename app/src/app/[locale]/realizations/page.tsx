import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RealizationGrid from "@/components/realizations/RealizationGrid";
import { getAllRealizations } from "@/lib/sanity/queries";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "realizations" });

  return {
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    alternates: {
      canonical: `https://drovar.pl/${locale}/realizations`,
      languages: Object.fromEntries(
        ["en", "pl", "de", "it"].map((l) => [
          l,
          `https://drovar.pl/${l}/realizations`,
        ]),
      ),
    },
  };
}

export default async function RealizationsPage() {
  const realizations = await getAllRealizations();

  return <RealizationsPageContent realizations={realizations} />;
}

function RealizationsPageContent({
  realizations,
}: {
  realizations: Awaited<ReturnType<typeof getAllRealizations>>;
}) {
  const t = useTranslations("realizations");

  return (
    <section className="pt-28 pb-20 lg:pb-28">
      <Container>
        <div className="animate-on-scroll animate-fade-up">
          <SectionHeading
            title={t("pageTitle")}
            subtitle={t("pageSubtitle")}
            centered
          />
        </div>

        <RealizationGrid realizations={realizations} batchSize={12} />
      </Container>
    </section>
  );
}
