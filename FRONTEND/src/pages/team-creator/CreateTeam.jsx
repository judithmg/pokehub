/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTeam, addPokemonToTeam } from '../../redux/actions/teamCreatorActions';
import { loadTeams } from '../../redux/actions/teamManagerActions';

import { pokemonSprites } from '../../constants/images';
import Ditto from '../icons/Ditto';

export function CreateTeamComponent({ actions, teams, newTeam }) {
  useEffect(() => {
    if (!teams?.length) {
      actions?.loadTeams();
    }
  }, [teams?.length]);

  return (
    <>
      {teams
          && (
          <div className="team-creator__creator">
            <button type="button" onClick={() => actions.createTeam()}>create team</button>
            {newTeam.id && newTeam.pokemons.map((poke) => (
              poke.num
                ? (<img alt="pokemon ico" src={`${pokemonSprites.httpIcon}${poke.num}.png`} />
                )
                : (
                  <Ditto fill="#458cdd" value={poke.id} />
                )
            ))}

          </div>
          )}
      <div className="team-creator__pokelist">
        {[...Array(893)].map((x, i) => (
          <img
            alt="pokemon icon"
            className="team-creator__pokeico"
            id={i}
            src={`${pokemonSprites.httpIcon}${i + 1}.png`}
            onClick={(e) => actions.addPokemonToTeam(e.currentTarget.id)}
          />
        ))}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    newTeam: state.teamsReducer.newTeam,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      createTeam,
      loadTeams,
      addPokemonToTeam,

    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeamComponent);
