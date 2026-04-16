import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import LocationMap from "./LocationMap";
import { LOCATIONS } from "@/lib/locations";

export default function ContactInfo() {
  const t = useTranslations("contact.info");

  return (
    <div className="space-y-8">
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

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
            <FileText className="h-5 w-5 text-accent" />
          </div>
          <span className="font-bold">{t("nip")}</span>
        </div>
      </div>

      {LOCATIONS.map((location) => (
        <div
          key={location.key}
          className="space-y-4 border-t border-primary/10 pt-8"
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
            {t(`locations.${location.key}.label`)}
          </h3>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <address className="not-italic font-bold leading-relaxed">
              {location.companyName}
              <br />
              {location.street}
              <br />
              {location.cityLine}
            </address>
          </div>
          <LocationMap
            image={location.mapImage}
            alt={t(`locations.${location.key}.mapAlt`)}
            mapsUrl={location.mapsUrl}
          />
        </div>
      ))}
    </div>
  );
}
