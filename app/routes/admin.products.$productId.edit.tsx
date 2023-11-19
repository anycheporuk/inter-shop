import { ActionFunctionArgs, LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { createFileUploadHandler } from '@remix-run/node/dist/upload/fileUploadHandler';
import { Form, useLoaderData } from '@remix-run/react';
import { parseMultipartFormData } from '@remix-run/server-runtime/dist/formData';
import { getProductById, saveProduct } from '~/database/db.server';
import style from '~/styles/routes/productId.css';
import { IProduct } from '~/types';

export const links: LinksFunction = () => [
	{rel: 'stylesheet', href: style}
];

export const loader = async({params}: LoaderFunctionArgs) => {
	return {
		product: await getProductById(params.productId as string)
	}
}  

export const action = async ({request, params}:ActionFunctionArgs) => {
	const handler = createFileUploadHandler({
		directory: `${process.cwd()}/public/images`,
		maxPartSize: 5_000_000,
		file: ({filename})=> filename
	})
	const formData = Object.fromEntries(await request.formData());
	formData.id = params.productId as string;
	console.log(formData);
	await saveProduct(formData as unknown as IProduct);
	return null
}

export default () => {
	const {product} = useLoaderData<typeof loader>()

	return <>
	<Form method="POST">
		<label>
			Код <br/>
			<input name='id' defaultValue={product?.id}/>
		</label>

		<label>
			Назва <br/>
			<input name='name' defaultValue={product?.name}/>
		</label> 
		
		<label>
			Рідкість <br/>
			<select name='rarity' defaultValue={product?.rarity}>
				<option value='gold'>Золотий</option>
				<option value='diamond'>Діамантовий</option>
				<option value='legendary'>Легендарний</option>
				<option value='heroic'>Героїчний</option>
				<option value='armageddon'>Армагедон</option>
			</select>
		</label>
		
		<label>
			Ціна <br/>
			<input name='price' defaultValue={product?.price}/>
		</label>
		
		<label>
			Кількість <br/>
			<input name='quantity' defaultValue={product?.quantity}/>
		</label>
		
		<label>
			Опис <br/>
			<textarea name='description' rows={5} defaultValue={product?.description}/>
		</label>
		
		<label>
			Категорії <br/>
			<select name='categories' defaultValue={product?.categories}>
				<option value='shield'>щит</option>
				<option value='bow'>лук</option>
				<option value='hammer'>молот</option>
				<option value='sword'>меч</option>
				<option value='ax'>сокира</option>
				</select> 
		</label>
		
		<button className='button--primary'>Зберегти</button>  
	</Form>
	</>
}

