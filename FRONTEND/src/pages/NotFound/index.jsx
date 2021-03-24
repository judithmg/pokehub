import React from 'react';
import '../../styles/notfound.scss';
import { Link } from 'react-router-dom';
import { errorImg } from '../../constants/images';

export default function NotFound() {
  return (
    <section className="notfound__container">

      <Link to="/"><button type="button">Go to safety!</button></Link>
      <img
        alt="error img"
        src={errorImg}
      />
    </section>
  );
}
