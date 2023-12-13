import React from 'react';
import { Link } from 'react-router-dom';

function Buttons() {
  return (
    <div>
      <Link to='/category/Chocolate'>Chocolate</Link>
      <Link to='/category/Frutas'>Frutas</Link>
    </div>
  );
}

export default Buttons;