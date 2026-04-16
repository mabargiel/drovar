export type LocationKey = "headquarters" | "production";

export type Location = {
  key: LocationKey;
  /** Translation key under `contact.info.locations.<key>.label` */
  roleLabelKey: string;
  /** Translation key under `contact.info.locations.<key>.mapAlt` */
  mapAltKey: string;
  /** Untranslated company name as it appears on the building / in the registry */
  companyName: string;
  /** Untranslated street + building number */
  street: string;
  /** Untranslated postal code + city (+ country if non-PL) */
  cityLine: string;
  /** External maps URL opened on map tap */
  mapsUrl: string;
  /** Path under /public served as a static asset */
  mapImage: string;
};

export const LOCATIONS: readonly Location[] = [
  {
    key: "headquarters",
    roleLabelKey: "contact.info.locations.headquarters.label",
    mapAltKey: "contact.info.locations.headquarters.mapAlt",
    companyName: "Drovar Sp. z o.o.",
    street: "ul. Sebastiana 12",
    cityLine: "32-020 Wieliczka, Polska",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Drovar+ul.+Sebastiana+12+32-020+Wieliczka",
    mapImage: "/images/map-wieliczka.png",
  },
  {
    key: "production",
    roleLabelKey: "contact.info.locations.production.label",
    mapAltKey: "contact.info.locations.production.mapAlt",
    companyName: "Drovar Sp. z o.o. (Fabryka Mebli „Ryś” Hala N2)",
    street: "Polanka 287",
    cityLine: "32-400 Myślenice, Polska",
    mapsUrl: "https://maps.app.goo.gl/7SyUo4HkR42GgoaZA",
    mapImage: "/images/map-myslenice.png",
  },
] as const;
