import axios from 'axios';
import actionTypes from './actionTypes';

// const dbUrl = 'http://localhost:5000/pokehub/pokedex';

function loadPokelist() {
  return async (dispatch) => {
    const { data } = await axios.get('./pokemon.json');
    dispatch({
      type: actionTypes.LOAD_POKELIST,
      data,

    });
  };
}

function fjf() {

}

export { loadPokelist, fjf };
