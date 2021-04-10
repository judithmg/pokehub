import React from 'react';
import '../../styles/main.scss';
import { websiteImages } from '../../constants/images';

export default function MainComponent() {
  return (
    <img
      className="main__logo --desktop"
      src={websiteImages.headerLogo}
      alt="Header logo"
    />
  );
}
