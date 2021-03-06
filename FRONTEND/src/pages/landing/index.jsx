/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Menu from '../shared/menu';
import '../../styles/landing.scss';

export default function LandingComponent() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <img
        className="main__logo"
        src="https://trello-attachments.s3.amazonaws.com/6041f83090af1242e84592ce/922x400/955ef6e7ad86fde9fc7ef8772a7f7596/pokeshelfdrib.png"
        alt="Header logo"
        onClick={() => setMenu(!menu)}
      />
      {setMenu && <Menu />}
    </>
  );
}
