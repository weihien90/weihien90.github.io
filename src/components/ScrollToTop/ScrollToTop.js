import React from 'react';

const ScrollToTop = (props) => {
  return (
    <div class="scroll-to-top d-lg-none position-fixed ">
      <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default ScrollToTop;