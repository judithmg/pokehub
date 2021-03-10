import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function pokedexReducer(state = initialState.pokedex, action) {
  switch (action.type) {
    case actionTypes.LOAD_POKELIST:
      return action.data;

    default:
      return state;
  }
}
