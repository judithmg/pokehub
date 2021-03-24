/* eslint-disable no-undef */
export default function getAttackData(attack, moves) {
  const {
    basePower,
    shortDesc,
    pp,
    type,
    name,
    category,
  } = moves.find((move) => move.name === attack);
  return {
    basePower,
    shortDesc,
    pp,
    type,
    category,
    name,
  };
}
