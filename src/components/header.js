import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Header extends Component {
  //handle login/ logout html
  renderLinks() {
    if (this.props.authenticated) {
      return <li className="nav-item">
        <Link to="/signout" className="nav-link">Logga ut</Link>
      </li>
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">Logga in</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">Registera</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light navbar-transparent">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
