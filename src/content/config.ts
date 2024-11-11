import { z, defineCollection } from 'astro:content';

const caseCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    order: z.number(),
    link: z.string().optional(),
    tools: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      device: z.string(),
    }),
    description: z.string(),
    challenge: z.string(),
    goal: z.string(),
    hypothesis: z.string(),
    implementation: z.string(),
    outcome: z.string(),
    keyLearnings: z.string(),
  }),
});

export const collections = {
  'case': caseCollection,
};