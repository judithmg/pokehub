export default [[{
  num: 1,
  name: 'Bulbasaur',
  types: ['Grass', 'Poison'],
  genderRatio: { M: 0.875, F: 0.125 },
  baseStats: {
    hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45,
  },
  abilities: { 0: 'Overgrow', H: 'Chlorophyll' },
  heightm: 0.7,
  weightkg: 6.9,
  color: 'Green',
  evos: ['Ivysaur'],
  eggGroups: ['Monster', 'Grass'],
}], [{
  num: 2,
  name: 'Ivysaur',
  types: ['Grass', 'Poison'],
  genderRatio: { M: 0.875, F: 0.125 },
  baseStats: {
    hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60,
  },
  abilities: { 0: 'Overgrow', H: 'Chlorophyll' },
  heightm: 1,
  weightkg: 13,
  color: 'Green',
  prevo: 'Bulbasaur',
  evoLevel: 16,
  evos: ['Venusaur'],
  eggGroups: ['Monster', 'Grass'],
}], [{
  num: 3,
  name: 'Venusaur',
  types: ['Grass', 'Poison'],
  genderRatio: { M: 0.875, F: 0.125 },
  baseStats: {
    hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80,
  },
  abilities: { 0: 'Overgrow', H: 'Chlorophyll' },
  heightm: 2,
  weightkg: 100,
  color: 'Green',
  prevo: 'Ivysaur',
  evoLevel: 32,
  eggGroups: ['Monster', 'Grass'],
  otherFormes: ['Venusaur-Mega'],
  formeOrder: ['Venusaur', 'Venusaur-Mega'],
  canGigantamax: 'G-Max Vine Lash',
}]];
