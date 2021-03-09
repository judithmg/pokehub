import React from 'react';
import '../../styles/footer.scss';

export default function FooterComponent() {
  return (
    <footer>
      <span>

        Created by
        <a href="https://github.com/judithmg">
          {' '}
          Judith Martínez
        </a>
        . Pokémon and Pokémon character names are trademarks of Nintendo.
      </span>
    </footer>
  );
}
