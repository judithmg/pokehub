import axios from 'axios';
import actionTypes from '../redux/actions/actionTypes';
import configureStore from '../redux/store/configureStore';
import {
  loginSuccess,
  userActionsError,
  getUserInfo,
  logoutUser,
  signupSuccess,
  signupUser,
  modifyUserSucces,
  modifyUser,
} from '../redux/actions/userActions';

jest.mock('axios');

describe('Given userActions', () => {
  let store;
  let data;
  let error;
  beforeEach(() => {
    store = configureStore();

    store.dispatch = jest.fn();
  });
  describe('When loginSuccess is called', () => {
    test('Then an action is returned', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));
      expect(loginSuccess()).toEqual({
        type: actionTypes.LOGIN_SUCCESS,
        data,
      });
    });
  });
  describe('When userActionsError is called', () => {
    test('Then an action is returned', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));
      expect(userActionsError()).toEqual({
        type: actionTypes.USER_ERROR,
        error,
      });
    });
  });
  describe('When getUserInfo is called', () => {
    test('Then dispatch is called if it succeeds', async () => {
      axios.post = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: 'fake',
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = getUserInfo();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({ data: 'fake', type: 'LOGIN_SUCCESS' });
    });
    test('Then dispatch is called if there is an error', async () => {
      axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
        error: 'fake',
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = getUserInfo();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalled();
    });
  });
  describe('When logoutUser is called', () => {
    test('Then an action is returned', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));
      expect(logoutUser()).toEqual({
        type: actionTypes.LOGOUT_USER,
      });
    });
  });
  describe('When signupUser is called', () => {
    test('Then dispatch is called if it succeeds', async () => {
      axios.post = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: 'fake',
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = signupUser();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({ data: 'fake', type: 'SIGNUP_SUCCESS' });
    });
    test('Then dispatch is called if there is an error', async () => {
      axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
        error: 'fake',
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = signupUser();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalled();
    });
  });
  describe('When signupSuccess is called', () => {
    test('Then an action is returned', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));
      expect(signupSuccess()).toEqual({
        type: actionTypes.SIGNUP_SUCCESS,
        data,
      });
    });
  });
  describe('When modifyUser is called', () => {
    test('Then dispatch is called if it succeeds', async () => {
      axios.post = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: 'fake',
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = modifyUser();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({ data: 'fake', type: actionTypes.MODIFY_USER_SUCCESS });
    });
    test('Then dispatch is called if there is an error', async () => {
      axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
        error: 'fake',
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = modifyUser();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalled();
    });
  });
  describe('When modifyUserSucces is called', () => {
    test('Then an action is returned', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));
      expect(modifyUserSucces()).toEqual({
        type: actionTypes.MODIFY_USER_SUCCESS,
        data,
      });
    });
  });
});
