import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each case study is one markdown file in src/content/work/.
// The Work section on the landing page renders only when at least one exists.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    client: z.string().optional(),
    year: z.number().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { work };
