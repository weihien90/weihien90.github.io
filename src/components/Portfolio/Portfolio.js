import React from 'react';

import Modal from './Modal';

const Portfolio = (props) => {
  return (
    <React.Fragment>
      <section class="portfolio" id="portfolio">
        <div class="container">
          <h2 class="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          <hr class="star-dark mb-5"/>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/cabin.png" alt=""/>
              </a>
            </div>
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/cake.png" alt=""/>
              </a>
            </div>
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/circus.png" alt=""/>
              </a>
            </div>
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/game.png" alt=""/>
              </a>
            </div>
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/safe.png" alt=""/>
              </a>
            </div>
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/submarine.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Modal id="portfolio-modal-1" name="Project Name">
        <img class="img-fluid mb-5" src="img/portfolio/cabin.png" alt=""/>
        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </Modal>
      <Modal id="portfolio-modal-2" name="Project Name">
        <img class="img-fluid mb-5" src="img/portfolio/cake.png" alt=""/>
        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </Modal>
      <Modal id="portfolio-modal-3" name="Project Name">
        <img class="img-fluid mb-5" src="img/portfolio/circus.png" alt=""/>
        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </Modal>
      <Modal id="portfolio-modal-4" name="Project Name">
        <img class="img-fluid mb-5" src="img/portfolio/game.png" alt=""/>
        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </Modal>
      <Modal id="portfolio-modal-5" name="Project Name">
        <img class="img-fluid mb-5" src="img/portfolio/safe.png" alt=""/>
        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </Modal>
      <Modal id="portfolio-modal-6" name="Project Name">
        <img class="img-fluid mb-5" src="img/portfolio/submarine.png" alt=""/>
        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </Modal>
    </React.Fragment>
  );
}

export default Portfolio;