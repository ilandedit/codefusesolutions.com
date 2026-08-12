import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each case study is one markdown file in src/content/work/.
// Screenshots live in src/assets/work/<slug>/ so Astro can optimise them
// (resize, modern formats, intrinsic dimensions). Video lives in
// public/work/<slug>/ and ships as-authored — Astro does not transcode video.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      client: z.string().optional(),
      year: z.number().optional(),
      order: z.number().default(0),

      // Card thumbnail and the case study's lead image. A bad path fails the
      // build rather than shipping a broken image.
      cover: image().optional(),
      coverAlt: z.string().optional(),

      // Additional screenshots shown after the write-up.
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          })
        )
        .optional(),

      // A screen recording. src is a path under public/, e.g.
      // /work/dispatch-system/demo.mp4 — see README for the encode recipe.
      video: z
        .object({
          src: z.string(),
          poster: image().optional(),
          caption: z.string().optional(),
          // Short silent loops can autoplay; anything longer stays click-to-play.
          autoplay: z.boolean().default(false),
        })
        .optional(),

      // Illustrative entries, not real client engagements. They publish with
      // a visible Sample badge everywhere they appear, so the live site never
      // claims work that doesn't exist.
      sample: z.boolean().default(false),
    }),
});

export const collections = { work };
