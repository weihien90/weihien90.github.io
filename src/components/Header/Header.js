import React from 'react';

const Header = (props) => {
  return (
    <header className="masthead bg-primary text-white" id="about">
      <div className="container">
        <img className="img-fluid mb-5 d-block mx-auto" src="img/profile.png" alt=""/>
        <h1 className="text-center text-uppercase mb-0">Web Developer</h1>
        <hr className="star-light mb-5"/>
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Strong engineering professional graduated from Universiti Kebangsaan Malaysia.</p>
          </div>
          <div className="col-lg-4 mr-auto">
            <ul className="lead">
              <li>PHP (Laravel)</li>
              <li>Javascript (ReactJS)</li>
              <li>SQL</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;