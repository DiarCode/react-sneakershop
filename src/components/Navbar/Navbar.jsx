import React, {  useEffect, useMemo, useState } from 'react';
import './navbar.css';
import LogoIcon from '../../assets/logo.svg';
import CartIcon from '../../assets/icon-cart.svg';
import UserIcon from '../../assets/image-avatar.png';
import Burger from '../../assets/icon-menu.svg'
import BurgerMenu from '../Burger/BurgerMenu';
import Cart from '../CartProducts/Cart';
import CartCounter from '../CartCounter/CartCounter';

const Navbar = () => {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [visibleCart, setVisibleCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect( () => {
        toCart();
    }, []);
    

    function toCart(){
        const localStorageData = JSON.parse(localStorage.getItem("cartItems")) || [];
        if (localStorageData.length !== 0) {
            setCartItems(localStorageData);
        }
        
    }

    function showCart(){
        if (visibleCart) return setVisibleCart(false);;
        return setVisibleCart(true);
        
    }

  return (
      <div className="navbar">
          <button className="burger" onClick={() => setVisibleMenu(true)} >
              <img src={Burger} alt="burger" />
          </button>
          <BurgerMenu visible={visibleMenu} setVisible={setVisibleMenu} />
          <div className="navbar-logo">
              <img src={LogoIcon} alt="sneaker logo"/>
          </div>
          <div className="navbar-nav">
              <div to="#" className="nav-collection">Collection</div>
              <div className="nav-men">Men</div>
              <div className="nav-women">Women</div>
              <div className="nav-about">About</div>
              <div className="nav-contact">Contact</div>
          </div>
          <div className="navbar-cart">
              {cartItems.length !== 0
              ? <CartCounter count={cartItems.length}/>
              : false
              }
              <img src={CartIcon} alt="cart" onClick={showCart} />
          </div>
          <div className="navbar-user">
              <img src={UserIcon} alt="user" />
          </div>
          <Cart cartData={cartItems} visible={visibleCart}/>
      </div>

  );
};

export default Navbar;
