import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactPreview() {
  const locale = useLocale();
  const t = useTranslations("contactPreview");

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="animate-on-scroll animate-fade-up text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">{t("title")}</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            {t("description")}
          </p>
          <div className="mt-8">
            <Button variant="primary" href={`/${locale}/contact`}>
              {t("cta")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
