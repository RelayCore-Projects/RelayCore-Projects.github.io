// The "projects" collection: one Markdown file per project in src/content/projects/.
// The schema checks the data at the top of each file during the build.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		status: z.string(),
		order: z.number(),
		repo: z.url(),
		download: z.url(),
		tech: z.array(z.string()),
	}),
});

export const collections = { projects };
