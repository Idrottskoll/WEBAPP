import React, { Component } from 'react';

class ProfileNavigator extends Component {
  render(){
    return(
      <div className="hero-module">
        <div className="hero-content container">
          <div className="row steps profile">
            <div className="col-md-4">
              <div className="step">
                <img src={'src/assets/img/stepOne.png'} className="stepIcons"/>
                <h3>Min profil</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step">
                <img src={'src/assets/img/stepOne.png'} className="stepIcons"/>
                <h3>Beställ ny video</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step">
                <img src={'src/assets/img/stepOne.png'} className="stepIcons"/>
                <h3>Mina videos</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ProfileNavigator;
