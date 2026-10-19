// The languages of the site. English is the default and has no prefix in the URL.
export const languages = {
	en: 'English',
	hu: 'Magyar',
};

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';
