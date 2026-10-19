// The languages of the site and the short texts of the menu and buttons.
// English is the default and has no prefix in the URL; Hungarian pages are under /hu/.
import { getRelativeLocaleUrl } from 'astro:i18n';

export const languages = {
	en: 'English',
	hu: 'Magyar',
};

export type Lang = keyof typeof languages;

const en = {
	'site.description': 'Personal projects of Simon Richárd Tamás, software tester.',
	'nav.main': 'Main',
	'nav.projects': 'Projects',
	'nav.about': 'About me',
	'nav.language': 'Language',
	'theme.dark': 'Dark mode',
	'project.download': 'Download the APK',
	'project.source': 'Source code on GitHub',
	'project.tech': 'Tech',
};

// The Hungarian list must have the same keys as the English one; VS Code marks a missing key in red.
const hu: typeof en = {
	'site.description': 'Simon Richárd Tamás szoftvertesztelő saját projektjei.',
	'nav.main': 'Főmenü',
	'nav.projects': 'Projektek',
	'nav.about': 'Rólam',
	'nav.language': 'Nyelv',
	'theme.dark': 'Sötét mód',
	'project.download': 'APK letöltése',
	'project.source': 'Forráskód a GitHubon',
	'project.tech': 'Technológia',
};

const ui: Record<Lang, typeof en> = { en, hu };

// Returns a function that looks up a text in the given language: t('nav.about').
export function useTranslations(lang: Lang) {
	return (key: keyof typeof en) => ui[lang][key];
}

// The address of a page in the given language: localizePath('hu', 'about/') -> '/hu/about/'.
export function localizePath(lang: Lang, path: string) {
	return getRelativeLocaleUrl(lang, path);
}

// The address without the language prefix: '/hu/about/' -> '/about/'.
export function pathWithoutLang(path: string) {
	return path.replace(/^\/hu(?=\/|$)/, '') || '/';
}
