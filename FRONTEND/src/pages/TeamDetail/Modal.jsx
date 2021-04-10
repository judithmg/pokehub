import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/modal.scss';
import { Link } from 'react-router-dom';
import Pokeball from '../Shared/PokeballComponent';

const Modal = ({ isShowing, hide }) => (isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay" />
    <div className="modal-wrapper">
      <div className="modal">

        <button type="button" className="modal-close" onClick={hide}>X</button>
        <p>Make sure you assigned a moveset for each Pokemon!</p>
        <p>Click to go to battle if you are ready</p>
        <Link to="/battle"><Pokeball /></Link>
      </div>
    </div>
  </>, document.body,
) : null);

export default Modal;
