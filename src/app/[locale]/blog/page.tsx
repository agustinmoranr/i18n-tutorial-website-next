import listBlogs from '@/service/listBlogs';
import { LOCALES_LIST } from '@/types';
import { getDictionary } from '../dictionaries';
import Link from 'next/link';
import dayjs from 'dayjs';
import setDayJsLocale from '@/lib/utils/setDayJsLocale';

export default async function BlogsPage({
	params: { locale },
}: {
	params: { locale: LOCALES_LIST };
}) {
	const {
		pages: { blogs_page },
	} = await getDictionary(locale);
	const blogs = await listBlogs(locale);
	await setDayJsLocale(locale);

	return (
		<div className='min-h-screen px-4 py-20'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-5xl sm:text-7xl text-bold px-8 text-center'>
					{blogs_page.title}
				</h1>

				<ol className='space-y-4 mt-12 p-8'>
					{!blogs && <span>Sin blogs</span>}
					{blogs &&
						blogs.data.map(({ attributes }) => (
							<li key={attributes?.slug} className='list-decimal'>
								<Link
									href={`/blog/${attributes?.slug}`}
									className='underline underline-offset-4 text-xl'>
									{attributes?.title} -{' '}
									{dayjs(attributes?.publishedAt!).format('DD/MMMM/YYYY')}
								</Link>
							</li>
						))}
				</ol>
			</div>
		</div>
	);
}
