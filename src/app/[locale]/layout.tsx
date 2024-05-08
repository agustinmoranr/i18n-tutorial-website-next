import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { LOCALES_LIST } from '@/types';
import listLocales from '../../service/listLocales';
import { mapLocalesCode } from '@/lib/handlers/mapLocalesCode';
import Navbar from '@/components/Navbar';
import { getClient } from '@/lib/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'I18N Website Tutorial',
	description:
		'Aprende como gestionar contenido en múltiples idiomas utilizando Next.js y Strapi.',
};

export async function generateStaticParams() {
	const localesResponse = await listLocales({ client: getClient() });
	if (!localesResponse) throw new Error('Error generating staticParams');

	const locales = mapLocalesCode(localesResponse.data);

	return locales;
}

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: LOCALES_LIST };
}>) {
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<Navbar locale={locale} />
				<main>{children}</main>
			</body>
		</html>
	);
}
