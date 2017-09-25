import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  //runs only when form is valid
  handleFormSubmit( formProps ) {
    //call action creator to sign up the user
    this.props.signupUser(formProps);
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
    const { handleSubmit, fields: { 
        email,
        name, 
        password,
        passwordConfirmation }} = this.props;
      
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
          {email.touched && 
            email.error && 
            <div className="error">
              {email.error}
            </div>}
        </ fieldset>
        <fieldset className="form-group">
          <label>Name:</label>
          <input {...name} className="form-control" />
          {name.touched && 
            name.error && 
            <div className="error">
              {name.error}
            </div>}
        </ fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} type="password" className="form-control" />
          {/* if inputfield has been touched and there is a error return div */}
          {password.touched && 
            password.error && 
            <div className="error">
              {password.error}
            </div>}
        </ fieldset>
        <fieldset className="form-group">
          <label>Password Confirm:</label>
          <input {...passwordConfirmation} type="password" className="form-control" />
          {passwordConfirmation.touched && 
            passwordConfirmation.error && 
            <div className="error">
              {passwordConfirmation.error}
            </div>}
        </ fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Sign Up!
        </button>
      </form>
    );
  }
}

//validate input fields
function validate(formProps) {
  
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }
  if (!formProps.name) {
    errors.name = 'Please enter an name';
  }
  if (!formProps.password) {
    errors.password = 'Please enter an password';
  }
  if (!formProps.passwordConfirmation) {
    errors.passwordConfirmation = 'Please enter an passwordConfirmation';
  }

  if (formProps.password !== formProps.passwordConfirmation) {
    errors.password = 'Passwords must match';
  }
  
  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'name', 'password', 'passwordConfirmation'],
  validate
}, mapStateToProps, actions)(Signup);