import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { PokeDetailComponent, mapStateToProps } from '../pages/pokedetail';

describe('Given a Pokedetail component', () => {
  describe('When it is invoked', () => {
    let container = null;
    const pokemonAbilities = [{ name: 'jkksjs', num: 1 }];
    const pokemonLearnset = [[{ type: 'fire' }]];
    const pokemon = {
      'name-jap': 'Bulbasaur',
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
    let pokedex = [{}];
    let moves = [[{ type: 'fire' }]];
    let abilities = [{}];
    let learnsets = [{}];

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
    describe('When it is invoked', () => {
      test('Then there should be a section', () => {
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

        const dashboard = document.querySelector('section');
        expect(dashboard).toBeTruthy();
      });
      test('Then there should be a span with a MOVES text', () => {
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

        const { innerHTML } = document.querySelector('.pokemon__moves-title');
        expect(innerHTML).toBe('MOVES');
      });
      describe('When the url params are read', () => {
        test('Then loadPokemonDetail should be called', () => {
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

          expect(actions.loadPokemonDetail).toHaveBeenCalled();
        });
        test('Then loadPokemonLearnset should be called', () => {
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

          expect(actions.loadPokemonLearnset).toHaveBeenCalled();
        });
        test('Then loadPokemonAbilities should be called', () => {
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

          expect(actions.loadPokemonAbilities).toHaveBeenCalled();
        });
        describe('When data is not found on the state', () => {
          beforeEach(() => {
            pokedex = [];
            moves = [];
            abilities = [];
            learnsets = [];
          });
          test('Then loadLearnsets should be called', () => {
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
            expect(actions.loadLearnsets).toHaveBeenCalled();
          });
          test('Then loadAbilities should be called', () => {
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
            expect(actions.loadAbilities).toHaveBeenCalled();
          });
          test('Then loadMoves should be called', () => {
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
            expect(actions.loadMoves).toHaveBeenCalled();
          });
          test('Then loadPokedex should be called', () => {
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
            expect(actions.loadPokedex).toHaveBeenCalled();
          });
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
