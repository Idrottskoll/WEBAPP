import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Modal from 'react-modal';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      type: null
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    this.setState({modalIsOpen: true});
    // Set if SignIn or SignUp modal should be displayed
    this.setState({ type: e.target.id })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link to="/LoggedInUser" className="nav-link">Mina sidor</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signout" className="nav-link">Logga ut</Link>
        </li>
      ]
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link id="signIn" onClick={this.openModal} className="nav-link">Logga in</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link id="signUp" onClick={this.openModal} className="nav-link">Registera</Link>
        </li>
      ];
    }
  }

componentDidMount() {
  window.addEventListener('background', this.handleScroll);
}
componentWillUnmount() {
  window.removeEventListener('background', this.handleScroll);
}
handleScroll(event) {
  let scrollTop = event.srcElement.body.scrollTop,
    itemTranslate = Math.min(0, scrollTop/3 - 60);
  this.setState({
    transform: itemTranslate
  });
}

  render() {
    return (
      <div>
      {/* <Modal /> */}
      <nav className="navbar navbar-light navbar-transparent" id="div">
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
      <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} >
        <button onClick={this.closeModal} className="modal-button" ></button>
        {this.state.type === 'signIn' ?   <h2 className="modal-text" ref={subtitle => this.subtitle = subtitle}>Logga in</h2>
        :   <h2 className="modal-text" ref={subtitle => this.subtitle = subtitle}>Registrera</h2>}
        {this.state.type === 'signIn' ? <SignIn /> : <SignUp /> }

      </Modal>
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
