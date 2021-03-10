import axios from 'axios';
import actionTypes from './actionTypes';

function loadPokelist() {
  return async (dispatch) => {
    const { data } = await axios.get('./pokemini.json');
    dispatch({
      type: actionTypes.LOAD_POKELIST,
      data,

    });
  };
}

function fjf() {

}

export { loadPokelist, fjf };
