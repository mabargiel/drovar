import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./client";
import type { SanityImage } from "./queries";

const builder = createImageUrlBuilder(sanityClient);

export function sanityImageUrl(image: SanityImage) {
  return builder.image(image);
}
