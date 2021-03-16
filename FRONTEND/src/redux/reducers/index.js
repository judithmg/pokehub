import { combineReducers } from 'redux';
import pokedexReducer from './pokedexReducer';
import teamsReducer from './teamsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ pokedexReducer, teamsReducer, userReducer });

export default rootReducer;
