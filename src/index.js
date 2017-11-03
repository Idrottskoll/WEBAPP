import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

//middleware
import reduxThunk from 'redux-thunk';

//Must be loggin in
import RequireAuth from './components/auth/RequireAuth';

//components
import App from './components/App';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import SignOut from './components/auth/SignOut';
import Feature from './components/Feature';
import Hero from './components/Hero';
import HowDoesItWork from './components/HowDoesItWork';
import About from './components/About';
import CaseSlider from './components/CaseSlider';
import ProfileNavigator from './components/ProfileNavigator';
import MyProfile from './components/MyProfile';
import MyVideos from './components/MyVideos';
import NewOrder from './components/NewOrder';

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
      <Route path="HowDoesItWork" component={HowDoesItWork} />
      <Route path="Feature" component={RequireAuth(Feature)} />
      <Route path="SignIn" component={SignIn} />
      <Route path="SignOut" component={SignOut} />
      <Route path="SignUp" component={SignUp} />
      <Route path="MyProfile" component={MyProfile} />
      <Route path="MyVideos" component={MyVideos} />
      <Route path="NewOrder" component={NewOrder} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.body-container'));
