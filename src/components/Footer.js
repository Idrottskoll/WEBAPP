import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Intresserad av en video?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                Beställ din video här
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="right-align">Kontakta idrottskoll</h5>
              <p className="right-align">
                Ansvarig för Idrottskoll <br />
                Joakim Remler <br />
                joakim@idrottskoll.se <br />
                0733093086
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
