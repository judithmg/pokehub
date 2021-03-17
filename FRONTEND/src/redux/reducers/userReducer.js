import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function userReducer(state = initialState.userReducer, action) {
  switch (action.types) {
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.data };
    case actionTypes.LOGOUT_USER:
      return { ...state, user: null };
    case actionTypes.SIGNUP_USER:
      return { ...state, user: action.data };
    case actionTypes.DELETE_USER:
      return { ...state, user: null };
    case actionTypes.MODIFY_USER:
      return { ...state, user: action.data };
    default:
      return state;
  }
}
