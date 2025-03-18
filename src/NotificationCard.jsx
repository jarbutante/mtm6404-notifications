import React from 'react';

const NotificationCard = ({ children, onClose }) => {
  return (
   
    <div
  className="card shadow-sm"
  style={{ maxWidth: '20rem', position: 'relative', margin: '25px', padding: '15px',}}
>
    <div className="card-body">
    
      <button
        onClick={onClose}
        className="close position-absolute"
        style={{
          top: '0px',
          right: '0px',
          background: 'transparent', 
          padding: '10px', 
          cursor: 'pointer',
        }}
      >
        <span className="text-danger">&times;</span> 
      </button>

      {children}
    </div>
  </div>
  
  );
};

export default NotificationCard;
