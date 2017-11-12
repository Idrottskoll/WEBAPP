import React, { Component } from 'react';

class HowDoesItWork extends Component {
  render () {
    return (
      <div className="container">
        <div className="row module">
          <div className="col-md-12 title">
            <h2>
              En snabb och enkel tjänst för dig som vill utveckla din idrott genom video.
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
                Lägg snabbt och enkelt in en order genom att välja vilken klubb du vill filma samt tid och bana. Det är kostnadsfritt och en order kan vara upp till 3 timmar.
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
                Din orders kommer nu att bearbetas och filma den idrottshändelsen som du önskar. Därefter kommer den att laddas upp till hemsidan och appen.
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
                När videon har bearbetas så finns den tillgänglig när du loggar in på hemsidan eller appen. Videon finns tillgänglig var du än är!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowDoesItWork;
