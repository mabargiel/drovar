import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RealizationCard from "@/components/realizations/RealizationCard";
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
        <SectionHeading
          title={t("pageTitle")}
          subtitle={t("pageSubtitle")}
          centered
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {realizations.map((realization) => (
            <RealizationCard key={realization._id} realization={realization} />
          ))}
        </div>
      </Container>
    </section>
  );
}
