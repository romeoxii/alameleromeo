import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const items = [
  { slug: "kuroko", search: "Kuroko no Basket", type: "ANIME" },
  { slug: "aot", search: "Attack on Titan", type: "ANIME" },
  { slug: "fma", search: "Fullmetal Alchemist Brotherhood", type: "ANIME" },
  { slug: "overgeared", search: "Overgeared", type: "MANGA", country: "KR" },
  {
    slug: "absolute-regression",
    search: "Absolute Regression",
    type: "MANGA",
    country: "KR",
  },
  { slug: "murim-login", search: "Murim Login", type: "MANGA", country: "KR" },
  {
    slug: "reaper-drifting-moon",
    search: "Reaper of the Drifting Moon",
    type: "MANGA",
    country: "KR",
  },
];

const query = `
  query ($s: String, $t: MediaType, $c: CountryCode) {
    Media(search: $s, type: $t, countryOfOrigin: $c) {
      title { romaji english }
      coverImage { large }
      siteUrl
    }
  }`;

await mkdir("public/covers", { recursive: true });

for (const it of items) {
  if (existsSync(`public/covers/${it.slug}.jpg`)) {
    console.log(`- ${it.slug}: already exists, skipped`);
    continue;
  }

  for (const it of items) {
    const res = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { s: it.search, t: it.type, c: it.country },
      }),
    });
    const { data, errors } = await res.json();
    if (!data?.Media) {
      console.log(`✗ ${it.search}: no match`, errors?.[0]?.message ?? "");
      continue;
    }
    const m = data.Media;
    const img = await fetch(m.coverImage.large);
    await writeFile(
      `public/covers/${it.slug}.jpg`,
      Buffer.from(await img.arrayBuffer()),
    );
    console.log(
      `✓ ${it.slug}: ${m.title.english ?? m.title.romaji} → ${m.siteUrl}`,
    );
  }
}
