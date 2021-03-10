import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function pokedexReducer(state = initialState.pokedex, action) {
  switch (action.type) {
    case actionTypes.LOAD_POKELIST:
      // eslint-disable-next-line no-debugger
      debugger;
      console.log(action.data);
      return action.data;

    default:
      return state;
  }
}
