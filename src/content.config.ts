import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string().min(1).max(80),
    description: z.string().min(1).max(160),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string().min(1)).default([]),
  }),
});

export const collections = { posts };
