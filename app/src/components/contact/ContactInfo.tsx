import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import ContactMap from "./ContactMap";

export default function ContactInfo() {
  const t = useTranslations("contact.info");

  return (
    <div className="space-y-6">
      <a
        href={`tel:${t("phone").replace(/\s/g, "")}`}
        className="flex items-center gap-4 transition-colors hover:text-accent"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
          <Phone className="h-5 w-5 text-accent" />
        </div>
        <span className="font-bold">{t("phone")}</span>
      </a>

      <a
        href={`mailto:${t("email")}`}
        className="flex items-center gap-4 transition-colors hover:text-accent"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
          <Mail className="h-5 w-5 text-accent" />
        </div>
        <span className="font-bold">{t("email")}</span>
      </a>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
          <MapPin className="h-5 w-5 text-accent" />
        </div>
        <span className="whitespace-pre-line font-bold">{t("address")}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
          <FileText className="h-5 w-5 text-accent" />
        </div>
        <span className="font-bold">{t("nip")}</span>
      </div>

      <ContactMap />
    </div>
  );
}
