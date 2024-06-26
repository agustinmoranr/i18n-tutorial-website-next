/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery getBlogBySlugInAllLocales($slug: String) {\n\t\tblogs(locale: \"all\", filters: { slug: { eq: $slug } }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tlocale\n\t\t\t\t\tlocalizations {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tslug\n\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetBlogBySlugInAllLocalesDocument,
    "\n\tquery getBlogsBySlug($slug: String) {\n\t\tblogs(locale: \"all\", filters: { slug: { eq: $slug } }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetBlogsBySlugDocument,
    "\n\tquery listBlogs($locale: I18NLocaleCode) {\n\t\tblogs(locale: $locale) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tpublishedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.ListBlogsDocument,
    "\n\tquery listLocales {\n\t\ti18NLocales {\n\t\t\tdata {\n\t\t\t\tid\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tcode\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.ListLocalesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getBlogBySlugInAllLocales($slug: String) {\n\t\tblogs(locale: \"all\", filters: { slug: { eq: $slug } }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tlocale\n\t\t\t\t\tlocalizations {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tslug\n\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getBlogBySlugInAllLocales($slug: String) {\n\t\tblogs(locale: \"all\", filters: { slug: { eq: $slug } }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t\tlocale\n\t\t\t\t\tlocalizations {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tslug\n\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getBlogsBySlug($slug: String) {\n\t\tblogs(locale: \"all\", filters: { slug: { eq: $slug } }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getBlogsBySlug($slug: String) {\n\t\tblogs(locale: \"all\", filters: { slug: { eq: $slug } }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery listBlogs($locale: I18NLocaleCode) {\n\t\tblogs(locale: $locale) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tpublishedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery listBlogs($locale: I18NLocaleCode) {\n\t\tblogs(locale: $locale) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tpublishedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery listLocales {\n\t\ti18NLocales {\n\t\t\tdata {\n\t\t\t\tid\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tcode\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery listLocales {\n\t\ti18NLocales {\n\t\t\tdata {\n\t\t\t\tid\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tcode\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;