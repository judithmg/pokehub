import teamsReducer from '../redux/reducers/teamsReducer';
import actionTypes from '../redux/actions/actionTypes';
import initialState from '../redux/store/initialState';

let state;
let data;
let fakeAction;
describe('Given a teamsReducer function', () => {
  beforeEach(() => {
    state = {};
  });
  describe('When it is called with an action with type LOAD_TEAMS', () => {
    test('Then the state should be modified and teams.length should be 2', () => {
      data = [{ num: 10 }, { num: 10 }];

      fakeAction = {
        type: actionTypes.LOAD_TEAMS,
        data,
      };
      const answer = teamsReducer(state, fakeAction);
      expect(answer.teams.length).toBe(2);
    });
  });
  describe('When it is called with an action with type CREATE_TEAM', () => {
    test('Then the state should be modified and pokedex.length should be 2', () => {
      state = { teams: [{ id: 2, pokemons: [{}] }, { id: 1, pokemons: [{}] }] };
      data = {
        teams:
        [{ id: 2, pokemons: [{}] }, { id: 1, pokemons: [{}] }],
      };

      fakeAction = {
        type: actionTypes.CREATE_TEAM,
        data,
      };
      const answer = teamsReducer(state, fakeAction);
      expect(answer.teams.length).toBe(2);
    });
  });
  describe('When it is called with an action with type DELETE_ONE_TEAM', () => {
    test('Then the state should be modified and teams.length should be 2', () => {
      data = {
        teams:
        [{ id: 2, pokemons: [{}] }, { id: 1, pokemons: [{}] }],
      };
      fakeAction = {
        type: actionTypes.DELETE_ONE_TEAM,
        data,
      };
      const answer = teamsReducer(state, fakeAction);
      expect(answer.teams.length).toBe(2);
    });
  });
  describe('When it is called with an action with type MODIFY_TEAM', () => {
    test('Then the state should be modified and teams.length should be 1 if no matching team is found on state', () => {
      state = { teams: [{ id: 2, pokemons: [{}] }, { id: 1, pokemons: [{}] }] };

      data = {
        teams:
        [{ id: 2, pokemons: [{}] }, { id: 1, pokemons: [{}] }],
      };
      fakeAction = {
        type: actionTypes.MODIFY_TEAM,
        data,
      };
      const answer = teamsReducer(state, fakeAction);
      expect(answer.teams.length).toBe(1);
    });
  });
  describe('When it is called with an action with type LOAD_ONE_TEAM', () => {
    test('Then the state should be modified and a teams length will be the same', () => {
      state = { teams: [{ id: 2, pokemons: [{ name: 'pichu' }] }, { id: 1, pokemons: [{}] }] };

      fakeAction = {
        type: actionTypes.LOAD_ONE_TEAM,
        teamId: 2,
        learnsets: [{ name: 'pichu', learnset: ['pichu'] }],
        moves: [{ id: 'pichu' }],
      };
      const answer = teamsReducer(state, fakeAction);
      expect(answer.teams.length).toBe(2);
    });
    test('Then the state should be modified and a teams length will be the same', () => {
      state = { teams: [{ id: 'champ', pokemons: [{ name: 'pichu' }] }, { id: 1, pokemons: [{}] }] };

      fakeAction = {
        type: actionTypes.LOAD_ONE_TEAM,
        teamId: 'champ',
        learnsets: [{ name: 'pichu', learnset: ['pichu'] }],
        moves: [{ id: 'pichu' }],
      };
      const answer = teamsReducer(state, fakeAction);
      expect(answer.teams.length).toBe(2);
    });
  });
  describe('When it is called with an action with type ADD_POKEMON_TO_TEAM', () => {
    test('Then state will be returned with a new team with the new Pokemon added to it', () => {
      state = { newTeam: { id: 8, pokemons: [{ id: 1 }, { id: 2 }] }, teams: [] };

      fakeAction = {
        type: actionTypes.ADD_POKEMON_TO_TEAM,
        num: 172,
        pokedex: [{ num: 172, name: 'pichu' }],

      };
      const answer = teamsReducer(state, fakeAction);
      expect(answer.newTeam.pokemons[0].num).toBe(172);
    });
    test('Then state will be returned with a new team with the new Pokemon added to it on a different position than 0 if there was already a Pkmn there', () => {
      state = { newTeam: { id: 8, pokemons: [{ id: 1, num: 1 }, { id: 2 }] }, teams: [] };

      const answer = teamsReducer(state, fakeAction);
      expect(answer.newTeam.pokemons[1].num).toBe(172);
    });
  });
  describe('When it is called with an action with type SUBMIT_TEAM', () => {
    test('Then the state should be modified and newTeam will be an empty object', () => {
      state = { teams: [{}, {}] };
      fakeAction = {
        type: actionTypes.SUBMIT_TEAM,
        data: { teams: [{}, {}] },
      };
      const answer = teamsReducer(state, fakeAction);
      expect(answer.newTeam).toEqual({});
    });
  });
  describe('When it is called with an action with type MODIFY_POKEMON', () => {
    test('Then the state should be modified and and the team from the action will be added to it', () => {
      state = { };
      fakeAction = {
        type: actionTypes.MODIFY_POKEMON,
        team: {},
      };
      const answer = teamsReducer(state, fakeAction);
      expect(answer.team).toEqual({});
    });
  });
  describe('When it is called with an action not found on the reducer', () => {
    test('Then the state returned will be the default', () => {
      state = undefined;
      expect(teamsReducer(state, { type: 'fake' })).toEqual(initialState.teamsReducer);
    });
  });
});
