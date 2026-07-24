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
    // Placeholder entries for previewing layout. They render in dev with a
    // visible Sample badge and are stripped from production builds, so the
    // live site can never claim work that doesn't exist.
    sample: z.boolean().default(false),
  }),
});

export const collections = { work };
