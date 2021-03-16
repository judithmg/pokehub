/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */

export default function calculateAttackPower(attacker, modifier) {
  if (attacker.attack.type.toUpperCase() === 'SPECIAL') {
    return (Math.floor(((((2 * attacker.level) + 2)
     * attacker.attack.power * (attacker.stats.spa / attacker.stats.spd) / 50) + 2)) * modifier);
  }

  if (attacker.attack.type.toUpperCase() === 'PHYSICAL') {
    return (Math.floor(((((2 * attacker.level) + 2) * attacker.attack.power * (attacker.stats.atk / attacker.stats.def) / 50) + 2)) * modifier);
  }
  return 0;
}

// special physical constantes
