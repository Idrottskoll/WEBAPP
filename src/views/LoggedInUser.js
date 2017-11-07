import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileNavigator from '../components/ProfileNavigator';
import VideoFeed from '../components/VideoFeed';

export default class LoggedInUser extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProfileNavigator />
        <VideoFeed />
        <Footer />
        {this.props.children}
      </div>
    );
  }
}
