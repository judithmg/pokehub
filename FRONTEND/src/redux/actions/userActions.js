import axios from 'axios';
import actionTypes from './actionTypes';
import dbUrls from '../../constants/dbUrls';

export function loginUser(email) {
  return async (dispatch) => {
    const { data } = await axios.post(`${dbUrls.baseUrl}${dbUrls.login}`, { email });
    dispatch({
      type: actionTypes.LOGIN_USER,
      data,
    });
  };
}

export function logoutUser() {
  return {
    type: actionTypes.LOGOUT_USER,
  };
}

export function signupUser(email) {
  return async (dispatch) => {
    const { data } = await axios.post(`${dbUrls.baseUrl}${dbUrls.signUp}`, { email });
    dispatch({
      type: actionTypes.SIGNUP_USER,
      data,
    });
  };
}

export function deleteUser() {
  return {
    type: actionTypes.DELETE_USER,
  };
}

export function modifyUser() {
  return {
    type: actionTypes.MODIFY_USER,
  };
}

export function loginError() {
  return {
    type: actionTypes.LOGIN_ERROR,
  };
}

export function signupError() {
  return {
    type: actionTypes.SIGNUP_ERROR,
  };
}
