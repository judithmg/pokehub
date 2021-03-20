import axios from 'axios';
import actionTypes from '../redux/actions/actionTypes';
import configureStore from '../redux/store/configureStore';
import {
  teamActionsError,
  createTeam,
  addPokemonToTeam,
  submitTeamSuccess,
  deleteOneTeamSuccess,
  modifyOnePokemonSuccess,
  submitTeam,
  modifyOnePokemon,
  deleteOneTeam,
} from '../redux/actions/teamCreatorActions';

jest.mock('axios');

describe('Given teamActions', () => {
  let store;
  let data;
  let error;
  const team = { id: 8, pokemons: [{}] };
  let user;
  let name;
  const moveset = [''];
  const pokemon = { name: 'pikachu', num: 25 };

  beforeEach(() => {
    store = configureStore();

    store.dispatch = jest.fn();
  });
  describe('When teamActionsError is called', () => {
    test('Then it should return an action', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        error,
      }));
      expect(teamActionsError()).toEqual({
        type: actionTypes.TEAM_ERROR,
      });
    });
  });
  describe('When createTeam is called', () => {
    test('Then it should return an action', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
      }));
      expect(createTeam()).toEqual({
        type: actionTypes.CREATE_TEAM,
      });
    });
  });
  describe('When addPokemonToTeam is called', () => {
    test('Then it should return an action', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({

      }));
      expect(addPokemonToTeam()).toEqual({
        type: actionTypes.ADD_POKEMON_TO_TEAM,
      });
    });
  });
  describe('When submitTeamSuccess is called', () => {
    test('Then it should return an action', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));
      expect(submitTeamSuccess()).toEqual({
        type: actionTypes.SUBMIT_TEAM,
        data,
      });
    });
  });
  describe('When deleteOneTeamSuccess is called', () => {
    test('Then it should return an action', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));
      expect(deleteOneTeamSuccess()).toEqual({
        type: actionTypes.DELETE_ONE_TEAM,
        data,
      });
    });
  });
  describe('When modifyOnePokemonSuccess is called', () => {
    test('Then it should return an action', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));
      expect(modifyOnePokemonSuccess()).toEqual({
        type: actionTypes.MODIFY_POKEMON,
        data,
      });
    });
  });
  describe('When submitTeam is called', () => {
    test('Then store.dispatch should be called ', async () => {
      user = { email: '@' };
      axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = submitTeam(team, user, name);
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(
        { data, type: actionTypes.SUBMIT_TEAM },
      );
    });
  });
  describe('When modifyOnePokemon is called', () => {
    test('Then store.dispatch should be called ', async () => {
      user = { email: '@' };
      axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
        team, email: user.email,
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = modifyOnePokemon(team,
        user,
        moveset,
        pokemon);
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(
        { team, type: actionTypes.MODIFY_POKEMON },
      );
    });
  });
  describe('When deleteOneTeam is called', () => {
    test('Then store.dispatch should be called ', async () => {
      axios.patch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = deleteOneTeam(team,
        user);
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(
        { data, type: actionTypes.DELETE_ONE_TEAM },
      );
    });
  });
});
