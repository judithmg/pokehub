import axios from 'axios';
import actionTypes from './actionTypes';
import dbUrls from '../../constants/dbUrls';

function loginSuccess(data) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data,
  };
}

function userActionsError(error) {
  return {
    type: actionTypes.USER_ERROR,
    error,
  };
}

// this function is used both to login the user and to fetch user data if there is none on the state
export function getUserInfo(email) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${dbUrls.baseUrl}${dbUrls.login}`, { email });
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(userActionsError(error));
    }
  };
}

export function logoutUser() {
  return {
    type: actionTypes.LOGOUT_USER,
  };
}

export function signupSuccess(data) {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    data,
  };
}

export function signupUser(email) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${dbUrls.baseUrl}${dbUrls.signUp}`, { email });
      dispatch(signupSuccess(data));
    } catch (error) {
      dispatch(userActionsError(error));
    }
  };
}

export function deleteUser() {
  return {
    type: actionTypes.DELETE_USER,
  };
}

function modifyUserSucces(data) {
  return {
    type: actionTypes.MODIFY_USER_SUCCESS,
    data,
  };
}

export function modifyUser(email) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${dbUrls.baseUrl}${dbUrls.signUp}`, { email });
      dispatch(modifyUserSucces(data));
    } catch (error) {
      dispatch(userActionsError(error));
    }
  };
}
