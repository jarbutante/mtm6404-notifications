import { useState } from 'react';
import './App.css';
import NotificationCard from './NotificationCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './notifications.js';


const App = () => {
  const [notifications, setNotifications] = useState(data);

  const removeNotification = (id) => {
    const updatedNotifications = notifications.filter((user) => user.id !== id);
    setNotifications(updatedNotifications);
  };

  const removeAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div style={{ padding: '20px' }}>
     <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Notifications</h1>

      {notifications.map((user) => (
        <NotificationCard
          key={user.id}
          onClose={() => removeNotification(user.id)}
        >

          <h2 style={{ marginBottom: '10px' }}>{user.name}</h2>
          <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.5' }}>
            {user.message}
          </p>
          
        </NotificationCard>
      ))}

      {notifications.length === 0 && <p>No more notifications!</p>}

         
         <button
        onClick={removeAllNotifications}
        className="btn btn-danger mb-3"
        style={{
          backgroundColor: 'white',
          color: 'red',
        }}
      >
        Remove All
      </button>
    </div>
  );
};

export default App;