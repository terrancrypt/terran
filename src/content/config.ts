import { defineCollection, z } from "astro:content";
import type { CollectionEntry } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = { posts: postsCollection };
type Post = CollectionEntry<"posts">;
export type PostFrontmatter = Post["data"];
