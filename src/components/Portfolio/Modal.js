import React from 'react';

import './modal.css';

const Modal = ({id, name, children, show, onCloseModal}) => {
  if (!show) {
    return null;
  }

  return (
    <div class="portfolio-modal mfp-hide" id={id}>
      <div class="portfolio-modal-dialog bg-white">
        <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#closeModal" onClick={onCloseModal}>
          <i class="fa fa-3x fa-times"></i>
        </a>
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 class="text-secondary text-uppercase mb-0">{name}</h2>
              <hr class="star-dark mb-5"/>
              {children}
              <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#closeModal" onClick={onCloseModal}>
                <i class="fa fa-close"></i>
                Close Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;