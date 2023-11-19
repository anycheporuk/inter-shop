import type { LinksFunction, LoaderFunctionArgs, SerializeFrom } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import { Header } from '~/components/Header';
import { CartSidebar } from '~/components/CartSidebar';
import { getAllProducts } from '~/database/db.server';
import style from '~/styles/index.css';
import { getCookieValue } from '~/utils';
import tailwindcss from '~/styles/tailwind.css';

export const links: LinksFunction = () => [
	{rel: 'stylesheet', href: tailwindcss},
	{rel: 'stylesheet', href: style},
];

export const loader = async ({request}: LoaderFunctionArgs) => {
	const products = await getAllProducts();
	return {
		cart: JSON.parse(getCookieValue('cart', request) || '[]') as string[],
		products
	};
};

export type IRootLoaderData = SerializeFrom<typeof loader>;

export default function App() {
	return (
		<html lang='uk'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				<main>
					<div className='page-width'>
						<Outlet />
					</div>
					<CartSidebar />
				</main>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
