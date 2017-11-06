import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="video-container">
          <video src={'src/assets/video/background.mov'} autoPlay loop></video>

      <div className="hero-module">

        <div className="hero-content">
          <h1>
            Idrottskoll <br />
              <span className="smaller-text">
                för dig som vill utvecklas inom idrott
              </span>
          </h1>
        </div>
      </div>
      </div>
    );
  }
}

export default Hero;
