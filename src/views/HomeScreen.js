import React, { Component } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowDoesItWork from '../components/HowDoesItWork';
import About from '../components/About';
import CaseSlider from '../components/CaseSlider';
import Footer from '../components/Footer';
import SignIn from '../components/auth/SignIn';


class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <HowDoesItWork />
        <About />
        <CaseSlider />
        <Footer />
        {this.props.children}
      </div>
    );
  }
}

export default HomeScreen;
