import React, { Component } from 'react';
import Footer from './Footer';
import ProfileNavigator from './ProfileNavigator';
import Header from './Header';


class NewOrder extends Component {
  render(){
    return(
      <div>
      <Header />
      <ProfileNavigator />
      <div className="container profile">
        <div className="col-md-12">
          <h2>Beställ ny video</h2>
        </div>
        <div className="col-md-6 forms-inlogged margin-top">
          <label>Välj plats:</label>
          <input className="form-control" />
          <label>Välj datum:</label>
          <input className="form-control" />
          <label>Välj tid:</label>
          <input className="form-control" />
          <button action="submit" className="btn btn-primary">
            Lägg beställning
          </button>
        </div>
        <div className="col-md-6 margin-top">
          <h3>Hur fungerar det?</h3>
          <p>
            Lägg snabbt och enklet in en order genom att välja klubb, datum och bana som du kommer att spela på. Om din match eller träning redan är inspelad kan du välja att klicka i rutan "Inspelade matcher". Det är kostnadsfritt att lägga en order och den kan vara upp till 3 timmars speltid. <br /><br />

            Din orders kommer nu att bearbetas och filma den idrottshändelsen som du önskat. Därefter kommer den att laddas upp till hemsidan och appen. <br /><br />

            Nu kan nu enklet logga in på din användare oavsätt vart du befinner dig och kolla på din inspelade video. Om du inte var registerard innan så har ett medelande skickats till din epost adress om hur du kan gå vidare och registrera dig. Pris på att köpa sin inspelade idrottshändels finner du här.
          </p>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default NewOrder;
