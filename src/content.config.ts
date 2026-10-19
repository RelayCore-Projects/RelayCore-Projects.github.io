// The content collections: the texts of the site, one Markdown file per page and language.
// The schema checks the data at the top of each file during the build.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projects: src/content/projects/<project>/<lang>.md
const projects = defineCollection({
	loader: glob({ pattern: '*/*.md', base: './src/content/projects' }),
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

// Text pages (home, about): src/content/pages/<page>/<lang>.md
const pages = defineCollection({
	loader: glob({ pattern: '*/*.md', base: './src/content/pages' }),
	schema: z.object({
		// The main heading of the page.
		title: z.string(),
		// The text in the browser tab; if missing, "<title> · RelayCore Projects".
		pageTitle: z.string().optional(),
		// Shown in search results; if missing, the site default.
		description: z.string().optional(),
		// Show the first paragraph larger, as an introduction.
		lead: z.boolean().default(false),
	}),
});

export const collections = { projects, pages };
