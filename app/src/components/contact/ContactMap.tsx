import Image from "next/image";
import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Drovar+ul.+Sebastiana+12+32-020+Wieliczka";

export default function ContactMap() {
  const t = useTranslations("contact.info");

  return (
    <a
      href={GOOGLE_MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-lg transition-opacity hover:opacity-90"
    >
      <Image
        src="/images/map-wieliczka.png"
        alt={t("address")}
        width={800}
        height={450}
        className="block w-full"
      />
      <MapPin
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-accent drop-shadow-md"
        size={40}
        strokeWidth={2}
      />
      <span className="pointer-events-none absolute inset-[5px] rounded border border-current opacity-20" />
    </a>
  );
}
