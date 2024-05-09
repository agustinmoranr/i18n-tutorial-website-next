import mapSlugsWithLocales from '@/lib/utils/mapSlugsWithLocales';
import getAllBlogLocalizations from '@/service/getAllBlogLocalizations';
import getBlogBySlug from '@/service/getBlogBySlug';
import { LOCALES_LIST } from '@/types';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getDictionary } from '../../dictionaries';
import listBlogs from '@/service/listBlogs';

export async function generateStaticParams({
	params: { locale },
}: {
	params: { locale: LOCALES_LIST };
}) {
	const blogs = await listBlogs(locale);

	const slugs =
		blogs?.data.map((blog) => ({
			slug: blog.attributes?.slug!,
			locale,
		})) ?? [];

	return slugs;
}

export default async function BlogPage({
	params: { locale, slug },
}: {
	params: { locale: LOCALES_LIST; slug: string };
}) {
	//query blog by slug in all its localizations
	const allBlogLocalizations = await getAllBlogLocalizations(slug, locale);

	if (!allBlogLocalizations) {
		throw new Error('Error retrieving all blog localizations');
	}

	//map slugs with its respective locale.
	const slugsWithLocaleMap = mapSlugsWithLocales(allBlogLocalizations);

	//redirect on user change page language
	if (slug !== slugsWithLocaleMap[locale]) {
		redirect(`/blog/${slugsWithLocaleMap[locale]}`);
	}

	//query all project data
	const blogResponse = await getBlogBySlug(slugsWithLocaleMap[locale]);

	if (!blogResponse || !blogResponse.attributes) {
		throw new Error('Error retrieving Data');
	}

	const blog = blogResponse.attributes;
	const { actions } = await getDictionary(locale);
	return (
		<div className='min-h-screen px-4 py-10 sm:py-20 max-w-screen-md mx-auto'>
			<Link
				href='/blog'
				className='px-2 py-1 bg-zinc-700 text-white rounded-lg'>
				{actions.go_back_button.text_content}
			</Link>
			<h1 className='text-5xl sm:text-7xl font-semibold text-center mt-20 sm:mt-40'>
				{blog.title}
			</h1>
		</div>
	);
}
