import React, { Component } from 'react';
import HomeScreen from '../views/HomeScreen';

export default class App extends Component {
  render() {
    return (
      <div>
        <HomeScreen />
        {this.props.children}
      </div>
    );
  }
}
