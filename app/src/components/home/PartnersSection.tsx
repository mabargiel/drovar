import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PartnersSection() {
  const t = useTranslations("partners");

  return (
    <section className="bg-cream-light py-20 lg:py-28">
      <Container>
        <SectionHeading title={t("title")} centered />

        <div className="mt-12 flex justify-center">
          <a
            href="https://mdv-boutique.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-cream p-8 transition-shadow hover:shadow-md"
          >
            <span className="text-xl font-bold text-primary">
              MDV Boutique
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
