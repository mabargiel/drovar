import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import { seedRealizations, type SeedRealization } from "./seed-data";

const PROJECT_ID = "ryxkay64";
const DATASET = "production";
const TOKEN = process.env.SANITY_WRITE_TOKEN;
const FORCE = process.argv.includes("--force");

if (!TOKEN) {
  console.error("Missing SANITY_WRITE_TOKEN env variable");
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-10-01",
  useCdn: false,
  token: TOKEN,
});

async function downloadBuffer(url: string): Promise<Buffer> {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function uploadImage(
  source: string,
  filename: string,
): Promise<{ _type: "image"; asset: { _type: "reference"; _ref: string } }> {
  let asset;

  if (source.startsWith("http")) {
    const buffer = await downloadBuffer(source);
    asset = await client.assets.upload("image", buffer, { filename });
  } else {
    const stream = createReadStream(source);
    asset = await client.assets.upload("image", stream, { filename });
  }

  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

async function seedRealization(data: SeedRealization, label: string) {
  console.log(`\n${label} ${data.title}`);

  console.log("  Uploading cover image...");
  const coverFilename = data.coverImageUrl.split("/").pop() || "cover.jpg";
  const coverImage = await uploadImage(data.coverImageUrl, coverFilename);

  console.log(`  Uploading ${data.galleryUrls.length} gallery images...`);
  const gallery = [];
  for (let i = 0; i < data.galleryUrls.length; i++) {
    const url = data.galleryUrls[i];
    const filename = url.split("/").pop() || `gallery-${i}.jpg`;
    try {
      const img = await uploadImage(url, filename);
      gallery.push({ ...img, _key: `gallery-${i}` });
      process.stdout.write(`  ${i + 1}/${data.galleryUrls.length}\r`);
    } catch (err) {
      console.warn(`  ⚠ Failed to upload gallery image ${i}: ${err}`);
    }
  }

  console.log("  Creating document...");
  const doc = {
    _type: "realization",
    title: data.title,
    slug: { _type: "slug", current: data.slug },
    category: data.category,
    coverImage,
    gallery,
    description: {
      _type: "localizedText",
      fr: data.description.fr,
      pl: data.description.pl,
      en: data.description.en,
      de: data.description.de,
      it: data.description.it,
    },
    ...(data.videoUrl ? { videoUrl: data.videoUrl } : {}),
    order: data.order,
  };

  const created = await client.create(doc);
  console.log(`  ✓ Created: ${created._id}`);
  return created;
}

async function main() {
  console.log("=== Drovar Realizations Seed Script ===");
  console.log(`Project: ${PROJECT_ID}, Dataset: ${DATASET}`);
  console.log(`Mode: ${FORCE ? "FORCE (full reseed)" : "delta (new only)"}\n`);

  if (FORCE) {
    const count = await client.fetch<number>(
      'count(*[_type == "realization"])',
    );
    if (count > 0) {
      console.log(`Deleting ${count} existing realizations...`);
      await client.delete({ query: '*[_type == "realization"]' });
      console.log("✓ Deleted.\n");
    }
  }

  const existingSlugs = FORCE
    ? new Set<string>()
    : new Set(
        await client.fetch<string[]>(
          '*[_type == "realization"].slug.current',
        ),
      );

  const newItems = seedRealizations.filter(
    (r) => !existingSlugs.has(r.slug),
  );

  if (newItems.length === 0) {
    console.log("No new realizations to seed. Everything is up to date.");
    return;
  }

  console.log(
    `Found ${newItems.length} new realization(s) to seed` +
      (existingSlugs.size > 0
        ? ` (${existingSlugs.size} already exist)`
        : ""),
  );

  for (let i = 0; i < newItems.length; i++) {
    try {
      await seedRealization(
        newItems[i],
        `[${i + 1}/${newItems.length}]`,
      );
    } catch (err) {
      console.error(`✗ Failed to seed "${newItems[i].title}":`, err);
    }
  }

  console.log("\n=== Seed complete! ===");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
