import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Copyright from './Copyright/Copyright';
import ScrollToTop from './ScrollToTop/ScrollToTop';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        <Copyright />
        <ScrollToTop />
      </React.Fragment>
    );
  }
}

export default App;
