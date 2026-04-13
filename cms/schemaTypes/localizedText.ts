import { defineType } from "sanity";

export const localizedText = defineType({
  name: "localizedText",
  title: "Localized Text",
  type: "object",
  fields: [
    {
      name: "fr",
      title: "Français",
      type: "text",
      rows: 6,
    },
    {
      name: "pl",
      title: "Polski",
      type: "text",
      rows: 6,
    },
    {
      name: "en",
      title: "English",
      type: "text",
      rows: 6,
    },
    {
      name: "de",
      title: "Deutsch",
      type: "text",
      rows: 6,
    },
    {
      name: "it",
      title: "Italiano",
      type: "text",
      rows: 6,
    },
  ],
});
