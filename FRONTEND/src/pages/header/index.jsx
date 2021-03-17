import React, { useState } from 'react';
import '../../styles/header.scss';
import { Link } from 'react-router-dom';
import Menu from '../menu';
import Button from '../shared/ButtonComponent';

import { websiteImages } from '../../constants/images';

export default function HeaderComponent() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header>
        <Link to="/">
          <img
            src={websiteImages.header}
            className="header__logo"
            alt="header logo"
          />
        </Link>
        <div className="header--right">
          <Link to="/login"><Button text="Login" classes="header__login" /></Link>
          <Link to="/profile"><Button text="Profile" classes="header__login" /></Link>
          <Link to="/"><Button text="logout" classes="header__login" /></Link>
          <button type="button" className="header__button-menu" onClick={() => setMenu(!menu)}>
            <img
              src={websiteImages.headerPokeball}
              alt="pokeball"
              className="header__pokeball"
            />
          </button>
        </div>
      </header>
      {menu && (<Menu />)}
    </>
  );
}
