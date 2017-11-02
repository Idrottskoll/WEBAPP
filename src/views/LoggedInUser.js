import React, { Component } from 'react';
import Header from '../components/Header';
import ProfileNavigator from '../components/ProfileNavigator';

export default class LoggedInUser extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProfileNavigator />
        {this.props.children}
      </div>
    );
  }
}
