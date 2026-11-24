import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { fillNames } from './lib/names.mjs';

// Titles and descriptions may use %tokens% too (site.config.mjs).
const named = () => z.string().transform(fillNames);

// The guides are imported from the OS repository (scripts/import-guides.py); don't edit them here.
const guides = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guides' }),
  schema: z.object({
    title: named(),
    description: named(),
    order: z.number(),
    source: z.string(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/news' }),
  schema: z.object({
    title: named(),
    description: named(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides, news };
