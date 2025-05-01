export const useCart = () => {
	const [currentCart, setCurrentCart] = useState(null);
	
	const addToCart = (product) => {
		// check state of cart for previous presence of product
		// if yes, add 1 to quantity
		// if no, add to cart w quantity 1
		
		// check current cart state
		setCurrentCart ( prevCart => {
			// True if prevCart holds any product whose id matches the item given
			const exists = prevCart.find( item => item.id === product.id);
			// if True, and if
			return exists ? prevCart.map(item=>item.id===product.id ? { ...item, quantity: item.quantity + 1 } : item)
			: [ ...prevCart, { ...product, quantity: 1 }];
		} );
	}
	
		
		
}
