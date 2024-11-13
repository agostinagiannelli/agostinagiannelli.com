import { z, defineCollection } from 'astro:content';

const portfolioCollection = defineCollection({
  schema: z.object({
    order: z.number(),
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    link: z.string().optional(),
    tools: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      device: z.string(),
    }),
    overview: z.string(),
    challenge: z.string(),
    hypothesis: z.string(),
    implementation: z.string(),
    outcome: z.string(),
  }),
});

export const collections = {
  'portfolio': portfolioCollection,
};