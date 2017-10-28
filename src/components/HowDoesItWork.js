import React, { Component } from 'react';

class HowDoesItWork extends Component {
  render () {
    return (
      <div className="container">
        <div className="row module">
          <div className="col-md-12 title">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt .
            </h2>
          </div>
        </div>
        <div className="row steps">
          <div className="col-md-4">
            <div className="step">
              <img src={'src/assets/img/stepOne.png'} className="stepIcons"/>
              <h3>
                1. Lägg order
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="step">
              <img src={'src/assets/img/stepTwo.png'} className="stepIcons"/>
              <h3>
                2. Videon filmas
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="step">
              <img src={'src/assets/img/stepThree.png'} className="stepIcons"/>
              <h3>
                3. Titta på videon
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowDoesItWork;
