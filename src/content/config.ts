// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const caseCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    link: z.string(),
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

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'case': caseCollection,
  'blog': blogCollection,
  'team': teamCollection,
};