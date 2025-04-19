import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductShelf from './Components/ProductShelf.tsx'
import ShoppingCart from './Components/ShoppingCart.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductShelf />
      <ShoppingCart />
    </>
  )
}

export default App
