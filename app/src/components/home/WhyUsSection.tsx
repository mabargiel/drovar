import { useTranslations } from "next-intl";
import {
  Globe,
  Layers,
  Wrench,
  Settings,
  Clock,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  { key: "experience", Icon: Globe },
  { key: "fullService", Icon: Layers },
  { key: "custom", Icon: Wrench },
  { key: "proven", Icon: Settings },
  { key: "onTime", Icon: Clock },
] as const;

export default function WhyUsSection() {
  const t = useTranslations("whyUs");

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="animate-on-scroll animate-fade-up">
          <SectionHeading title={t("title")} centered />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map(({ key, Icon }, index) => (
            <div key={key} className="animate-on-scroll animate-fade-up text-center" data-delay={index + 1}>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wider">
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm text-muted">{t(`${key}.description`)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
