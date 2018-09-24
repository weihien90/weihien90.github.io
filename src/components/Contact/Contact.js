import React from 'react';

const Contact = (props) => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <hr className="star-dark mb-5"/>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form action="https://formspree.io/weihien90@gmail.com" name="sentMessage" id="contactForm" method="POST" target="_blank">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email Address</label>
                  <input className="form-control" name="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Message</label>
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br/>
              <div id="success"></div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;