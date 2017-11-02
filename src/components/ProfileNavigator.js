import React, { Component } from 'react';
import { Link } from 'react-router';

class ProfileNavigator extends Component {
  render(){
    return(
      <div className="hero-module">
        <div className="hero-content container">
          <div className="row steps profile">
            <div className="col-md-4">
              <Link to="/MyProfile">
                <div className="step">
                  <img src={'src/assets/img/stepOne.png'} className="stepIcons"/>
                  <h3>Min profil</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/NewOrder">
                <div className="step">
                  <img src={'src/assets/img/stepOne.png'} className="stepIcons"/>
                  <h3>Beställ ny video</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/MyVideos">
                <div className="step">
                  <img src={'src/assets/img/stepOne.png'} className="stepIcons"/>
                  <h3>Mina videos</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileNavigator;
