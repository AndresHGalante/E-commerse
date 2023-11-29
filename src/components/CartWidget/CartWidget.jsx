import React from 'react';

const CartWidget = () => {
  const notificationNumber = 3; // Número hardcodeado
  
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="notification">{notificationNumber}</span>
    </div>
  );
};

export default CartWidget;