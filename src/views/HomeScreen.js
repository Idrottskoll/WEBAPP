import React, { Component } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowDoesItWork from '../components/HowDoesItWork';
import About from '../components/About';
import CaseSlider from '../components/CaseSlider';

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <HowDoesItWork />
        <About />
        <CaseSlider />
        {this.props.children}
      </div>
    );
  }
}
