import React from 'react';
import ButtonType from '../../shared/ButtonType';

export default function ModalMoveComponent() {
  const move = {
    num: 109,
    accuracy: 100,
    basePower: 0,
    category: 'Status',
    desc: 'Causes the target to become confused.',
    shortDesc: 'Confuses the target.',
    id: 'confuseray',
    name: 'Confuse Ray',
    pp: 10,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1 },
    volatileStatus: 'confusion',
    secondary: false,
    target: 'normal',
    type: 'Ghost',
    zMoveBoost: { spa: 1 },
    contestType: 'Clever',
  };

  return (
    <div className="pokemove__modal">
      <div className="pokemove__title">{move.name}</div>
      <div className="pokemove__info">
        <div className="pokemove__description">{move.desc}</div>
        <div className="pokemove__type" />
        <div className="pokemove__stats">
          <em>Category: </em>
          <span className="pokemove__category">
            <ButtonType type={move.type.toLowerCase()} text={move.type}> </ButtonType>
          </span>
          <em>Accuracy: </em>
          <span className="pokemove__accuracy">{move.accuracy}</span>
          <em>PP: </em>
          <span className="pokemove__pp">{move.pp}</span>

        </div>
      </div>
    </div>
  );
}
