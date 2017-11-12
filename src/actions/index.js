import axios from 'axios';
import { browserHistory } from 'react-router';
import { ROOT_URL, SPECIAL_TOKEN, SignIn_URL } from './config'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_USER_DATA
 } from './types';

export function SignInUser({ email, password}) {
  //access to redax-dispatch is inside this function
  return function (dispatch) {
    //submit email/pasword to server
    axios.post(ROOT_URL + SignIn_URL, { email, password })
      //if request is good
      .then(response => {
        /*update state to indicate user is authenticaded false->true,
        this happens in auth_reducer.js*/
        dispatch({ type: AUTH_USER });
        //save the jwt token to lokalstore
        localStorage.setItem('token', SPECIAL_TOKEN + response.data.token);
        //redirect user
        browserHistory.push('/LoggedInUser');


      })
      //if request is bad
      .catch(() => {
        //show error
        dispatch(authError('Bad Login Info'));
      });
  }
}

//logout
export function signoutUser() {
  //remove token from localstorage
  localStorage.removeItem('token');
  //set authenticated to false
  return { type: UNAUTH_USER };
}

//signup
export function signupUser({ email, name, password, passwordConfirmation }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}register`, { email, name, password, passwordConfirmation })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', SPECIAL_TOKEN + response.data.token);
        browserHistory.push('/LoggedInUser');
      })
      .catch(response => {
        dispatch(authError('Error with signup, username is taken?')
      )});
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function fetchMessage(data) {
  return function(dispatch) {
    axios.get(ROOT_URL + data, {
      headers: { Authorization: localStorage.getItem('token') }
      // headers: { Authorization: SPECIAL_TOKEN + localStorage.getItem('token') }
    })
    .then( response => {
      dispatch({
        type: FETCH_MESSAGE,
        // type: FETCH_USER_DATA,
        payload: response.data
      });
    });
  }
}

export function fetchUserData(data) {
  return function(dispatch) {
    axios.get(ROOT_URL + data, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then( response => {
      dispatch({
        type: FETCH_USER_DATA,
        payload: response.data
      });
    });
  }
}
