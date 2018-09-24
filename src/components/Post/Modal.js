import React from 'react';

import './modal.css';

const Modal = ({id, name, children, show, onCloseModal}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="portfolio-modal mfp-hide" id={id}>
      <div className="portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block portfolio-modal-dismiss" onClick={onCloseModal}>
          <i className="fa fa-3x fa-times"></i>
        </a>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-secondary text-uppercase text-center mb-0">{name}</h2>
              <hr className="star-dark mb-5"/>
              {children}
              <a className="btn btn-warning btn-lg rounded-pill pull-right portfolio-modal-dismiss" onClick={onCloseModal}>
                <i className="fa fa-close"></i> Close</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;