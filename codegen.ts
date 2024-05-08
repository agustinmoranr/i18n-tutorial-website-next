import type { CodegenConfig } from '@graphql-codegen/cli';
const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://127.0.0.1:1337/graphql',
	documents: ['src/**/*.ts'],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		'src/schema/': {
			preset: 'client',
		},
	},
};

export default config;
