export default function calculatePokemonStats(
  pokemon,
  level = 100,
  iv = {
    hp: 31,
    atk: 31,
    def: 31,
    spa: 31,
    spd: 31,
    spe: 31,
  }, ev = {
    hp: 84,
    atk: 84,
    def: 84,
    spa: 84,
    spd: 84,
    spe: 84,
  },
) {
  return {
    hp: Math.floor(((iv.hp + (2 * +pokemon.baseStats.hp) + (ev.hp / 4) + 100) * level) / 100) + 10,
    maxhp: Math.floor(((iv.hp + (2 * +pokemon.baseStats.hp) + (ev.hp / 4) + 100) * level) / 100)
    + 10,
    atk: Math.floor((((iv.atk + (2 * +pokemon.baseStats.atk) + (ev.atk / 4)) * level) / 100) + 5),
    def: Math.floor((((iv.def + (2 * +pokemon.baseStats.def) + (ev.def / 4)) * level) / 100) + 5),
    spa: Math.floor((((iv.spa + (2 * +pokemon.baseStats.spa) + (ev.spa / 4)) * level) / 100) + 5),
    spd: Math.floor((((iv.spd + (2 * +pokemon.baseStats.spd) + (ev.spd / 4)) * level) / 100) + 5),
    spe: Math.floor((((iv.spe + (2 * +pokemon.baseStats.spe) + (ev.spe / 4)) * level) / 100) + 5),
  };
}
