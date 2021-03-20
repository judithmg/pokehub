/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserInfo } from '../../redux/actions/userActions';

import { createTeam, submitTeam } from '../../redux/actions/teamCreatorActions';

import { useAuth } from '../../context/AuthContext';

import { pokemonSprites } from '../../constants/images';
import Ditto from '../icons/Ditto';
import '../../styles/team-creator.scss';

import PokemonListTeam from './PokemonListTeam';

export function TeamCreatorComponent({
  actions,
  teams,
  newTeam,
  user,
}) {
  const { currentUser } = useAuth();
  const useremail = currentUser.email;
  const [teamName, setTeamName] = useState(newTeam.id);
  const history = useHistory();

  useEffect(() => {
    if (!user?.email) {
      actions.getUserInfo(useremail);
    }
  }, [user?.length]);

  function handleSubmit() {
    actions.submitTeam(newTeam, user, teamName);
    history.push('/teams');
  }

  return (
    <section data-aos="fade-in" className="team-creator__container">
      {teams
          && (
          <div className="team-creator__creator">
            {!newTeam.id && <button type="button" className="teamcreator__btn" onClick={() => actions.createTeam()}>new team</button>}

            {newTeam.id && newTeam.pokemons.map((poke) => (
              poke.num
                ? (<img alt="pokemon ico" src={`${pokemonSprites.httpIcon}${poke.num}.png`} key={Math.random()} />
                )
                : (
                  <Ditto fill="#458cdd" key={Math.random()} value={poke.id} />
                )
            ))}

            {newTeam.id && (
              <form onSubmit={() => handleSubmit()}>
                <input type="text" placeholder="team name" onChange={(event) => setTeamName(event.target.value)} required />
                <input type="submit" value="add team" />
              </form>
            )}
          </div>
          )}
      <PokemonListTeam />
    </section>
  );
}

export function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    newTeam: state.teamsReducer.newTeam,
    user: state.userReducer.user,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      createTeam,
      submitTeam,
      getUserInfo,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamCreatorComponent);
