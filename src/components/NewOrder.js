import React, { Component } from 'react';
import Footer from './Footer';

class NewOrder extends Component {
  render(){
    return(
      <div>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default NewOrder;
