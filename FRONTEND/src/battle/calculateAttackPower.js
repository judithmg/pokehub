export default function calculateAttackPower(attackData, attacker, defendant) {
  if (attackData.category.toUpperCase() === 'SPECIAL') {
    return (Math.floor(((((2 * attacker.level / 5) + 2)
     * attackData
       .basePower * (attacker.battleStats.spa / defendant.battleStats.spd) / 50) + 2))
       * attackData.modifier);
  }

  if (attackData.category.toUpperCase() === 'PHYSICAL') {
    return (Math.floor(((((2 * attacker.level / 5) + 2) * attackData
      .basePower * (attacker.battleStats.atk / defendant.battleStats.def) / 50) + 2))
      * attackData.modifier);
  }
  return 0;
}
