import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import Feature from './Feature';

class MyProfile extends Component {
  componentWillMount() {
    this.props.fetchMessage('user');
  }

  renderMessage() {
    if (this.props.message) {
      return (
        <div>
          <label>För- och efternamn:</label>
          <input type="text" className="form-control" value={this.props.message.name} />
          <label>E-post adress:</label>
          <input type="text" className="form-control" value={this.props.message.email} />
        </div>
    )};
  }
  renderName() {
    if (this.props.message) {
      return (
        <div>
          <h3 className="margin-top">{this.props.message.name}</h3>
        </div>
    )};
  }

  render(){
    console.log(this.props.message);
    // console.log(this.props.message.name);
    return(
      <div className="container profile">
        <div className="col-md-12">
          <h2>Min profil </h2>
        </div>
        <div className="col-md-6 forms-inlogged">
          <h3 className="margin-top">Mina uppgifter</h3>
          {this.renderMessage()}
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
        <div className="col-md-6">
          <div className="profile-image">
            {this.renderName()}
            <div className="image-block"></div>
            <button action="submit" className="btn btn-primary">
              Uppdatera bild
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(MyProfile);
