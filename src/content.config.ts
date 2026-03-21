import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    longDescription: z.string(),
    includes: z.array(
      z.object({
        name: z.string(),
        detail: z.string(),
      })
    ),
    order: z.number(),
  }),
});

export const collections = { services };
