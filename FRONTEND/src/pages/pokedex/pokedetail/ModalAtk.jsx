import React from 'react';

import ButtonType from '../../shared/ButtonType';
import '../../../styles/modal-atk.scss';

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
      <div className={`pokemove__title ${move.type.toLowerCase()}`}>{move.name.toUpperCase()}</div>
      <div className="pokemove__info">
        <div className="pokemove__description">{move.desc}</div>
        <div className="pokemove__type">
          <ButtonType type={move.type.toLowerCase()} text={move.type}> </ButtonType>

        </div>
        <div className="pokemove__stats">

          <strong>
            Category:
            {' '}
            <span className="pokemove__category">
              aaa
            </span>

          </strong>

          <strong>
            Accuracy:
            {' '}
            <span className="pokemove__accuracy">{move.accuracy}</span>
          </strong>

          <strong>
            PP:
            {' '}
            <span className="pokemove__pp">{move.pp}</span>
          </strong>

        </div>
      </div>
    </div>
  );
}
