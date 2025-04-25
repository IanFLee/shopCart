import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductShelf from './Components/ProductShelf.tsx'
import ShoppingCart from './Components/ShoppingCart.tsx'

function App() {
  const [count, setCount] = useState(0)
  
	    const clashD = {
    fontFamily: 'ClashDisplay, mono'
  };
  
    // Test font loading immediately
  const switzer = {
    fontFamily: 'Switzer, sans-serif'
  };
  
  const stardom = {
    fontFamily: 'Stardom, mono'
  };
  

  return (
    <>
      <div className="grid grid-cols-[2fr_1fr] gap-4 h-64">
      <ProductShelf />
      <ShoppingCart />
      </div>
    </>
  )
}

export default App
