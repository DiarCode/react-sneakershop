import React from 'react';
import './cartCounter.css'

const CartCounter = ({count}) => {
  return (
      <div className="cartCounter">
          {count}
      </div>
  );
};

export default CartCounter;
