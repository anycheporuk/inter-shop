import { ranks } from '~/constants';

export interface IProduct {
	img: string;
	name: string;
	id: string;
	price: number;
	rarity: typeof ranks[number];
	quantity: number;
	description: string;
	categories: Array<string>
}
