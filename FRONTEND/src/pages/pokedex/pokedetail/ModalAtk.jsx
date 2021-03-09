import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => (isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay" />
    <div className="modal-wrapper">

      <div className="pokemove__modal">
        <button type="button" className="modal-close" onClick={hide}>X</button>
        <div className="pokemove__info">
          <p>INFO HERE</p>
        </div>
      </div>

    </div>
  </>, document.body,
) : null);

export default Modal;
