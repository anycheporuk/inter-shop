export const Header = () => {
	return (
		<header>
			<div className='page-width'>
				<div className='flex justify-between gap-2'>
					<a href='/'>Головна сторінка</a>
					<a href='/admin'>Адмінка</a>
				</div>
				<a href='?cart=open' className='cart-sidebar__link'><img src='/icons/cart.svg' /></a>
			</div>
		</header>
	);
}; 
