import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RealizationCard from "@/components/realizations/RealizationCard";
import { realizations } from "@/lib/data/realizations";

export default function RealizationsPreview() {
  const t = useTranslations("realizations");
  const preview = realizations.slice(0, 4);

  return (
    <section className="bg-cream-light py-20 lg:py-28">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
          <Link
            href="/pl/realizations"
            className="hidden items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-accent md:flex"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((realization) => (
            <RealizationCard key={realization.id} realization={realization} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/pl/realizations"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-accent"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
