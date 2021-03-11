import React from 'react';
import learnset from '../../data/learnset.json';
import moves from '../../data/moves.json';

export default function Pruebas() {
  const pokemon = 'mimikyu';
  const pokemonLearnset = learnset.find((poke) => poke.name === pokemon);
  // eslint-disable-next-line no-unused-vars
  const result = pokemonLearnset.learnset.map((pokemove) => moves.filter((move) => move.name.replaceAll(/\W/ig, '').toLowerCase() === pokemove));
  // const filtered = pokemonLearnset?.learnset.map((pokemove) =>
  // state.moves.filter(((move) => move.name.replace(/[^a-zA-Z ]/g, '') === pokemove)));
  return (
    <div>
      {console.log(pokemonLearnset)}
      {console.log(result)}
    </div>
  );
}

pokemonLearnset = state.learnsets.find((poke) => poke.name === pokemon);
filteredMoves = pokemonLearnset.learnset.map((pokemove) => state.moves.filter((move) => move.name.replaceAll(/\W/ig, '').toLowerCase() === pokemove));
