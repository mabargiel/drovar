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

        <div className="animate-on-scroll animate-fade-up mt-12 flex justify-center" data-delay="1">
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
        </div>
      </Container>
    </section>
  );
}
