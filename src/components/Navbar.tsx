import Link from 'next/link';
import LanguageToggleButton from './LanguageToggle';
import { HOME_ROUTE } from '@/constants';
import { LOCALES_LIST } from '@/types';
import { getDictionary } from '@/app/[locale]/dictionaries';

export async function Navbar({ locale }: { locale: LOCALES_LIST }) {
	const { app_navbar } = await getDictionary(locale);
	return (
		<header className='max-w-screen-2xl h-36 mx-auto px-4'>
			<nav className='h-full flex items-center justify-between'>
				<Link
					href={HOME_ROUTE}
					className='font-bold px-2 py-2 border-2 border-zinc-900 rounded-lg'>
					{app_navbar.logo_title}
				</Link>
				<LanguageToggleButton currentLocale={locale} />
			</nav>
		</header>
	);
}

export default Navbar;
