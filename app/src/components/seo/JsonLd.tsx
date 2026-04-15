type JsonLdProps = {
  data: Record<string, unknown>;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Drovar",
  description:
    "Shop fitting company — design, manufacturing, transport and installation of shop interiors.",
  url: "https://drovar.pl",
  telephone: "+48796694327",
  email: "info@drovar.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Sebastiana 12",
    addressLocality: "Wieliczka",
    postalCode: "32-020",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.9872,
    longitude: 20.0659,
  },
  taxID: "PL6832109118",
  image: "https://drovar.pl/opengraph-image.png",
  priceRange: "$$",
  areaServed: ["PL", "DE", "IT", "GB"],
  serviceType: [
    "Shop fitting",
    "Retail interior design",
    "Shop shelving manufacturing",
    "Sales counter production",
  ],
};
