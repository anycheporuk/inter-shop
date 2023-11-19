import { IProduct } from '~/types';

const save = async (products: Array<IProduct>)=> {
	await Bun.write('./app/database/products.json', JSON.stringify(products, null, 2))
}

const read = async ()=> {
	return await Bun.file("./app/database/products.json").json() as Array<IProduct>
}

export const getAllProducts = async () => {
	return await read()
}

export const getProductById = async (id: string): Promise<IProduct | undefined> => {
	const products = await getAllProducts()
	return products.find(product => product.id === id)
}

export const saveProduct = async (newProduct: IProduct) => {
	const products = await getAllProducts()
	const existingIndex = products.findIndex(product => product.id === newProduct.id)
	if (existingIndex === undefined){
		products.push(newProduct)
	} else {
   products[existingIndex] = newProduct
	}
	await save(products)
}
