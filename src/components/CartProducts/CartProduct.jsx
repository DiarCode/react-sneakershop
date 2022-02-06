import React from "react";
import RemoveBtn from "../../assets/icon-delete.svg";

const CartProduct = ({ productData, setCartItems, cartItems }) => {
  function calculateTotalPrice() {
    return "$" + parseInt(productData.price) * parseInt(productData.count);
  }
  function removeFromCart(){
    const updatedCartItems = cartItems.filter(item => item.name !== productData.name);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItemsList', JSON.stringify(updatedCartItems))
  }

  return (
    <div className="cart-products">
      <div className="productCartData">
        <div className="productCart-img">
          <img src={productData.image} alt="productImage" />
        </div>
        <div className="productCart-info">
          <div className="productCart-info-name">{productData.name}</div>
          <div className="productCart-info-price">
            <div className="productCart-info-num">{productData.price}</div>
            <div className="productCart-info-x">x</div>
            <div className="productCart-info-count">{productData.count}</div>
            <div className="productCart-info-total">
              {calculateTotalPrice()}
            </div>
          </div>
        </div>
        <div className="productCart-remove">
          <button onClick={removeFromCart}>
            <img src={RemoveBtn} alt="remove" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
