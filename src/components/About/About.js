import React from 'react';

const About = (props) => {
  return (
    <section className="bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="text-center text-uppercase text-white">About</h2>
        <hr className="star-light mb-5"/>
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">
              Greetings! My name is Wei Hien. 
              I am an experienced Full Stack Web Developer who is passionate about every aspect of Web Technology.
            </p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">
              <ul>
                <li>PHP (Laravel)</li>
                <li>Javascript (ReactJS, NodeJS)</li>
                <li>SQL</li>
                <li>Linux</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;