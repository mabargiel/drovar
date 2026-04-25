import { defineField, defineType } from "sanity";

export const projektSketch = defineType({
  name: "projektSketch",
  title: "Projekt (Szkic)",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Kategoria",
      type: "string",
      options: {
        list: [
          { title: "Meble modułowe", value: "modulowe" },
          { title: "Meble kasowe", value: "kasowe" },
          { title: "Bary", value: "bary" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Zdjęcie",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Kolejność",
      type: "number",
      description: "Kolejność wyświetlania w obrębie kategorii (rosnąco)",
    }),
  ],
  preview: {
    select: {
      media: "image",
      category: "category",
      order: "order",
    },
    prepare({ media, category, order }) {
      const labels: Record<string, string> = {
        modulowe: "Meble modułowe",
        kasowe: "Meble kasowe",
        bary: "Bary",
      };
      return {
        title: labels[category] ?? category,
        subtitle: order != null ? `Kolejność: ${order}` : undefined,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Kategoria + Kolejność",
      name: "categoryOrderAsc",
      by: [
        { field: "category", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
});
