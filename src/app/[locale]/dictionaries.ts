import 'server-only';

import { LOCALES_LIST } from '@/types';

const dictionaries = {
	[LOCALES_LIST.ES]: () =>
		import('../../dictionaries/es.json').then((module) => module.default),
	[LOCALES_LIST.EN]: () =>
		import('../../dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: LOCALES_LIST) =>
	dictionaries[locale]();
