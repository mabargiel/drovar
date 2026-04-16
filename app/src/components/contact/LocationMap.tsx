import Image from "next/image";
import { MapPin } from "lucide-react";

type LocationMapProps = {
  image: string;
  alt: string;
  mapsUrl: string;
};

export default function LocationMap({ image, alt, mapsUrl }: LocationMapProps) {
  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-lg transition-opacity hover:opacity-90"
    >
      <Image
        src={image}
        alt={alt}
        width={800}
        height={450}
        className="block w-full"
      />
      <MapPin
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-accent [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.3))]"
        size={40}
        strokeWidth={2}
      />
      <span className="pointer-events-none absolute inset-[5px] rounded border border-current opacity-20" />
    </a>
  );
}
