import React from 'react';
import './burger.css'
import CloseIcon from '../../assets/icon-close.svg'

const BurgerMenu = ({visible, setVisible}) => {
    function isVisible() {
        if(visible) return "burgerMenu burgerMenuActive";
        else return "burgerMenu";
    }
    
  return (
    <div className={isVisible()}>
        <div className="burgerMenu-content">
            <button className="burgerMenu-close" onClick={() => setVisible(false)}>
            <img src={CloseIcon} alt="close" />
            </button>
            <div className="burgerMenu-list">
                <div>Collection</div>
                <div>Men</div>
                <div>Women</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        </div>
        
    </div>
  );
};

export default BurgerMenu;
