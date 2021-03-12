/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import '../../styles/header.scss';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
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
          <Button text="Login" classes="header__login" />
          <img
            src={websiteImages.headerPokeball}
            alt="pokeball"
            className="header__pokeball"
            onClick={() => setMenu(!menu)}
          />
        </div>
      </header>
      {menu && (<Menu />)}
    </>
  );
}
