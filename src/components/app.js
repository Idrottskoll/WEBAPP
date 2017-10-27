import React, { Component } from 'react';
import Header from './header';
import Hero from './hero';
import HowDoesItWork from './how_does_it_work';
import About from './about';
import CaseSlider from './caseSlider';

export default class App extends Component {
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
