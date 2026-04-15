import { sanityClient } from "./client";

export type SanityRealization = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  coverImage: SanityImage;
  gallery: SanityImage[];
  description: {
    fr?: string;
    pl?: string;
    en?: string;
    de?: string;
    it?: string;
  };
  videoUrl?: string;
  order: number;
};

export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    url: string;
  };
};

const realizationListFields = `
  _id,
  title,
  "slug": slug.current,
  category,
  coverImage {
    _type,
    asset-> { "_ref": _id, url }
  },
  order
`;

const realizationDetailFields = `
  _id,
  title,
  "slug": slug.current,
  category,
  coverImage {
    _type,
    asset-> { "_ref": _id, url }
  },
  gallery[] {
    _type,
    asset-> { "_ref": _id, url }
  },
  description,
  videoUrl,
  order
`;

export async function getAllRealizations(): Promise<SanityRealization[]> {
  return sanityClient.fetch(
    `*[_type == "realization"] | order(order asc) { ${realizationListFields} }`,
  );
}

export async function getRealizationBySlug(
  slug: string,
): Promise<SanityRealization | null> {
  return sanityClient.fetch(
    `*[_type == "realization" && slug.current == $slug][0] { ${realizationDetailFields} }`,
    { slug },
  );
}
