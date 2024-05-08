import { NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import type { NextRequest } from 'next/server';
import { DEFAULT_LOCALE } from './constants';
import listLocales from './service/listLocales';
import makeClient from './lib/makeClient';

export async function middleware(request: NextRequest) {
	const locales = await listLocales({ client: makeClient() });
	if (!locales) throw new Error('Error retrieving list of locales');
	const response = i18nRouter(request, {
		defaultLocale: DEFAULT_LOCALE,
		locales: locales.data.map((locale) => locale.attributes?.code!),
	});

	return response;
}

export const config = {
	matcher: [
		{
			source: '/((?!api|static|.*\\..*|_next).*)', //middleware aplica a archivos dentro de carpeta app
		},
	],
};
