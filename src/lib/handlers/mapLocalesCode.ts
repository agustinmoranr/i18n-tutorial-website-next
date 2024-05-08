import { type I18NLocaleEntity } from '@/schema/graphql';
import { LOCALES_LIST } from '@/types';

export function mapLocalesCode(
	locales: I18NLocaleEntity[],
): { locale: LOCALES_LIST }[] {
	return locales.map((locale) => ({
		locale: locale.attributes?.code as LOCALES_LIST,
	}));
}
