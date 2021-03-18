/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo } from '../../redux/actions/userActions';
import { useAuth } from '../../context/AuthContext';
import { createTeam, addPokemonToTeam, submitTeam } from '../../redux/actions/teamCreatorActions';
import { loadTeams } from '../../redux/actions/teamManagerActions';
import {
  loadPokedex,
} from '../../redux/actions/pokedexActions';

import { pokemonSprites } from '../../constants/images';
import Ditto from '../icons/Ditto';

import '../../styles/team-creator.scss';

export function TeamCreatorComponent({
  actions,
  teams,
  newTeam,
  pokedex,
  user,
}) {
  const { currentUser } = useAuth();
  const useremail = currentUser.email;

  useEffect(() => {
    if (!user.email) {
      actions.getUserInfo(useremail);
    }
  }, [user?.length]);

  useEffect(() => {
    if (!teams?.length) {
      actions?.loadTeams();
    }
  }, [teams?.length]);

  return (
    <section className="team-creator__container">
      {teams
          && (
          <div className="team-creator__creator">
            {!newTeam.id && <button type="button" onClick={() => actions.createTeam()}>new team</button>}

            {newTeam.id && newTeam.pokemons.map((poke) => (
              poke.num
                ? (<img alt="pokemon ico" src={`${pokemonSprites.httpIcon}${poke.num}.png`} key={Math.random()} />
                )
                : (
                  <Ditto fill="#458cdd" key={Math.random()} value={poke.id} />
                )
            ))}

            {newTeam.id && <button type="button" onClick={() => actions.submitTeam(newTeam, user)}>add team</button>}
          </div>
          )}
      <div className="team-creator__pokelist">
        {[...Array(893)].map((x, i) => (
          <img
            alt="pokemon icon"
            className="team-creator__pokeico"
            id={i + 1}
            key={Math.random()}
            src={`${pokemonSprites.httpIcon}${i + 1}.png`}
            onClick={(e) => actions.addPokemonToTeam(e.currentTarget.id,
              pokedex)}
          />
        ))}
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    newTeam: state.teamsReducer.newTeam,
    pokedex: state.pokedexReducer.pokedex,
    user: state.userReducer.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      createTeam,
      loadTeams,
      addPokemonToTeam,
      submitTeam,
      loadPokedex,
      getUserInfo,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamCreatorComponent);
