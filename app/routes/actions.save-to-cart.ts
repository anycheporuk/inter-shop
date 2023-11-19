import { ActionFunction, redirect } from '@remix-run/node';
import { getCookieValue } from '~/utils';

export const action: ActionFunction = async ({request}) => {
	const formData = await request.formData();
	
	const newCartItemId = formData.get('id'); // storm-bow
	
	const storedItems = getCookieValue('cart', request); // '["hammer-of-armageddon", "storm-bow"]'
	
	let cart = [];
	
	if (storedItems) {
		cart = JSON.parse(storedItems); // ["hammer-of-armageddon", "storm-bow"]
	}
	
	if (!cart.includes(newCartItemId)) {
		cart.push(newCartItemId);
	}

	return redirect('/', {
		headers: {
			'Set-Cookie': `cart=${JSON.stringify(cart)}; Path=/; SameSite=Lax`,
		}
	});
};
