import fetchGraphql from '@/lib/utils/fetchGraphql';
import { BlogEntityResponseCollection, Query } from '@/schema/graphql';
import { LOCALES_LIST } from '@/types';
import { graphql } from '@/schema/gql';
import { getClient } from '@/lib/client';

const queryListBlogs = graphql(/* GraphQL */ `
	query listBlogs($locale: I18NLocaleCode) {
		blogs(locale: $locale) {
			data {
				attributes {
					title
					slug
					publishedAt
				}
			}
		}
	}
`);

export async function listBlogs(locale: LOCALES_LIST) {
	let response = null;

	try {
		const client = getClient();

		const {
			error,
			data: { blogs },
		} = await client.query({ query: queryListBlogs, variables: { locale } });

		if (error || !blogs?.data) {
			throw new Error('Error retrieving blogs');
		}

		response = blogs;
	} catch (error) {
		console.error(error);
	}

	return response;
}

export default listBlogs;
