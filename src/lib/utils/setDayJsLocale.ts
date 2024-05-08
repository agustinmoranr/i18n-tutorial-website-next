import dayjs from 'dayjs';
import { LOCALES_LIST } from '@/types';

const dayjs_locales = {
	[LOCALES_LIST.ES]: import('dayjs/locale/es'),
	[LOCALES_LIST.EN]: import('dayjs/locale/en'),
};

export const setDayJsLocale = async (locale: LOCALES_LIST) => {
	let localeModule;
	try {
		localeModule = await dayjs_locales[locale];
	} catch (error) {
		// Si el módulo de idioma no está disponible, usa el idioma predeterminado (en este caso, 'en')
		localeModule = await dayjs_locales['en'];
	}

	dayjs.locale(localeModule.default);
};

export default setDayJsLocale;
