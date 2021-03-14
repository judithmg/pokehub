import { combineReducers } from 'redux';
import pokedexReducer from './pokedexReducer';
import teamsReducer from './teamsReducer';

const rootReducer = combineReducers({ pokedexReducer, teamsReducer });

export default rootReducer;
