import React from 'react'
import { CartProvider } from './context/CartContext';
import { ProductList } from './components/ProductList';
import { Notifications } from './components/Notifications';

const App = () => {

  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 599 },
    { id: 3, name: 'Tablet', price: 399 },
  ];

  return (
    <div>
        <CartProvider>
          <ProductList products={products} />
          <Notifications />
        </CartProvider>
    </div>
  )
}

export default App
