import { Form } from '@remix-run/react';
import { ranks } from '~/constants';
import { useRootLoaderData } from '~/hooks';

export interface ICardProps {
	img: string;
	name: string;
	id: string;
	price: number;
	rarity: typeof ranks[number];
}

export const Card = ({img, name, id, price, rarity}: ICardProps) => {
	const {cart} = useRootLoaderData()
	
	const isInCart = cart.includes(id);
	return <div className={`card card--${rarity}`}>
		<div className='image-container'>		
			<img src={img} alt=''  />
		</div>
		<span className='price font-bold'>{price}</span>
		<a href={`/products/${id}`} target='_blank'>{name}</a>
		<Form action='/actions/save-to-cart' method='POST'>
			{isInCart 
				? <a className='button' href='?cart=open'>В кошику</a>
				: <button className='button--primary bg-primary' name='id' value={id}>В кошик</button>
			}
			
		</Form>
	</div>
}

