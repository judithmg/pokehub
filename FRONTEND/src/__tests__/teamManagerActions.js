import axios from 'axios';
import actionTypes from '../redux/actions/actionTypes';
import configureStore from '../redux/store/configureStore';
import {
  teamActionsError,
  loadTeams,
  deleteOneTeam,
  modifyTeam,
  loadOneTeam,
  loadTeamSuccess,
  loadTeam,
} from '../redux/actions/teamManagerActions';

jest.mock('axios');

describe('Given teamActions', () => {
  let store;
  let data;
  let error;
  let teamId;
  let team;
  let moves;
  let learnsets;
  beforeEach(() => {
    store = configureStore();

    store.dispatch = jest.fn();
  });
  describe('When teamActionsError is called', () => {
    test('Then', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        error,
      }));
      expect(teamActionsError()).toEqual({
        type: actionTypes.TEAM_ERROR,
        error,
      });
    });
  });
  describe('When loadTeams is called', () => {
    test('Then', async () => {
      data = { teams: [] };
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data,
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = loadTeams();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(
        { data: data.teams, type: actionTypes.LOAD_TEAMS },
      );
    });
  });
  describe('When deleteOneTeam is called', () => {
    test('Then', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        teamId,
      }));
      expect(deleteOneTeam()).toEqual({
        type: actionTypes.DELETE_ONE_TEAM,
        teamId,
      });
    });
  });
  describe('When modifyTeam is called', () => {
    test('Then', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        teamId, team,
      }));
      expect(modifyTeam()).toEqual({
        type: actionTypes.MODIFY_TEAM,
        teamId,
        team,
      });
    });
  });
  describe('When loadOneTeam is called', () => {
    test('Then', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        teamId,
        moves,
        learnsets,
      }));
      expect(loadOneTeam()).toEqual({
        type: actionTypes.LOAD_ONE_TEAM,
        teamId,
        moves,
        learnsets,
      });
    });
  });
  describe('When loadTeamSuccess is called', () => {
    test('Then', () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        teamId,
        moves,
        learnsets,
      }));
      expect(loadTeamSuccess()).toEqual({
        type: actionTypes.LOAD_ONE_TEAM,
        teamId,
        moves,
        learnsets,
      });
    });
  });
  describe('When loadTeam is called', () => {
    test('Then', async () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: 'fake',
      }));

      store.dispatch = jest.fn();
      const dispatchFunction = loadTeam();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toBeTruthy();
    });
  });
});
