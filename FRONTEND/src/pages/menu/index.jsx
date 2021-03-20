import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/menu.scss';

export default function MenuComponent() {
  return (
    <div className="menu__dropdown ">
      <div>
        <span>POKéHUB </span>
        <span>
          <span>gotta catch em all!</span>
        </span>
      </div>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/pokedex">Pokédex</Link>
        </li>
        <li>
          <Link to="/team-creator">Team creator</Link>

        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </div>
  );
}
