/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTeam, addPokemonToTeam, submitTeam } from '../../redux/actions/teamCreatorActions';
import { loadTeams } from '../../redux/actions/teamManagerActions';
import {
  loadPokedex,
  loadAbilities,
  loadMoves,
  loadLearnsets,
} from '../../redux/actions/pokedexActions';
import { pokemonSprites } from '../../constants/images';
import Ditto from '../icons/Ditto';

export function CreateTeamComponent({
  actions,
  teams,
  newTeam,
  pokedex,
  abilities,
  moves,
  learnsets,

}) {
  useEffect(() => {
    if (!teams?.length) {
      actions?.loadTeams();
    }
  }, [teams?.length]);

  useEffect(() => {
    if (!pokedex.length) {
      actions.loadPokedex();
    }
  }, [pokedex.length]);

  useEffect(() => {
    if (!abilities.length) {
      actions.loadAbilities();
    }
  }, [abilities.length]);
  useEffect(() => {
    if (!moves.length) {
      actions.loadMoves();
    }
  }, [moves.length]);
  useEffect(() => {
    if (!learnsets.length) {
      actions.loadLearnsets();
    }
  }, [learnsets.length]);
  return (
    <>
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

            {newTeam.id && <button type="button" onClick={() => actions.submitTeam()}>add team</button>}
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
              pokedex,
              moves,
              learnsets,
              abilities)}
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
    pokedex: state.pokedexReducer.pokedex,
    abilities: state.pokedexReducer.abilities,
    moves: state.pokedexReducer.moves,
    learnsets: state.pokedexReducer.learnsets,
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
      loadAbilities,
      loadMoves,
      loadLearnsets,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeamComponent);
