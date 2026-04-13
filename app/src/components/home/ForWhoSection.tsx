import { useTranslations } from "next-intl";
import { Store, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ForWhoSection() {
  const t = useTranslations("forWho");

  return (
    <section className="bg-cream-light py-20 lg:py-28">
      <Container>
        <div className="animate-on-scroll animate-fade-up">
          <SectionHeading title={t("title")} centered />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="animate-on-scroll animate-fade-up rounded-lg border border-border bg-cream p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" data-delay="1">
            <Store className="mx-auto mb-4 h-10 w-10 text-accent" />
            <h3 className="mb-3 text-xl font-bold">
              {t("singleShops.title")}
            </h3>
            <p className="text-muted">{t("singleShops.description")}</p>
          </div>

          <div className="animate-on-scroll animate-fade-up rounded-lg border border-border bg-cream p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" data-delay="2">
            <Building2 className="mx-auto mb-4 h-10 w-10 text-accent" />
            <h3 className="mb-3 text-xl font-bold">{t("chains.title")}</h3>
            <p className="text-muted">{t("chains.description")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
