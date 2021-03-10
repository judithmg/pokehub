import { combineReducers } from 'redux';
import pokedexReducer from './pokedexReducer';

const rootReducer = combineReducers({ pokedexReducer });

export default rootReducer;
