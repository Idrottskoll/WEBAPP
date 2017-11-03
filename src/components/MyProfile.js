import React, { Component } from 'react';

class MyProfile extends Component {
  render(){
    return(
      <div className="container profile">
        <div className="col-md-12">
          <h2>Min profil</h2>
          <h3 className="margin-top">Mina uppgifter</h3>
        </div>
        <div className="col-md-6 forms-inlogged">
            <label>För- och efternamn:</label>
            <input className="form-control" />
            <label>Email:</label>
            <input className="form-control" />
            <label>Adress:</label>
            <input className="form-control" />
            <label>Postnummer:</label>
            <input className="form-control" />
            <label>Ort:</label>
            <input className="form-control" />
            <button action="submit" className="btn btn-primary">
              Uppdatera profil
            </button>
        </div>
      </div>
    );
  }
}

export default MyProfile;
