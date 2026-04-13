import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-on-scroll animate-fade-up">
            <SectionHeading title={t("title")} />
            <div className="mt-8 space-y-4">
              <p className="text-lg text-muted">{t("paragraph1")}</p>
              <p className="text-lg text-muted">{t("paragraph2")}</p>
            </div>
          </div>

          <div className="animate-on-scroll animate-fade-up relative aspect-[4/5] overflow-hidden rounded-lg" data-delay="2">
            <Image
              src="/assets/about-team.jpg"
              alt={t("title")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
