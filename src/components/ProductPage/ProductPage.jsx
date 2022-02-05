import React, { useState } from 'react';
import './productPage.css'

import Image1 from '../../assets/image-product-1.jpg';
import Image2 from '../../assets/image-product-2.jpg';
import Image3 from '../../assets/image-product-3.jpg';
import Image4 from '../../assets/image-product-4.jpg';
import CountMinusIcon from '../../assets/icon-minus.svg';
import CountPlusIcon from '../../assets/icon-plus.svg';
import ModalImage from '../ModalImage/ModalImage';

const ProductPage = () => {
    const images = [Image1, Image2, Image3, Image4]  
    const [currentImage, setCurrentImage] = useState(Image1);
    const [pressed, setPressed] = useState(Image1);
    const [visib, setVisib] = useState(false);
    const [currentCount, setCurrentCount] = useState(0);
    const [productData, setProductData] = useState({
        image: currentImage,
        brand: "Sneaker",
        name: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: "125.00",
    });

    function isPressed(image){
        if (currentImage === image) {
            return "active"
        }
    }
    function addCount() {
        if (currentCount < 10) setCurrentCount(currentCount+1);
        else alert("You have reached maximum count of this item!")
    }
    function subsCount() {
        if (currentCount > 0) setCurrentCount(currentCount-1);
        else alert("You have reached minimum count of this item!")
    }
    function setToCart() {
        if (currentCount === 0) return alert("Error! Set more than 0 items!"); 
        const cartItem = {
            image: productData.image,
            name: productData.name,
            price: productData.price,
            count: currentCount ,
        }
        const localStorageData = JSON.parse(localStorage.getItem("cartItems")) || [];
        localStorage.setItem("cartItems", JSON.stringify([...localStorageData, cartItem]));
    }

  return (
      <div className="product">
          <div className="product-gallery">
              <div className="gallery-main" onClick={() => setVisib(true)}>
                  <img src={currentImage} alt="sneaker"/>
              </div>
              <div className="gallery-bottom">
                {images.map(image => {
                    return <img src={image} alt="sneaker" className={isPressed(image)}  onClick={() => {setCurrentImage(image); setPressed(image)} }/>
                })}
              </div>
          </div>
          <div className="product-info">
            <div className="info-company">sneaker company</div>
            <div className="info-name">Fall Limited Edition Sneakers</div>
            <div className="info-descrip">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</div>
            <div className="info-price">
                <div className="price-numNsale">
                    <div className="price-num">$125.00</div>
                    <div className="price-sale">50%</div>
                </div>
                <div className="price-lined">$250.00</div>
            </div>
            <div className="info-btns">
                <div className="info-count">
                    <button className="count-subs" onClick={subsCount}>
                        <img src={CountMinusIcon} alt="minus" />
                    </button>
                    <div className="count-num">{currentCount}</div>
                    <button className="count-add" onClick={addCount}>
                        <img src={CountPlusIcon} alt="plus" />
                    </button>
                </div>
                <div className="info-toCart">
                    <button onClick={setToCart}>Add to cart</button>
                </div>
            </div>
          </div>
          <ModalImage visible={visib} setVisible={setVisib} currentImage={currentImage}/>
      </div>
  );
};

export default ProductPage;
