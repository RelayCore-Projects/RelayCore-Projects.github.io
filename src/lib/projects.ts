// Helpers for the "projects" collection.
// Each project has a folder with one file per language, so an entry id looks like "pulzar/en".
import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';

// The projects in one language, in menu order.
export async function getProjects(lang: Lang) {
	const projects = await getCollection('projects', (project) => project.id.endsWith(`/${lang}`));
	return projects.sort((a, b) => a.data.order - b.data.order);
}

// The folder name, used in the URL: "pulzar/en" -> "pulzar".
export function projectSlug(project: CollectionEntry<'projects'>) {
	return project.id.split('/')[0];
}
