import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [filters, setFilters] = useState({});

  const addToCart = (product) => {
    setCart([...cart, product]);
    // Recalculate total
    setTotal(prev => prev + product.price);
    // Show notification
    setNotifications([...notifications, `Added ${product.name}`]);
  };

  return (
    <CartContext.Provider value={{ cart, total, notifications, filters, addToCart, setFilters }}>
      {children}
    </CartContext.Provider>
  );
}