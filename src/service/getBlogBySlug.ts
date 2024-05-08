import { graphql } from '@/schema/gql';
import { getClient } from '@/lib/client';

const queryGetBlogBySlug = graphql(/* GraphQL */ `
	query getBlogsBySlug($slug: String) {
		blogs(locale: "all", filters: { slug: { eq: $slug } }) {
			data {
				attributes {
					title
				}
			}
		}
	}
`);

export async function getBlogBySlug(slug: string) {
	let response = null;
	try {
		const client = getClient();
		const {
			error,
			data: { blogs },
		} = await client.query({
			query: queryGetBlogBySlug,
			variables: {
				slug,
			},
		});

		if (error || !blogs?.data[0]) {
			throw new Error('Error retrieving blog');
		}

		response = blogs.data[0];
	} catch (error) {
		console.error(error);
	}

	return response;
}

export default getBlogBySlug;
