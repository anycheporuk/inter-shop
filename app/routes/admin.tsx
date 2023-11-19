import { Outlet } from '@remix-run/react';

export default () => {
	return (
		<div>
			<nav className='cart-sidebar left-0'>
				<ul>
					<li>
						<a href='/admin/products'>Продукти</a>
					</li>  
				</ul>
			</nav>
			<Outlet />
		</div>
	)
}
