import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../app/store';


const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    // Only subscribe to cart items, not entire store
    const cartLength = useSelector(state => state.cart.items.length);
    
    console.log('ProductCard rendered'); // Only renders when THIS component's subscribed data changes

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard
