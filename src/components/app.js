import React, { Component } from 'react';
import HomeScreen from '../views/HomeScreen';
import LoggedInUser from '../views/LoggedInUser';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <LoggedInUser /> */}
        <HomeScreen />
        {this.props.children}
      </div>
    );
  }
}
