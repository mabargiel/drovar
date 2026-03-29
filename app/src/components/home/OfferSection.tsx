import { useTranslations } from "next-intl";
import {
  ShoppingBag,
  Monitor,
  LayoutGrid,
  PanelLeftClose,
  Store,
  Cigarette,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const offerItems = [
  { key: "shelves", Icon: ShoppingBag },
  { key: "counters", Icon: Monitor },
  { key: "displays", Icon: LayoutGrid },
  { key: "wallUnits", Icon: PanelLeftClose },
  { key: "convenience", Icon: Store },
  { key: "tobacco", Icon: Cigarette },
] as const;

export default function OfferSection() {
  const t = useTranslations("offer");

  return (
    <section id="offer" className="py-20 lg:py-28">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerItems.map(({ key, Icon }) => (
            <div
              key={key}
              className="rounded-lg border border-border bg-cream-light p-6 transition-shadow hover:shadow-md"
            >
              <Icon className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-2 text-lg font-bold">{t(`${key}.title`)}</h3>
              <p className="text-sm text-muted">{t(`${key}.description`)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
