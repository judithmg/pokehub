export default function calculateAttackPower(attackData, attacker, defendant) {
  // If the attack deals no damage, don't apply these formula
  if (attackData.basePower === 0) {
    return 0;
  }
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
  // In case no statement is true, return 0 - this condition hasn't probably yet been considered
  return 0;
}
