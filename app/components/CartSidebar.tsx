import { useLocation } from '@remix-run/react';
import { useRootLoaderData } from '~/hooks';

export const CartSidebar = () =>{
	const {search} = useLocation()
	const {cart, products} = useRootLoaderData()
	const params = new URLSearchParams(search)
	const isCartOpened = params.get('cart') === 'open'
	
	if (!isCartOpened) return null
	 return (
		 <aside className='cart-sidebar right-0'>
			 <a href="?cart=closed">X</a>
			 <div >
				 {products.filter(weapon => cart.includes(weapon.id)).map(weapon => (
					 <div> <img className='w-20 p-4' src={weapon.img}/> {weapon.name}</div>
				 ))}
			 </div>
		 </aside>
	 )
	
}
