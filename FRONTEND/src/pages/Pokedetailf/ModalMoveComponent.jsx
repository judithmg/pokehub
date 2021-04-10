import React from 'react';
import PropTypes from 'prop-types';

import ButtonType from '../shared/ButtonType';
import '../../styles/modal-atk.scss';

export default function ModalMoveComponent({ move }) {
  return (
    <div className="pokemove__modal">
      <div className={`pokemove__title ${move?.type.toLowerCase()}`}>{move?.name.toUpperCase()}</div>
      <div className="pokemove__info">
        <div className="pokemove__description">{move?.desc || move?.shortDesc}</div>
        <div className="pokemove__type">
          <ButtonType type={move?.type.toLowerCase()} text={move?.type}> </ButtonType>
        </div>
        <div className="pokemove__stats">
          <strong>
            {'Category: '}
            <span className="pokemove__category">
              {move?.category}
            </span>
          </strong>
          <strong>
            {'PP: '}
            <span className="pokemove__pp">{move?.pp}</span>
          </strong>

        </div>
      </div>
    </div>
  );
}

ModalMoveComponent.propTypes = {
  move: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    desc: PropTypes.string,
    shortDesc: PropTypes.string,
    pp: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
};
