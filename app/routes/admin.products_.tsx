import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { AdminCard } from '~/components/AdminCard';
import { getAllProducts } from '~/database/db.server';

export const loader = async ({}: LoaderFunctionArgs) => {
	const products = await getAllProducts();
	
	return {
		products
	}
}

export default () => {
	const {products} = useLoaderData<typeof loader>()
	
	return (
		<div className='grid grid-cols-4 gap-8'>
			{products.map(product => (<AdminCard {...product} />))}
		</div>
	)
}
