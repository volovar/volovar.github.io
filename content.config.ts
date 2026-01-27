import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod/v4";

export default defineContentConfig({
  collections: {
    jobs: defineCollection({
      type: "data",
      source: "jobs/**.json",
      schema: z.object({
        title: z.string(),
        company: z.string(),
        location: z.string(),
        start: z.string(),
        end: z.string(),
        tech: z.array(z.string()),
        bullets: z.array(z.string()),
      }),
    }),
  },
});
