import React from 'react';
import './modalImage.css'


import CloseIcon from '../../assets/icon-close.svg';

const ModalImage = ({visible, setVisible, currentImage}) => {

    function isVisible() {
        if (visible) return "modal activeModal";
        return "modal"
    }

  return (
      <div className={isVisible()} onClick={e => setVisible(false)}>
          <div className="modal-content">
              <button className="modal-close" onClick={() => setVisible(false)} >
                  <img src={CloseIcon} alt="close" />
              </button>
              <div className="modal-image" onClick={e => e.stopPropagation()}>
                  <img src={currentImage} alt="sneaker" />
              </div>
          </div>
      </div>
  );
};

export default ModalImage;
