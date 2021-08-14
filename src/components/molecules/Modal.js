import React, { Component } from 'react';
import './Modal.css'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className='container-fluid'>
    <div className={showHideClassName}>

      <section className="modal-main col-8">
        {children}
        <button className='btn-grad col-12' type="button" onClick={handleClose}>
          Close
        </button>
      </section>
      </div>
    </div>
  );
};

export default Modal;