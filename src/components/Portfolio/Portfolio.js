import React, { Component } from 'react';

import './overlay.css';
import Modal from './Modal';
import Item from './Item';

class Portfolio extends Component {
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
        
        <section className="portfolio" id="projects">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">Projects</h2>
            <hr className="star-dark mb-5"/>
            <div className="row">
              <Item modalId="bio-db" imgSrc="img/portfolio/bio-db.png" onClickModal={this.handleClickModal}>
                Bio DB - <small>A data-centric platform for user to upload and manage biological data.</small>
              </Item>
              <Item modalId="prospect-manager" imgSrc="img/portfolio/prospect-manager.png" onClickModal={this.handleClickModal}>
                Prospect Manager - <small>SPA Admin Panel to manage prospect across multiple companies and branches.</small>
              </Item>
              <Item modalId="clicofs" imgSrc="img/portfolio/clicofs.png" onClickModal={this.handleClickModal}>
                Clico FS - <small>A web service that helps generate circular layout using Circos tool.</small>
              </Item>
              <Item modalId="double-sidebar" imgSrc="img/portfolio/double-sidebar.png" onClickModal={this.handleClickModal}>
                Bootstrap double-sidebar - <small>Fork of the Simple Sidebar. Adds a responsive, collapsible second sidebar.</small>
              </Item>
              <Item modalId="appointment-scheduler" imgSrc="img/portfolio/appointment-scheduler.png" onClickModal={this.handleClickModal}>
                Appointment Scheduler - <small>Tailored for NAZA Group, a web app which enable admin/user to configure/make appointment.</small>
              </Item>
              <Item modalId="time-tracker" imgSrc="img/portfolio/time-tracker.png" onClickModal={this.handleClickModal}>
                Time Tracker - <small>Web app intended for tracking resources on various projects.</small>
              </Item>
            </div>
          </div>
        </section>

        <Modal id="bio-db" name="Bio DB" show={this.state.showModal === "bio-db"} onCloseModal={this.handleCloseModal}>
          <h6>
            <span className="badge badge-primary">Laravel 5</span>{` `}
            <span className="badge badge-secondary">Bootstrap</span>{` `}
            <span className="badge badge-info">Datatables</span>{` `}
            <span className="badge badge-success">Job Queuing</span>
          </h6>
          <img className="img-fluid mb-5" src="img/portfolio/bio-db.png" alt=""/>
          <p className="mb-5 text-justify">
            A data-centric platform for user to upload various types of huge biological data files, then process them with background job, 
            and subsequently presents them in various user-friendly ways. <br />
            This project utilizes a popular jQuery plugin, <strong>DataTables</strong> for showing the data. As for the heavy processing of large dataset, job queuing are implemented using 
            Beanstalk and Laravel (disabled in this demo). <br /><br />
            <em>(Note: For testing purpose, login with email test@test.com and password 123456.)</em>
          </p>
          <a className="btn btn-info btn-lg rounded-pill portfolio-modal-dismiss" target="_blank" rel="noopener noreferrer" href="http://23.94.239.100:8998/">
          <i className="fa fa-link"></i> Demo</a>
        </Modal>
        
        <Modal id="prospect-manager" name="Prospect Manager" show={this.state.showModal === "prospect-manager"} onCloseModal={this.handleCloseModal}>
          <h6>
            <span className="badge badge-primary">ReactJS</span>{` `}
            <span className="badge badge-secondary">NodeJS</span>{` `}
            <span className="badge badge-dark">SAP Cloud Hosting</span>{` `}
            <span className="badge badge-light">AdminLTE theme</span>{` `}
            <span className="badge badge-info">Single Page Application</span>{` `}
            <span className="badge badge-success">PostgreSQL</span>
          </h6>
          <img className="img-fluid mb-5" src="img/portfolio/prospect-manager.png" alt=""/>
          <p className="mb-5 text-justify">
            An Admin Panel built with ReactJS, in the form of SPA (Single Page Application), to manage business leads/prospects across multiple companies and branches. <br />
            Supports data importing/exporting using CSV file format.
          </p>
          <a className="btn btn-info btn-lg rounded-pill portfolio-modal-dismiss" target="_blank" rel="noopener noreferrer" href="https://prospect-manager.cfapps.eu10.hana.ondemand.com">
          <i className="fa fa-link"></i> Demo</a>
        </Modal>

        <Modal id="clicofs" name="Clico FS" show={this.state.showModal === "clicofs"} onCloseModal={this.handleCloseModal}>
          <h6>
            <span className="badge badge-primary">Ruby on Rails</span>{` `}
            <span className="badge badge-secondary">Bootstrap</span>{` `}
            <span className="badge badge-info">PostgreSQL</span>{` `}
            <span className="badge badge-success">Circos</span>
          </h6>
          <img className="img-fluid mb-5" src="img/portfolio/prospect-manager.png" alt=""/>
          <p className="mb-5 text-justify">
            A free web service that utilizes the Circos tool, a powerful command-line visualizer that generate circular layout.<br />
            Officially published in 2015 on a renowned <a href="http://bioinformatics.oxfordjournals.org/content/early/2015/07/29/bioinformatics.btv433" rel="noopener noreferrer" target="_blank">scientific journal</a>.
          </p>
          <a className="btn btn-info btn-lg rounded-pill portfolio-modal-dismiss" target="_blank" rel="noopener noreferrer" href="http://clicofs.codoncloud.com/">
          <i className="fa fa-link"></i> Demo</a>
        </Modal>

        <Modal id="double-sidebar" name="Bootstrap Double Sidebar" show={this.state.showModal === "double-sidebar"} onCloseModal={this.handleCloseModal}>
          <h6>
            <span className="badge badge-primary">Bootstrap</span>{` `}
            <span className="badge badge-success">CSS</span>
          </h6>
          <img className="img-fluid mb-5" src="img/portfolio/double-sidebar.png" alt=""/>
          <p className="mb-5 text-justify">
            A fork of the Simple Sidebar theme from StartBootstrap.<br />
            This implementation adds a second sidebar, reponsive toggling based on screen size, and collapsible menu using Bootstrap Collapse.
          </p>
          <a className="btn btn-info btn-lg rounded-pill portfolio-modal-dismiss" target="_blank" rel="noopener noreferrer" href="http://weihien90.github.io/bootstrap-double-sidebar/">
          <i className="fa fa-link"></i> Demo</a>
        </Modal>

        <Modal id="appointment-scheduler" name="Appointment Scheduler" show={this.state.showModal === "appointment-scheduler"} onCloseModal={this.handleCloseModal}>
          <h6>
            <span className="badge badge-primary">Laravel</span>{` `}
            <span className="badge badge-secondary">Datatables</span>{` `}
            <span className="badge badge-info">Bootstrap</span>{` `}
            <span className="badge badge-success">MySQL</span>
          </h6>
          <img className="img-fluid mb-5" src="img/portfolio/appointment-scheduler.png" alt=""/>
          <p className="mb-5 text-justify">
            Tailored for NAZA Group, a web app which enable admin/user to configure/make Service/Test Drive appointment.
          </p>
          <a className="btn btn-info btn-lg rounded-pill portfolio-modal-dismiss" target="_blank" rel="noopener noreferrer" href="https://kia-qas.nazaauto.com.my">
          <i className="fa fa-link"></i> Demo</a>
        </Modal>

        <Modal id="time-tracker" name="Time Tracker" show={this.state.showModal === "time-tracker"} onCloseModal={this.handleCloseModal}>
          <h6>
            <span className="badge badge-primary">Laravel 5</span>{` `}
            <span className="badge badge-success">Bootstrap</span>{` `}
            <span className="badge badge-info">HighCharts</span>{` `}
            <span className="badge badge-secondary">MySQL</span>
          </h6>
          <img className="img-fluid mb-5" src="img/portfolio/time-tracker.png" alt=""/>
          <p className="mb-5 text-justify">
            A simple web app intended for tracking resources on various projects.<br />
            HighCharts is used to show the statistics in charts.<br /><br />
            <em>(Note: For testing purpose, login with email test@test.com and password 123456.)</em>
          </p>
          <a className="btn btn-info btn-lg rounded-pill portfolio-modal-dismiss" target="_blank" rel="noopener noreferrer" href="http://23.94.239.100:8889/">
          <i className="fa fa-link"></i> Demo</a>
        </Modal>
      </React.Fragment>
    );
  };
}

export default Portfolio;