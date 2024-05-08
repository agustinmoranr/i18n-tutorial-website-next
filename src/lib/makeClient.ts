import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export function makeClient() {
	const httpLink = new HttpLink({
		uri: process.env.API_ENDPOINT,
	});
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: httpLink,
	});
}
export default makeClient;
