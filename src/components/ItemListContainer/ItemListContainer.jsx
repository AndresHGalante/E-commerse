import React from 'react';
import './ItemListContainer.components.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <p className="message">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;