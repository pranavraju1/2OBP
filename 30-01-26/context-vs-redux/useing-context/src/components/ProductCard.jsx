import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function ProductCard({ product }) {
  const { addToCart, filters } = useContext(CartContext);
  
  console.log('ProductCard rendered'); // Renders EVERY time cart changes!
  
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
