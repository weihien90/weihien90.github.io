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
            <p className="lead">
              Greetings! My name is Wei Hien. 
              I am an experienced Full Stack Web Developer who is passionate about every aspect of Web Technology.
            </p>
          </div>
          <div className="col-lg-4 mr-auto">
            <ul className="lead">
              <li>PHP (Laravel)</li>
              <li>Javascript (ReactJS, NodeJS)</li>
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