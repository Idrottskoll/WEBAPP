import React, { Component } from 'react';
import Header from './header';
import Hero from './hero';
import HowDoesItWork from './how_does_it_work';
import About from './about';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <HowDoesItWork />
        <About />
        {this.props.children}
      </div>
    );
  }
}
