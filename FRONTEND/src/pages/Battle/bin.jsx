/* eslint-disable */
import React, { useEffect } from "react";
import attackTypeMultiplier from "../../battle/attackTypeMultiplier";
import getAttackType from "../../battle/getAttackType";
import calculatePokemonStats from "../../battle/calculatePokemonStats";
import calculateAttackPower from "../../battle/calculateAttackPower";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadTeams } from "../../redux/actions/teamManagerActions";
import { getUserInfo } from "../../redux/actions/userActions";
import { useAuth } from "../../context/AuthContext";

import { pokemonSprites } from "../../constants/images";

export function BattleComponent({
  teams,
  actions,
  user,
  moves,
  abilities,
  learnsets,
}) {
  const { currentUser } = useAuth();
  const useremail = currentUser.email;

  useEffect(() => {
    if (!user.email) {
      actions.getUserInfo(useremail);
    }
  }, [user?.length]);

  useEffect(() => {
    actions.loadTeams(user?._id);
  }, [teams?.length, user?.length, user.email]);

  teams?.sort((a, b) => a.id - b.id);

  const pokemon1 = {
    name: "Muk",
    moveset: { name: "dig" },
  };
  const pokemon2 = {
    name: "Lapras",
    moveset: { name: "blizzard" },
    types: ["water"],
  };

  const attackid = "thunder";
  const move = moves.find((move) => move.id === attackid);

  class Attack {
    constructor(attacker, defendant) {
      this.attacker = attacker;
      this.defendant = defendant;
    }
  }
  const attack = new Attack(pokemon1, pokemon2);

  const attack2 = attackTypeMultiplier(move, pokemon2);

  return (
    teams.length &&
    moves.length && (
      <div className="battle__container">
        <div className="battle__enemy">
          <img
            src={`${pokemonSprites.httpFrontSprite}/${teams[0]?.pokemons[0]?.num}.png`}
            alt="pokemon sprite"
          />
          <span>{teams[0]?.pokemons[0]?.name}</span>
          Lvl 100
          {teams[0]?.pokemons[0]?.pp}
          HP{" "}
          {teams[0]?.pokemons[0]?.baseStats &&
            calculatePokemonStats(teams[0]?.pokemons[0]).hp}
        </div>
        <div className="battle__player">
          <img
            src={`${pokemonSprites.httpFrontSprite}/back/${teams[0]?.pokemons[3]?.num}.png`}
            alt="pokemon sprite"
          />
          {teams[0]?.pokemons[3]?.name}
          Lvl 100
          {teams[0]?.pokemons[3]?.pp}
          HP{" "}
          {teams[0]?.pokemons[0]?.baseStats &&
            calculatePokemonStats(teams[0]?.pokemons[3]).hp}
        </div>
        <div className="battle__text">
          {moves.length && (
            <p>
              PKM ATK{" "}
              {
                getAttackType(teams[0]?.pokemons[0]?.moveset[0]?.name, moves)
                  .basePower
              }
            </p>
          )}
          {calculateAttackPower({
            category: getAttackType(teams[0]?.pokemons[0]?.moveset[0]?.name, moves)
              .category,
            power: getAttackType(teams[0]?.pokemons[0]?.moveset[0]?.name, moves)
              .basePower,
            level: 100,
            stats: calculatePokemonStats(teams[0]?.pokemons[3]),
          },1)}
        </div>
      </div>
    )
  );
}

export function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    user: state.userReducer.user,
    moves: state.pokedexReducer.moves,
    abilities: state.pokedexReducer.abilities,
    learnsets: state.pokedexReducer.learnsets,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadTeams,
        getUserInfo,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleComponent);
