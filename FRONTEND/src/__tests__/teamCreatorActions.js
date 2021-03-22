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
  const pokemon = { name: 'pikachu', num: 25, id: 1 };
  const teams = [{ id: 8, pokemons: [{}] }];

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
    test('Then there is an error if action does not succeeed', async () => {
      axios.put = jest.fn().mockRejectedValueOnce('error');

      store.dispatch = jest.fn();
      const dispatchFunction = submitTeam(team,
        user, name);
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(
        { error: 'error', type: actionTypes.TEAM_ERROR },
      );
    });
  });
  describe('When modifyOnePokemon is called', () => {
    test('Then store.dispatch should be called ', async () => {
      user = { email: '@' };
      axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
        teams,
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = modifyOnePokemon(team,
        teams,
        user,
        moveset,
        pokemon);
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(
        { team, type: actionTypes.MODIFY_POKEMON },
      );
    });
    test('Then there is an error if action does not succeeed', async () => {
      axios.put = jest.fn().mockRejectedValueOnce('error');

      store.dispatch = jest.fn();
      const dispatchFunction = modifyOnePokemon(team,
        teams,
        user,
        moveset,
        pokemon);
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(
        { error: 'error', type: actionTypes.TEAM_ERROR },
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
    test('Then when it does not suceed there is an error', async () => {
      axios.patch = jest.fn().mockRejectedValueOnce('error');

      store.dispatch = jest.fn();
      const dispatchFunction = deleteOneTeam(team,
        user);
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(
        { error: 'error', type: actionTypes.TEAM_ERROR },
      );
    });
  });
});
