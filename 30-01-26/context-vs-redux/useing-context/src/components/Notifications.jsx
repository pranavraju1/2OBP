import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function Notifications() {
  const { notifications } = useContext(CartContext);
  
  console.log('Notifications rendered'); // Renders every time cart changes!
  
  return (
    <div className="notifications">
      {notifications.map((notif, i) => (
        <div key={i} className="notification">{notif}</div>
      ))}
    </div>
  );
}