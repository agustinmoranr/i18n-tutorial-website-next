import Link from 'next/link';
import { getDictionary } from './dictionaries';
import { LOCALES_LIST } from '@/types';

export default async function Home({
	params: { locale },
}: {
	params: { locale: LOCALES_LIST };
}) {
	const {
		pages: { homepage },
	} = await getDictionary(locale);

	return (
		<div className='min-h-screen px-4 py-20'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-5xl sm:text-7xl text-bold px-8 text-center'>
					{homepage.title}
				</h1>
				<Link
					href='/blog'
					className='px-4 py-2 bg-purple-800 text-white rounded-2xl mt-20'>
					{homepage.blog_cta}
				</Link>
			</div>
		</div>
	);
}
