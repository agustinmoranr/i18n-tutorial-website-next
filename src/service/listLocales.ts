import { graphql } from '@/schema/gql';
import { ApolloClient } from '@apollo/client';

const queryListLocale = graphql(/* GraphQL */ `
	query listLocales {
		i18NLocales {
			data {
				id
				attributes {
					name
					code
				}
			}
		}
	}
`);

export async function listLocales({ client }: { client: ApolloClient<any> }) {
	let response = null;

	try {
		const {
			error,
			data: { i18NLocales },
		} = await client.query({ query: queryListLocale });

		if (error || !i18NLocales?.data) {
			throw new Error('Error retrieving locales');
		}

		response = i18NLocales;
	} catch (error) {
		console.error(error);
	}

	return response;
}

export default listLocales;
