import { IProduct } from '~/types';

export const AdminCard = ({img, name, id, price, rarity, quantity, categories}: IProduct) => {
	return <div className={`card card--${rarity}`}>
		<div className='image-container'>		
			<img src={img} alt=''  />
		</div>
		<span className='price'>{price}</span>
		<span className='quantity'>{quantity}</span>
		
		<a href={`/products/${id}`} target='_blank'>{name}</a>
		<div>
			<a className='button' href={`/admin/products/${id}/edit`}>Редагувати</a>
		</div>
	</div>
}
// треба додати відображення кількості продуктів -- quantity
