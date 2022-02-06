import React, { useState } from "react";
import "./cart.css";
import CartProduct from "./CartProduct";

const Cart = ({ visible, cartItems, setCartItems }) => {
  function isVisible() {
    if (visible) return "cart cartActive";
    return "cart";
  }

  return (
    <div className={isVisible()}>
      <div className="cart-content">
        <div className="cart-title">Cart</div>
        {cartItems.length === 0
          ? <div className="emptyCart">Your cart is empty!</div>
          : cartItems.map(product => <CartProduct productData={product} setCartItems={setCartItems} cartItems={cartItems}  />)
        }
        <div className="cart-checkout">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
