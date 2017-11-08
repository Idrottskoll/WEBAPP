import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import Footer from './Footer';
import Header from './Header';
import ProfileNavigator from './ProfileNavigator';

class MyVideos extends Component {
  componentWillMount() {
    this.props.fetchMessage('user');
  }

  renderInformation() {
    console.log(this.props);
    if (this.props.message) {
      return (
        <div className="video-description">
          <h4>SM i Rugby</h4>
          <p>
            {/* {this.props.message.name} */}
          </p>
        </div>
    )};
  }

  render(){
    return(
      <div>
      <Header />
      <ProfileNavigator />
      <div className="container profile">
        <div className="col-md-12">
          <h2>Mina videos</h2>
        </div>
        <div className="col-md-4">
          <div className="video-block"></div>
          {this.renderInformation()}
        </div>
        <div className="col-md-4">
          <div className="video-block"></div>
          <div className="video-description">
            <h4>SM i Rugby</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.<br /><br />
              Datum: 20170929<br />
              Plats: LandalaSquash<br />
              Speltid:1610-1615<br />
              Bana: 01<br />
              Dagar kvar på hemsidan: +31 dagar
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="video-block"></div>
          <div className="video-description">
            <h4>SM i Rugby</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.<br /><br />
              Datum: 20170929<br />
              Plats: LandalaSquash<br />
              Speltid:1610-1615<br />
              Bana: 01<br />
              Dagar kvar på hemsidan: +31 dagar
            </p>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(MyVideos);
