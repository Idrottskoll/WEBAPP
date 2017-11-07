import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Modal from './Modal';

class Header extends Component {
  //handle login/ logout html
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item">
          <Link to="/LoggedInUser" className="nav-link">Mina sidor</Link>
        </li>,
        <li className="nav-item">
          <Link to="/signout" className="nav-link">Logga ut</Link>
        </li>
      ]
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link to="/SignIn" className="nav-link">Logga in</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">Registera</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <div>
      <Modal />
      <nav className="navbar navbar-light navbar-transparent">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Hem</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hur fungerar det?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Om Idrottskoll</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Kontakt</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
