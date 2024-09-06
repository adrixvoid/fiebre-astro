import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    preview: z.string().optional(),
  }),
});

const portfolio = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    preview: z.string().optional(),
    categories: z.array(z.string()),
    background: z.string().optional(),
    color: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog, portfolio };
