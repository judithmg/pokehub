import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modifyOnePokemon } from '../../redux/actions/teamCreatorActions';

function mapLearnset(poke) {
  return poke.learnset && poke.learnset.map((move) => (
    <option>
      {move[0]?.name}
    </option>
  ));
}

export function TeamMovesComponent({
  actions, pokemon, team, user, teams,
}) {
  const [move0, setMove0] = useState(pokemon?.moveset[0]?.name || '');
  const [move1, setMove1] = useState(pokemon?.moveset[1]?.name || '');
  const [move2, setMove2] = useState(pokemon?.moveset[2]?.name || '');
  const [move3, setMove3] = useState(pokemon?.moveset[3]?.name || '');

  function handleSubmit() {
    actions.modifyOnePokemon(team,
      teams,
      user,
      [
        {
          name: move0,
        },
        {
          name: move1,
        },
        {
          name: move2,
        },
        {
          name: move3,
        },
      ],
      pokemon);
  }

  return (
    <div>
      <div className="team-pokemon__moves pokemon__info">
        <h2>Moves</h2>
        <select
          onChange={(e) => setMove0(e.target.value)}
          defaultValue={pokemon?.moveset[0]?.name}
        >
          {mapLearnset(pokemon)}
        </select>
        <select
          onChange={(e) => setMove1(e.target.value)}
          defaultValue={pokemon?.moveset[1]?.name}
        >
          {mapLearnset(pokemon)}
        </select>
        <select
          onChange={(e) => setMove2(e.target.value)}
          defaultValue={pokemon?.moveset[2]?.name}
        >
          {mapLearnset(pokemon)}
        </select>
        <select
          onChange={(e) => setMove3(e.target.value)}
          defaultValue={pokemon?.moveset[3]?.name}
        >
          {mapLearnset(pokemon)}
        </select>
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="btn-teammoves"
        >
          SAVE
        </button>
      </div>

    </div>
  );
}

TeamMovesComponent.propTypes = {
  actions: PropTypes.shape({
    modifyOnePokemon: PropTypes.func,
  }).isRequired,
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    moveset: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    learnset: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      category: PropTypes.string,
      desc: PropTypes.string,
      shortDesc: PropTypes.string,
      pp: PropTypes.number,
      basePower: PropTypes.number,
      type: PropTypes.string,
      accuracy: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
      ])),
    }))),
  }).isRequired,
  team: PropTypes.shape({
    id: PropTypes.string,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
    teams: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,

};

function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    team: state.teamsReducer.team,
    user: state.userReducer.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      modifyOnePokemon,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamMovesComponent);
