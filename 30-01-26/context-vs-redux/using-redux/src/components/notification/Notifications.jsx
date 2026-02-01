import React from 'react'
import { useSelector } from 'react-redux';

const Notifications = () => {
     // Only subscribed to notifications, NOT cart!
    const notifications = useSelector(state => state.notifications);
  
    console.log('Notifications rendered'); // Only when notifications change, NOT when cart changes!
    return (
        <div className="notifications">
          {notifications.map((notif, i) => (
            <div key={i} className="notification">{notif}</div>
          ))}
        </div>
      );
}

export default Notifications
