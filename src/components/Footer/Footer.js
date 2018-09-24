import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">Kuala Lumpur
              <br/>Malaysia</p>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/weihien90/">
                  <i className="fa fa-fw fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" target="_blank" rel="noopener noreferrer" href="https://medium.com/@weihien90/latest">
                  <i className="fa fa-fw fa-medium"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Email</h4>
            <p className="lead mb-0">weihien90@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;