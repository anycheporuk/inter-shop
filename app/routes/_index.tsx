import type { MetaFunction } from '@remix-run/node';
import { Card, ICardProps } from '~/components/Card';
import { ranks } from '~/constants';
import { useRootLoaderData } from '~/hooks';

export const meta: MetaFunction = () => {
	return [
		{title: 'New Remix App'},
		{name: 'name', content: 'Welcome to Remix!'},
	];
};

export default function Index() {
	const {products} = useRootLoaderData()
	return (
		<div className='grid grid-cols-4 gap-8'>
			{products.sort(sortItemsByRank).map(product => (<Card {...product} />))}
		</div>
	);
}

function sortItemsByRank(a: ICardProps, b:ICardProps){
	const aRarity = ranks.indexOf(a.rarity)
	const bRarity = ranks.indexOf(b.rarity)
	if(aRarity > bRarity) return 1;
	if(bRarity > aRarity) return -1;
	return 0;
}
