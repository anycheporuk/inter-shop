import { LinksFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { useParams } from 'react-router';
import { useRootLoaderData } from '~/hooks';
import style from '~/styles/routes/productId.css';

export const links: LinksFunction = () => [
	{rel: 'stylesheet', href: style} 
];

export default () => {
	const {products, cart} = useRootLoaderData();
	const {productId} = useParams();
	const product = products.find(p => p.id === productId);
	if (!product) return <h1>Такої зброї не знайдено</h1>;

	const isInCart = cart.includes(product.id);
	const isAvailable = product.quantity > 0;
	return (<>

		<div className='product-container'>
			<div className='image-container'>
				<img src={product.img} />
			</div>
			<div className='buy-container'>
				<h1>{product.name}</h1>
				{isAvailable
					? <div className='available'>В наявнeості</div>
					: <div className='not-available'>Не в наявності</div>
				}
				<div className='price'>{product.price}</div>
				<Form action='/actions/save-to-cart' method='POST'>
					{isInCart
						? <a className='button' href='?cart=open'>В кошику</a>
						: <button className='button--primary' name='id' value={product.id} disabled={!isAvailable}>В кошик</button>
					}
				</Form>
			</div>
			<div className='description-container'>
				<h2>{product.description}</h2>
				<a href={`/admin/products/${product.id}/edit`}>Редагувати</a>
			</div>
		</div>
	</>);
}

