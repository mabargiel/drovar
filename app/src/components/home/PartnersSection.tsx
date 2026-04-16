import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PartnersSection() {
  const t = useTranslations("partners");

  return (
    <section className="bg-cream-light py-20 lg:py-28">
      <Container>
        <div className="animate-on-scroll animate-fade-up">
          <SectionHeading title={t("title")} centered />
        </div>

        <div
          className="animate-on-scroll animate-fade-up mt-12 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16"
          data-delay="1"
        >
          <a
            href="https://mdv-boutique.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
          >
            <Image
              src="/assets/mdv-boutique-logo.png"
              alt="MDV Boutique"
              width={300}
              height={91}
              className="h-16 w-auto invert"
            />
          </a>

          <a
            href="https://www.bio-concept-pharma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
          >
            <Image
              src="/assets/bio-concept-pharma-logo.svg"
              alt="Bio Concept E-liquides"
              width={290}
              height={94}
              className="h-16 w-auto"
            />
          </a>

          <a
            href="https://www.maisondevapotage.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
          >
            <Image
              src="/assets/maison-de-vapotage-logo.png"
              alt="Maison de Vapotage"
              width={357}
              height={114}
              className="h-16 w-auto"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
