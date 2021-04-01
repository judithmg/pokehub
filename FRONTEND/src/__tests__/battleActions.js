import actionTypes from '../redux/actions/actionTypes';
import configureStore from '../redux/store/configureStore';
import {
  startNewFight,
  loadBattleTeam,
  loadAttackBox,
  loadPlayerPokemonSuccess,
} from '../redux/actions/battleActions';

import {
  loadEnemy,
  handleKOEnemy,
  newEnemyPokemon,
  newEnemyPokemonLoad,
  newEnemyPokemonMsg,
  resolveAttackEnemy,
} from '../redux/actions/battleActionsEnemy';

import {
  newPlayerPokemonLoad,
  newPlayerPokemonMsg,
  playerAttacks,
  resolveAttack,
  handleKO,
} from '../redux/actions/battleActionsPlayer';

jest.mock('axios');

describe('Given battleActions', () => {
  let store;
  let data;
  beforeEach(() => {
    store = configureStore();
    store.dispatch = jest.fn();
  });

  describe('When loadBattleTeam is called', () => {
    test('Then an action is returned', () => {
      expect(loadBattleTeam(data)).toEqual({
        type: actionTypes.LOAD_BATTLE_TEAM,
        data,
      });
    });
  });

  describe('When loadAttackBox is called', () => {
    test('Then an action is returned', () => {
      expect(loadAttackBox(data)).toEqual({
        type: actionTypes.LOAD_ATTACK_BOX,
        data,
      });
    });
  });

  describe('When loadPlayerPokemonSuccess is called', () => {
    test('Then an action is returned', () => {
      expect(loadPlayerPokemonSuccess(data)).toEqual({
        type: actionTypes.LOAD_PLAYER_POKEMON,
        data,
      });
    });
  });

  describe('When loadEnemy is called', () => {
    test('Then an action is returned', () => {
      expect(loadEnemy(data)).toEqual({
        type: actionTypes.LOAD_ENEMY,
        data,
      });
    });
  });

  describe('When newEnemyPokemonLoad is called', () => {
    test('Then an action is returned', () => {
      expect(newEnemyPokemonLoad(data)).toEqual({
        type: actionTypes.NEW_ENEMY_POKEMON_LOAD,
        data,
      });
    });
  });

  describe('When newEnemyPokemonMsg is called', () => {
    test('Then an action is returned', () => {
      expect(newEnemyPokemonMsg(data)).toEqual({
        type: actionTypes.NEW_ENEMY_POKEMON_MSG,
        data,
      });
    });
  });

  describe('When newPlayerPokemonLoad is called', () => {
    test('Then an action is returned', () => {
      expect(newPlayerPokemonLoad(data)).toEqual({
        type: actionTypes.NEW_PLAYER_POKEMON_LOAD,
        data,
      });
    });
  });

  describe('When playerAttacks is called', () => {
    test('Then an action is returned', () => {
      expect(playerAttacks(data)).toEqual({
        type: actionTypes.PLAYER_ATTACKS,
        data,
      });
    });
  });
  describe('When newPlayerPokemonMsg is called', () => {
    test('Then an action is returned', () => {
      expect(newPlayerPokemonMsg(data)).toEqual({
        type: actionTypes.NEW_PLAYER_POKEMON_MSG,
        data,
      });
    });
  });
  describe('When resolveAttackEnemy is called', () => {
    test('Then an action is returned', () => {
      expect(resolveAttackEnemy(data)).toEqual({
        type: actionTypes.RESOLVE_ATTACK_ENEMY,
        data,
      });
    });
  });
  describe('When resolveAttack is called', () => {
    test('Then an action is returned', () => {
      expect(resolveAttack(data)).toEqual({
        type: actionTypes.RESOLVE_ATTACK_PLAYER,
        data,
      });
    });
  });
  describe('When handleKO is called', () => {
    test('Then an action is returned', () => {
      expect(handleKO(data)).toEqual({
        type: actionTypes.HANDLE_KO,
        data,
      });
    });
  });
  describe('When handleKOEnemy is called', () => {
    test('Then an action is returned', () => {
      expect(handleKOEnemy(data)).toEqual({
        type: actionTypes.HANDLE_KO_ENEMY,
        data,
      });
    });
  });

  describe('When startNewFight is invoked', () => {
    test('Then dispatch is called with the data return from axios', async () => {
      const dispatchFunction = startNewFight(data);
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_BATTLE_TEAM,
        data,
      });
    });
  });
  describe('When newEnemyPokemon is invoked', () => {
    test('Then dispatch is called with the data return from axios', async () => {
      const dispatchFunction = newEnemyPokemon(data);
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.NEW_ENEMY_POKEMON_MSG,
      });
    });
  });
});
