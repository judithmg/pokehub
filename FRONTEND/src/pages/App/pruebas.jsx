import React from 'react';
import pokemons from '../../data/pokemon.json';

export default function Pruebas() {
  const array = pokemons.map((pokemon) => pokemon.slice(1));

  return (
    <>
      {JSON.stringify(array)}
    </>
  );
}
