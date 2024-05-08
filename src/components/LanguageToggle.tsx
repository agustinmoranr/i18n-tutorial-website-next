'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LOCALES_LIST } from '@/types';
import { DEFAULT_LOCALE, HOME_ROUTE, LOCALE_TEXT } from '@/constants';

function useToggleLanguage() {
	const pathname = usePathname();
	const router = useRouter();

	const toggleLanguage = useCallback(
		(currentLocale: LOCALES_LIST) => {
			const newLocale =
				currentLocale === DEFAULT_LOCALE ? LOCALES_LIST.EN : DEFAULT_LOCALE;

			const startPathname = pathname.includes(`${HOME_ROUTE}${currentLocale}`)
				? `${HOME_ROUTE}${currentLocale}`
				: HOME_ROUTE;
			router.replace(
				pathname.replace(startPathname, `${HOME_ROUTE}${newLocale}/`),
			);
			router.refresh();
		},
		[pathname, router],
	);

	return toggleLanguage;
}

export default function LanguageToggleButton({
	currentLocale,
}: {
	currentLocale: LOCALES_LIST;
}) {
	const toggleLanguage = useToggleLanguage();

	function handleToggleLanguage() {
		toggleLanguage(currentLocale);
	}

	return (
		<button
			className='size-12 bg-gray-800 rounded-full'
			onClick={handleToggleLanguage}>
			<span className='text-white'>{LOCALE_TEXT[currentLocale]}</span>
		</button>
	);
}
