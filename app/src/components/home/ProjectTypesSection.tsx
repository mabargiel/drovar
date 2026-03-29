import { useTranslations } from "next-intl";
import { Store, Cigarette, Apple, Cross, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const types = [
  { key: "convenience", Icon: Store },
  { key: "tobacco", Icon: Cigarette },
  { key: "grocery", Icon: Apple },
  { key: "pharmacy", Icon: Cross },
  { key: "chains", Icon: Building2 },
] as const;

export default function ProjectTypesSection() {
  const t = useTranslations("projectTypes");

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading title={t("title")} centered />

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {types.map(({ key, Icon }) => (
            <div
              key={key}
              className="flex min-w-[140px] flex-col items-center gap-3 rounded-lg border border-border bg-cream-light p-6 transition-shadow hover:shadow-md"
            >
              <Icon className="h-8 w-8 text-accent" />
              <span className="text-center text-sm font-bold">{t(key)}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
