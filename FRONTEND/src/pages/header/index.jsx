/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import '../../styles/header.scss';
import { Link } from 'react-router-dom';
import Menu from '../menu';
import Button from '../shared/ButtonComponent';

export default function HeaderComponent() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header>
        <Link to="/">
          <img
            src="https://trello-attachments.s3.amazonaws.com/6041f83090af1242e84592ce/389x127/0912ffc4b04806362cd149c9a1064112/logo-header.png"
            className="header__logo"
            alt="header logo"
          />
        </Link>
        <div className="header--right">
          <Button text="Login" classes="header__login" />
          <img
            src="https://trello-attachments.s3.amazonaws.com/6041f83090af1242e84592ce/100x100/4f2a7611af73115d6ef54a5815b846a5/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif"
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
