import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserInfo } from '../../redux/actions/userActions';

import { createTeam, submitTeam } from '../../redux/actions/teamCreatorActions';

import { useAuth } from '../../context/AuthContext';

import { pokemonSprites } from '../../constants/images';
import { Ditto } from '../icons';
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
  }, [user]);

  function handleSubmit() {
    actions.submitTeam(newTeam, user, teamName);
    history.push('/teams');
  }

  return (
    <section data-aos="fade-in" className="team-creator__container">
      {teams
          && (
          <div data-aos="fade-in" className="team-creator__creator">
            <div>
              {!newTeam.id && <button type="button" className="teamcreator__btn" onClick={() => actions.createTeam()}>new team!</button>}

              {newTeam.id && newTeam.pokemons.map((poke) => (
                poke.num
                  ? (<img alt="pokemon ico" src={`${pokemonSprites.httpIcon}${poke.num}.png`} key={Math.random()} />
                  )
                  : (
                    <Ditto fill="#458cdd" key={Math.random()} value={poke.id} />
                  )
              ))}
            </div>

            {newTeam.id && (
              <form onSubmit={() => handleSubmit()}>
                <input type="text" placeholder="team name" onChange={(event) => setTeamName(event.target.value)} required />
                <input type="submit" value="create team!" />
              </form>
            )}
          </div>
          )}
      {newTeam.id && <PokemonListTeam />}

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

TeamCreatorComponent.propTypes = {
  newTeam: PropTypes.shape({
    id: PropTypes.number,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  actions: PropTypes.shape({
    createTeam: PropTypes.func.isRequired,
    submitTeam: PropTypes.func.isRequired,
    getUserInfo: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,

};
