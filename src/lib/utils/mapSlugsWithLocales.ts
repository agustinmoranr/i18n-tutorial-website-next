import { LOCALES_LIST } from '@/types';
import { type TransformedLocalizations } from '../handlers/transform/responseLocalizations';

export function mapSlugsWithLocales(localizations: TransformedLocalizations[]) {
	return localizations.reduce((acc, data) => {
		acc[data.attributes.locale] = data.attributes.slug;
		return acc;
	}, {} as Record<LOCALES_LIST, string>);
}

export default mapSlugsWithLocales;
