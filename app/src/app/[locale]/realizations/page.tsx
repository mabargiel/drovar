import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RealizationCard from "@/components/realizations/RealizationCard";
import RealizationGrid from "@/components/realizations/RealizationGrid";
import { getAllRealizations } from "@/lib/sanity/queries";

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
