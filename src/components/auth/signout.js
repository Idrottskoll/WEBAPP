import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {
  componentDidMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div className="">
        Sorry to se you go...
      </div>
    );
  }
}

export default connect(null, actions)(SignOut);
