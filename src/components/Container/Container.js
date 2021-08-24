import React from 'react';
import CartKiev from '../CartKiev/CartKiev';

import './Container.css';

const Container = () => {

  return (
    <div className="container">
      <div className="carts">
        <CartKiev />
      </div>
    </div>
  )
  
};

export default Container;