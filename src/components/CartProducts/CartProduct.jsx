import React from 'react';
import RemoveBtn from '../../assets/icon-delete.svg';

const CartProduct = ({product}) => {
    function calculateTotalPrice(){
        return "$" + product.price * product.count;
    }

    function removeFromLocal(){
        const localStorageData = JSON.parse(localStorage.getItem("cartItems")) || [];
        if (localStorageData.length !== 0) {
            const updatedLocalStorageData = localStorageData.filter(productLocal => productLocal.name !== product.name);
            localStorage.setItem("cartItems", JSON.stringify(updatedLocalStorageData));
        }
    }

  return (
    <div className="cart-products">
    <div className="productCartData">
        <div className="productCart-img">
            <img src={product.image} alt="productImage" />
        </div>
        <div className="productCart-info">
            <div className="productCart-info-name">{product.name}</div>
            <div className="productCart-info-price">
                <div className="productCart-info-num">{product.price}</div>
                <div className="productCart-info-x">x</div>
                <div className="productCart-info-count">{product.count}</div>
                <div className="productCart-info-total">{calculateTotalPrice()}</div>
            </div>
        </div>
        <div className="productCart-remove">
            <button onClick={removeFromLocal}>
                <img src={RemoveBtn} alt="remove" />
            </button>
        </div>
    </div>
  </div>
  );
};

export default CartProduct;
