import React, { useState } from 'react';
import './cart.css';
import CartProduct from './CartProduct';

const Cart = ({cartData, visible, setCartData}) => {

  function isVisible(){
    if (visible) return "cart cartActive";
    return "cart";
  }

  return (
      <div className={isVisible()}>
          <div className="cart-content">
              <div className="cart-title">Cart</div>
              {cartData.map((product) => {return <CartProduct product={product}/>})}
              <div className="cart-checkout">
              <button>Checkout</button>
          </div>
          </div>
      </div>
  );
};

export default Cart;
