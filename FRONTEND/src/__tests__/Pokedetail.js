import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { PokeDetailComponent, mapStateToProps, mapDispatchToProps } from '../pages/pokedetail';

describe('Given a Pokedetail component', () => {
  describe('When it is invoked', () => {
    let container = null;
    const pokemonAbilities = [{ name: 'jkksjs', num: 1 }];
    const pokemonLearnset = [[{ type: 'fire' }]];
    const pokemon = {
      'name-jap': 'Bulbasaur',
      weightkg: 5,
      heightm: 5,
      name: 'Bulbasaur',
      num: 1,
      types: ['pokemon'],
      baseStats: {
        hp: 1,
        spa: 1,
        atk: 1,
        spe: 1,
        def: 1,
        spd: 1,
      },
    };
    const actions = {
      loadPokemonDetail: jest.fn(),
      loadPokedex: jest.fn(),
      loadPokemonAbilities: jest.fn(),
      loadMoves: jest.fn(),
      loadLearnsets: jest.fn(),
      loadAbilities: jest.fn(),
      loadPokemonLearnset: jest.fn(),
    };
    const pokedex = [{}];
    const moves = [[{ type: 'fire' }]];
    const abilities = [{}];
    const learnsets = [{}];

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      act(() => {
        render(
          <BrowserRouter>
            <PokeDetailComponent
              pokemonAbilities={pokemonAbilities}
              pokemonLearnset={pokemonLearnset}
              pokemon={pokemon}
              actions={actions}
              pokedex={pokedex}
              moves={moves}
              abilities={abilities}
              learnsets={learnsets}
            />
          </BrowserRouter>, container,
        );
      });
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
    describe('When it is invoked', () => {
      test('Then there should be a section', () => {
        const dashboard = document.querySelector('section');
        expect(dashboard).toBeTruthy();
      });
      test('Then there should be a span with a MOVES text', () => {
        const { innerHTML } = document.querySelector('.pokemon__moves-title');
        expect(innerHTML).toBe('MOVES');
      });
      describe('When the url params are read', () => {
        test('Then loadPokemonDetail should be called', () => {
          expect(actions.loadPokemonDetail).toHaveBeenCalled();
        });
        test('Then loadPokemonLearnset should be called', () => {
          expect(actions.loadPokemonLearnset).toHaveBeenCalled();
        });
        test('Then loadPokemonAbilities should be called', () => {
          expect(actions.loadPokemonAbilities).toHaveBeenCalled();
        });
      });
    });
  });
});

describe('Given a mapStateToProps function', () => {
  describe('When redux state is passed to it', () => {
    let state;
    test('Then it should return an object with the current state**********', () => {
      state = {
        pokedexReducer: {
          pokedex: [],
          pokemonsShown: [],
          pokedexPage: 1,
          pokemon: {},

          moves: [],
          abilities: [],
          learnsets: [],

          pokemonLearnset: [],
          pokemonAbilities: [],

          pokemonTypeFiltered: '',
        },
      };
      expect(mapStateToProps(state)).toEqual({
        pokedex: state.pokedexReducer.pokedex,
        moves: state.pokedexReducer.moves,
        abilities: state.pokedexReducer.abilities,
        learnsets: state.pokedexReducer.learnsets,

        pokemon: state.pokedexReducer.pokemon,
        pokemonAbilities: state.pokedexReducer.pokemonAbilities,
        pokemonLearnset: state.pokedexReducer.pokemonLearnset,
      });
    });
  });
});

describe('Given a mapDispatchToProps', () => {
  describe('When it is called', () => {
    test('it should return an object', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.actions.loadPokemonDetail).toBeTruthy();
    });
  });
});
