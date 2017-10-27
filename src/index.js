import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

// Import css
// import '../style.css';

//middleware
import reduxThunk from 'redux-thunk';

//Must be loggin in
import RequireAuth from './components/auth/require_auth';

//components
import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Feature from './components/feature';
import Hero from './components/hero';
import HowDoesItWork from './components/how_does_it_work';
import About from './components/about';
import CaseSlider from './components/caseSlider';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
//if token exist user should be signed in
if (token) {
  //update application state
  store.dispatch( { type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>

        <Route path="how_does_it_work" component={HowDoesItWork} />
        <Route path="feature" component={RequireAuth(Feature)} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.body-container'));
