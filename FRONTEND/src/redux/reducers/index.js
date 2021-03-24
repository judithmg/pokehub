import { combineReducers } from 'redux';
import pokedexReducer from './pokedexReducer';
import teamsReducer from './teamsReducer';
import userReducer from './userReducer';
import battleReducer from './battleReducer';

const rootReducer = combineReducers({
  pokedexReducer, teamsReducer, userReducer, battleReducer,
});

export default rootReducer;
