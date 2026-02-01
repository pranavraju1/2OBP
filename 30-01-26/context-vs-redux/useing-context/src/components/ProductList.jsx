import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductCard } from './ProductCard';

export function ProductList({ products }) {
  const { total, cart } = useContext(CartContext);
  
  console.log('ProductList rendered'); // Renders every time cart changes
  
  return (
    <div>
      <h2>Total Items: {cart.length}</h2>
      <h3>Total Price: ${total}</h3>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}