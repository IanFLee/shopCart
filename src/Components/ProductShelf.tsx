import { useState } from 'react'
import Card from './Card.tsx'

	// Fetch API Data
	
	const products = [
	{
		'id': 1,
		'name': 'table',
		'price': '50',
	},
	{
		'id': 2,
		'name': 'chair',
		'price': '25',
	},
	{
		'id': 3,
		'name': 'chandelier',
		'price': '100'
	}
	]

	
	// Generate List of 'Product' Components
	const ProductList = ( { products, addToCart } ) => (
		<ul className="grid grid-cols-1 gap-4">
			{products.map( (product) => (
				<li key={product.id} className="border-2 rounded-lg p-4">
					<h3 className="text-lg font-medium"> { product.name } </h3>
					<p className="text-gray-600"> { product.price } </p>
					<button className="bg-blue-500 text-white rounded" onClick={()=>addToCart(product)}>Add to Cart</button>
				</li>
			) ) }
		</ul>
	);


export default function ProductShelf () {

	
	// Build and Export All
	return (
	<>	
		<Card title="Aisle Twelve - Groceries" font="font-switzer">
			<ProductList products={products} />
		</Card>
	</>
	)
}


