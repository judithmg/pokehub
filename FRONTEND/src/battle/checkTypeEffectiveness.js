export default function checkTypeEffectiveness(attacker, deffendant, typechart) {
  const typeAttack = attacker.attack.type;
  const typeDeffendant = deffendant.types;

  const attackerEffectiveness = typechart.filter((type) => type.toLowerCase() === typeAttack);

  typeDeffendant.map((type) => attackerEffectiveness[type]);
}
