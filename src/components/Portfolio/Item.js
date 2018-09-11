import React from 'react';

const Item = ({modalId, imgSrc, onClickModal}) => {
  return (
    <div class="col-md-6 col-lg-4">
      <a class="portfolio-item d-block mx-auto" href={`#${modalId}`} onClick={() => onClickModal(modalId)}>
        <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
          <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
            <i class="fa fa-search-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src={imgSrc} alt=""/>
      </a>
    </div>
  );
}

export default Item;