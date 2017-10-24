import React, { Component } from 'react';
import Header from './header';
import Hero from './hero';
import HowDoesItWork from './how_does_it_work';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <HowDoesItWork />
        {this.props.children}
      </div>
    );
  }
}
