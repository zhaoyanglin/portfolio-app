import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import Resume_pic from './components/resume_pic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer />
        <Router>
        <Route exact path="/Resume_pic" component={Resume_pic} />
        </Router>
      </div>
    );
  }
}
export default App;

