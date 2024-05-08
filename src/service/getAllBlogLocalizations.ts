import { LOCALES_LIST } from '@/types';
import transformLocalizations, {
	type TransformedLocalizations,
} from '@/lib/handlers/transform/responseLocalizations';
import { graphql } from '@/schema/gql';
import { getClient } from '@/lib/client';

const queryBlogInAllLocales = graphql(/* GraphQL */ `
	query getBlogBySlugInAllLocales($slug: String) {
		blogs(locale: "all", filters: { slug: { eq: $slug } }) {
			data {
				attributes {
					slug
					locale
					localizations {
						data {
							attributes {
								slug
								locale
							}
						}
					}
				}
			}
		}
	}
`);

export async function getAllBlogLocalizations(
	slug: string,
	locale: LOCALES_LIST,
): Promise<null | TransformedLocalizations[]> {
	let response: null | TransformedLocalizations[] = null;

	try {
		const client = getClient();
		const {
			error,
			data: { blogs },
		} = await client.query({
			query: queryBlogInAllLocales,
			variables: { slug },
		});

		const blogResponseInAllLocales = blogs?.data[0];

		//handle errors and data type safety
		if (
			error ||
			!blogResponseInAllLocales ||
			!blogResponseInAllLocales.attributes
		) {
			throw new Error('Error retrieving data');
		}

		//transform localizations to easily gen slugsWithLocaleMap
		const localizationsTransformed = transformLocalizations(
			blogResponseInAllLocales.attributes.localizations?.data ?? [],
		);

		// parse response
		response = [
			{
				attributes: { locale, slug },
			} as TransformedLocalizations,
			...localizationsTransformed,
		];
	} catch (error) {
		console.error(error);
	}

	return response;
}

export default getAllBlogLocalizations;
