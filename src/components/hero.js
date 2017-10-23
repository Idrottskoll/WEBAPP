import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
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
    );
  }
}

export default Hero;
