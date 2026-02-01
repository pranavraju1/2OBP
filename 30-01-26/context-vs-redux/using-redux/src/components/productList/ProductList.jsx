import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../productCard/ProductCard'

const ProductList = ({ products }) => {
   // Selectors determine what we subscribe to
   const cartLength = useSelector(state => state.cart.items.length);
   const total = useSelector(state => state.cart.total);
   
   console.log('ProductList rendered'); // Only when cart data changes
   
   return (
     <div>
       <h2>Total Items: {cartLength}</h2>
       <h3>Total Price: ${total}</h3>
       {products.map(p => <ProductCard key={p.id} product={p} />)}
     </div>
   );
}

export default ProductList
