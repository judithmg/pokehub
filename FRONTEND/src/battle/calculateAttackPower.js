/* eslint-disable no-debugger */
/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */

export default function calculateAttackPower(attackData, attacker, defendant, modifier) {
  if (attackData.category.toUpperCase() === 'SPECIAL') {
    return (Math.floor(((((2 * attacker.level / 5) + 2)
     * attackData.basePower * (attacker.battleStats.spa / defendant.battleStats.spd) / 50) + 2)) * modifier);
  }

  if (attackData.category.toUpperCase() === 'PHYSICAL') {
    return (Math.floor(((((2 * attacker.level / 5) + 2) * attackData.basePower * (attacker.battleStats.atk / defendant.battleStats.def) / 50) + 2)) * modifier);
  }
  return 0;
}

// special physical constantes
