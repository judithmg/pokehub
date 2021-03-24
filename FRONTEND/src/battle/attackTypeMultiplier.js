/* eslint-disable no-debugger */
export default function attackTypeMultiplier(attack, deffendant) {
  const attackingType = attack.type.toUpperCase();
  const targetType = deffendant.types.map((type) => type.toUpperCase());

  const modifiers = [];

  targetType.forEach((type) => {
    if (attackingType === 'BUG') {
      if (type === 'DARK' || type === 'GRASS' || type === 'PSYCHIC') {
        modifiers.push(2);
      }
      if (
        type === 'FAIRY'
        || type === 'FIGHTING'
        || type === 'FIRE'
        || type === 'FLYING'
        || type === 'GHOST'
        || type === 'POISON'
        || type === 'STEEL'
      ) {
        modifiers.push(0.5);
      }
    } else if (attackingType === 'DARK') {
      if (type === 'GHOST' || type === 'PSYCHIC') {
        modifiers.push(2);
      }
      if (type === 'DARK' || type === 'FAIRY' || type === 'FIGHTING') {
        modifiers.push(0.5);
      }
    } else if (attackingType === 'DRAGON') {
      if (type === 'DRAGON') {
        modifiers.push(2);
      }
      if (type === 'STEEL') {
        modifiers.push(0.5);
      }
      if (type === 'FAIRY') {
        modifiers.push(0);
      }
    } else if (attackingType === 'ELECTRIC') {
      if (type === 'FLYING' || type === 'WATER') {
        modifiers.push(2);
      }
      if (type === 'DRAGON' || type === 'ELECTRIC' || type === 'GRASS') {
        modifiers.push(0.5);
      }
      if (type === 'GROUND') {
        modifiers.push(0);
      }
    } else if (attackingType === 'FAIRY') {
      if (type === 'DARK' || type === 'DRAGON' || type === 'FIGHTING') {
        modifiers.push(2);
      }
      if (type === 'FIRE' || type === 'POISON' || type === 'STEEL') {
        modifiers.push(0.5);
      }
    } else if (attackingType === 'FIGHTING') {
      if (
        type === 'DARK'
        || type === 'ICE'
        || type === 'NORMAL'
        || type === 'ROCK'
        || type === 'STEEL'
      ) {
        modifiers.push(2);
      }
      if (
        type === 'BUG'
        || type === 'FAIRY'
        || type === 'FLYING'
        || type === 'POISON'
        || type === 'PSYCHIC'
      ) {
        modifiers.push(0.5);
      }
      if (type === 'GHOST') {
        modifiers.push(0);
      }
    } else if (attackingType === 'FIRE') {
      if (
        type === 'BUG'
        || type === 'GRASS'
        || type === 'ICE'
        || type === 'STEEL'
      ) {
        modifiers.push(2);
      }
      if (
        type === 'DRAGON'
        || type === 'FIRE'
        || type === 'ROCK'
        || type === 'WATER'
      ) {
        modifiers.push(0.5);
      }
    } else if (attackingType === 'FLYING') {
      if (type === 'BUG' || type === 'FIGHTING' || type === 'GRASS') {
        modifiers.push(2);
      }
      if (type === 'ELECTRIC' || type === 'ROCK' || type === 'STEEL') {
        modifiers.push(0.5);
      }
    } else if (attackingType === 'GHOST') {
      if (type === 'GHOST' || type === 'PSYCHIC') {
        modifiers.push(2);
      }
      if (type === 'DARK') {
        modifiers.push(0.5);
      }
      if (type === 'NORMAL') {
        modifiers.push(0);
      }
    } else if (attackingType === 'GRASS') {
      if (type === 'GROUND' || type === 'ROCK' || type === 'WATER') {
        modifiers.push(2);
      }
      if (
        type === 'BUG'
        || type === 'DRAGON'
        || type === 'FIRE'
        || type === 'FLYING'
        || type === 'GRASS'
        || type === 'POISON'
        || type === 'STEEL'
      ) {
        modifiers.push(0.5);
      }
    } else if (attackingType === 'GROUND') {
      if (
        type === 'ELECTRIC'
        || type === 'FIRE'
        || type === 'POISON'
        || type === 'ROCK'
        || type === 'STEEL'
      ) {
        modifiers.push(2);
      }
      if (type === 'BUG' || type === 'GRASS') {
        modifiers.push(0.5);
      }
      if (type === 'FLYING') {
        modifiers.push(0);
      }
    } else if (attackingType === 'ICE') {
      if (
        type === 'DRAGON'
        || type === 'FLYING'
        || type === 'GRASS'
        || type === 'GROUND'
      ) {
        modifiers.push(2);
      }
      if (
        type === 'FIRE'
        || type === 'ICE'
        || type === 'STEEL'
        || type === 'WATER'
      ) {
        modifiers.push(0.5);
      }
    } else if (attackingType === 'NORMAL') {
      if (type === 'ROCK' || type === 'STEEL') {
        modifiers.push(0.5);
      }
      if (type === 'GHOST') {
        modifiers.push(0);
      }
    } else if (attackingType === 'POISON') {
      if (type === 'FAIRY' || type === 'GRASS') {
        modifiers.push(2);
      }
      if (
        type === 'POISON'
        || type === 'GROUND'
        || type === 'ROCK'
        || type === 'GHOST'
      ) {
        modifiers.push(0.5);
      }
      if (type === 'STEEL') {
        modifiers.push(0);
      }
    } else if (attackingType === 'PSYCHIC') {
      if (type === 'FIGHTING' || type === 'POISON') {
        modifiers.push(2);
      }
      if (type === 'PSYCHIC' || type === 'STEEL') {
        modifiers.push(0.5);
      }
      if (type === 'DARK') {
        modifiers.push(0);
      }
    } else if (attackingType === 'ROCK') {
      if (
        type === 'BUG'
        || type === 'FIRE'
        || type === 'FLYING'
        || type === 'ICE'
      ) {
        modifiers.push(2);
      }
      if (type === 'FIGHTING' || type === 'GROUND' || type === 'STEEL') {
        modifiers.push(0.5);
      }
    } else if (attackingType === 'STEEL') {
      if (type === 'FAIRY' || type === 'ICE' || type === 'ROCK') {
        modifiers.push(2);
      }
      if (
        type === 'ELECTRIC'
        || type === 'FIRE'
        || type === 'STEEL'
        || type === 'WATER'
      ) {
        modifiers.push(0.5);
      }
    } else if (attackingType === 'WATER') {
      if (type === 'FIRE' || type === 'GROUND' || type === 'ROCK') {
        modifiers.push(2);
      }
      if (type === 'DRAGON' || type === 'GRASS' || type === 'WATER') {
        modifiers.push(0.5);
      }
    }
    modifiers.push(1);
  });
  return modifiers.reduce((a, b) => a * b, 1);
}
