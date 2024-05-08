const API_ENDPOINT = process.env.API_ENDPOINT as RequestInfo | URL;

const DEFAULT_FETCH_CONFIG = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
};

export interface FetchGraphqlType extends RequestInit {
	operation: string;
	variables?: Record<string, any>;
}

async function fetchGraphql<T>({
	operation,
	variables,
	...config
}: FetchGraphqlType): Promise<T> {
	// console.log({ operation });

	return fetch(API_ENDPOINT, {
		...DEFAULT_FETCH_CONFIG,
		body: JSON.stringify({
			query: operation,
			variables,
		}),
		...config,
	})
		.then((response) => {
			return response.json();
		})
		.then((data: { data: T }) => {
			if (process.env.NODE_ENV === 'development') {
				// console.log('data', JSON.stringify(data));
			}
			return data?.data;
		});
}

export default fetchGraphql;
