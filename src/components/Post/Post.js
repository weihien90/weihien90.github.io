import React, { Component } from 'react';

import './overlay.css';
import Modal from './Modal';
import Item from './Item';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: null};
  }

  handleClickModal = (modalId) => {
    this.setState({showModal: modalId});
    document.body.style.overflow = "hidden";
  }

  handleCloseModal = () => {
    this.setState({showModal: null});
    document.body.style.overflow = "auto"
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showModal && <div className="modal-overlay-div" />}
        
        <section className="portfolio" id="posts">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">Posts</h2>
            <hr className="star-dark mb-5"/>
            <div className="row">
              <Item modalId="simple-subdomain" imgSrc="img/post/simple-subdomain.png" onClickModal={this.handleClickModal}>
                Laravel 5 - <small>Simple Subdomain for Multi-Tenant Application</small>
              </Item>
              <Item modalId="csv-validation" imgSrc="img/post/csv-validation.png" onClickModal={this.handleClickModal}>
                Laravel 5 - <small>CSV File Validations</small>
              </Item>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" rel="noopener noreferrer" href="https://medium.com/@weihien90/latest" target="_blank">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src="img/more.png" alt=""/>
                </a>
                <h3>More</h3>
              </div>
            </div>
          </div>
        </section>

        <Modal id="simple-subdomain" name="Simple Subdomain for Multi-Tenant Application" show={this.state.showModal === "simple-subdomain"} onCloseModal={this.handleCloseModal}>
          <img className="img-fluid mb-5" src="img/post/simple-subdomain.png" alt=""/>
          <p className="mb-5">When building a multi-tenant web application, one of the common pattern is to use subdomain as a gateway to separate 
            between different tenants. (For example, https://company-one.example.com would show the page/data for Company One whereas 
            https://company-two.example.com would show for Company Two.) <br /><br />
            In Laravel 5, to define a route to subdomain and to access it, you’d need to provide the id / keyword for every routes.
          </p>
          <a className="btn btn-info btn-lg rounded-pill portfolio-modal-dismiss" target="_blank" rel="noopener noreferrer" href="https://medium.com/@weihien90/laravel-5-simple-subdomain-for-multi-tenant-application-551ee489b599">
          <i className="fa fa-medium"></i> Read all</a>
        </Modal>
        <Modal id="csv-validation" name="CSV File Validations" show={this.state.showModal === "csv-validation"} onCloseModal={this.handleCloseModal}>
          <img className="img-fluid mb-5" src="img/post/csv-validation.png" alt=""/>
          <p className="mb-5">CSV file is one of the most common method for your application users to import/insert multiple records. Instead of 
            creating the resource one-by-one by navigating through the page, they could just easily edit the CSV file in Spreadsheet program 
            such as Microsoft Excel. However, there seems to be no built in method to validate the imported data. <br /><br />
            Here, I am going to share the methods I’d been using when implementing this feature.</p>
          <a className="btn btn-info btn-lg rounded-pill portfolio-modal-dismiss" target="_blank" rel="noopener noreferrer" href="https://medium.com/@weihien90/laravel-5-csv-file-validations-d52f8d5c9569">
          <i className="fa fa-medium"></i> Read all</a>
        </Modal>
      </React.Fragment>
    );
  };
}

export default Post;