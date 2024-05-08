import { LOCALES_LIST } from '@/types';
import { Maybe } from 'graphql/jsutils/Maybe';

type StrapiLocalizationsInput = {
	attributes?: Maybe<{ locale?: Maybe<string>; slug?: Maybe<string> }>;
};

export type TransformedLocalizations = {
	attributes: {
		locale: LOCALES_LIST;
		slug: string;
	};
};

export function transformLocalizations(
	localizations: StrapiLocalizationsInput[],
): TransformedLocalizations[] {
	return localizations.map((entity) => {
		if (!entity.attributes) {
			throw new Error(
				'transformLocalizations: Error transforming localization attributes',
			);
		}

		if (!entity.attributes.locale || !entity.attributes.slug) {
			throw new Error('transformLocalizations: missing required attribute');
		}

		return {
			attributes: {
				locale: entity.attributes.locale as LOCALES_LIST,
				slug: entity.attributes.slug,
			},
		};
	});
}

export default transformLocalizations;
