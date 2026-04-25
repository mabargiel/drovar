import { sanityClient } from "./client";

export type ProjektSketch = {
  _id: string;
  category: "modulowe" | "kasowe" | "bary";
  image: {
    _type: "image";
    asset: {
      _ref: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
  };
  order: number;
};

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

export async function getAllProjektSketches(): Promise<ProjektSketch[]> {
  return sanityClient.fetch(
    `*[_type == "projektSketch"] | order(category asc, order asc) {
      _id,
      category,
      image {
        _type,
        asset-> {
          "_ref": _id,
          url,
          metadata { dimensions { width, height } }
        }
      },
      order
    }`,
  );
}
