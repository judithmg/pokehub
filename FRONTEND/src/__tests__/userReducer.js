import userReducer from '../redux/reducers/userReducer';
import actionTypes from '../redux/actions/actionTypes';
import initialState from '../redux/store/initialState';

let state;
let fakeAction;
describe('Given a userReducer function', () => {
  beforeEach(() => {
    state = {};
  });
  describe('When it is called with an action with type LOGIN_SUCCESS', () => {
    test('Then the state should be modified and user will be added to it', () => {
      fakeAction = {
        type: actionTypes.LOGIN_SUCCESS,
        data: { name: 'yo' },
      };
      const answer = userReducer(state, fakeAction);
      expect(answer.user.name).toBe('yo');
    });
  });
  describe('When it is called with an action with type MODIFY_USER', () => {
    test('Then the state should be modified and the new user will be added to it', () => {
      fakeAction = {
        type: actionTypes.MODIFY_USER,
        data: { name: 'modified user' },
      };
      const answer = userReducer(state, fakeAction);
      expect(answer.user.name).toBe('modified user');
    });
  });
  describe('When it is called with an action with type SUBMIT_TEAM', () => {
    test('Then the state should be modified and user will be added to it', () => {
      fakeAction = {
        type: actionTypes.SUBMIT_TEAM,
        data: { name: 'user from submit data' },
      };
      const answer = userReducer(state, fakeAction);
      expect(answer.user.name).toBe('user from submit data');
    });
  });
  describe('When it is called with an action with type DELETE_USER', () => {
    test('Then the state should be modified and user will be removed', () => {
      fakeAction = {
        type: actionTypes.DELETE_USER,
        data: { name: 'user from delete' },
      };
      const answer = userReducer(state, fakeAction);
      expect(answer.user).toBe(null);
    });
  });
  describe('When it is called with an action with type LOGOUT_USER', () => {
    test('Then the state should be modified and user will logout be removed', () => {
      fakeAction = {
        type: actionTypes.LOGOUT_USER,
        data: { name: 'user logsout' },
      };
      const answer = userReducer(state, fakeAction);
      expect(answer.user).toBe(null);
    });
  });
  describe('When it is called with an action not found on the reducer', () => {
    test('Then the state returned will be the default', () => {
      state = undefined;
      expect(userReducer(state, { type: 'fake' })).toEqual(initialState.userReducer);
    });
  });
});
