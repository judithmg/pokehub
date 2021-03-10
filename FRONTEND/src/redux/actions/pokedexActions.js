import axios from 'axios';
import actionTypes from './actionTypes';

// import pokemon from '../../data/pokemini.json';

function loadPokelist() {
  return async (dispatch) => {
    const { data } = await axios.get('./pokemini.json');
    console.log(data);
    // eslint-disable-next-line no-debugger
    debugger;
    dispatch({
      type: actionTypes.LOAD_POKELIST,
      data,

    });
    // eslint-disable-next-line no-debugger
    debugger;
  };
}

function fjf() {

}

export { loadPokelist, fjf };
