import { useTranslations } from "next-intl";
import { Truck, HardHat } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AssemblySection() {
  const t = useTranslations("assembly");

  return (
    <section className="bg-primary-dark py-20 text-cream lg:py-28">
      <Container>
        <SectionHeading title={t("title")} centered light />

        <div className="mt-8 flex justify-center gap-6">
          <Truck className="h-8 w-8 text-accent" />
          <HardHat className="h-8 w-8 text-accent" />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-cream/80">
          {t("description")}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center font-bold text-accent">
          {t("subtitle")}
        </p>
      </Container>
    </section>
  );
}
