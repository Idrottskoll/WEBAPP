import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, Router, Route, IndexRoute, browserHistory } from 'react-router';
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
import Header from './components/Header';
import Footer from './components/Footer';

// Views
import LoggedInUser from './views/LoggedInUser';
import HomeScreen from './views/HomeScreen';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
//if token exist user should be signed in
if (token) {
  //update application state
  store.dispatch( { type: AUTH_USER });
}

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <div>
//         <Route exact path="/" component={HomeScreen}>
//         <Route path="SignIn" component={SignIn} />
//         <Route path="SignOut" component={SignOut} />
//         <Route path="SignUp" component={SignUp} />
//
//         </Route>
//       </div>
//
//       {/* <Route path="HowDoesItWork" component={HowDoesItWork} /> */}
//       {/* <Route path="Feature" component={RequireAuth(Feature)} /> */}
//       <div>
//       <Route exact path="LoggedInUser" component={LoggedInUser} />
//       <Route path="MyProfile" component={MyProfile} />
//       <Route path="MyVideos" component={MyVideos} />
//       <Route path="NewOrder" component={NewOrder} />
//       </div>
//
//
//     </Router>
//   </Provider>
//   , document.querySelector('.body-container'));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <app>
        <Header />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="LoggedInUser" component={LoggedInUser} />
        <Route path="SignIn" component={SignIn} />
        <Route path="SignOut" component={SignOut} />
        <Route path="SignUp" component={SignUp} />
        <Route path="MyProfile" component={MyProfile} />
        <Route path="MyVideos" component={MyVideos} />
        <Route path="NewOrder" component={NewOrder} />
        <Footer />
      </app>
    </Router>
  </Provider>
  , document.querySelector('.body-container'));
