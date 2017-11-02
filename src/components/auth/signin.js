import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignIn extends Component {

  handleFormSubmit({ email, password }) {
    //verify email and password
    this.props.SignInUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    //insert email and password to reduxform from props
    const { handleSubmit, fields: { email, password }} = this.props;


    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="forms">
        <fieldset className="form-group">
          <label>E-post adress:</label>
          <input {...email} className="form-control" />
        </ fieldset>
        <fieldset className="form-group">
          <label>Lösenord:</label>
          <input {...password} type="password" className="form-control" />
        </ fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Logga in
        </button>
      </div>
      </form>
    )
  }
}

//connect state with props
function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
}, mapStateToProps, actions)(SignIn);
