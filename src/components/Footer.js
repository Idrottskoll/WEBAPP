import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Ladda ner vår app!</h5>
              <p>
                I vår app får du tillgång till alla dina videos och kan enkelt beställa nya. Finns tillgänligt till både iOS och Android. Ladda ner och testa!
              </p>
              <div className="bothBadge">
                <img src={'src/assets/img/app-store-badge.png'} className="badgeIcons apple"/>
                <img src={'src/assets/img/google-play-badge.png'} className="badgeIcons"/>
              </div>
            </div>
            <div className="col-md-6">
              <h5 className="right-align">Kontakta idrottskoll</h5>
              <p className="right-align">
                Ansvarig för Idrottskoll <br />
                Joakim Remler <br />
                joakim@idrottskoll.se <br />
                0733093086 <br />
                <span className="small-text">Copyright © 2017</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
