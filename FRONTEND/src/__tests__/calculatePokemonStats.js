import calculatePokemonStats from '../battle/calculatePokemonStats';

const pokemon = {
  baseStats: {
    hp: 55,
    atk: 90,
    def: 80,
    spa: 50,
    spd: 105,
    spe: 96,
  },
};

describe('Given a calculatePokemonStats', () => {
  describe('When it is called on a battle', () => {
    test('Then it should return an object with the battleStats from said pokemon', () => {
      expect(typeof (calculatePokemonStats(pokemon))).toBe('object');
    });
    test('Then it should return an object with the battleStats from said pokemon', () => {
      expect((calculatePokemonStats(pokemon))).toEqual({
        hp: 272,
        maxhp: 272,
        atk: 237,
        def: 217,
        spa: 157,
        spd: 267,
        spe: 249,
      });
    });
  });
});
