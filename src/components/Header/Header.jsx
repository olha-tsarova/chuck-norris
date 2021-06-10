/* eslint-disable arrow-body-style */
import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <a className="header__link" href="/">
        <img
          alt="logo"
          src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
          className="header__link--logo"
        />
        <span className="header__link--title">
          Chuck Norris
        </span>
      </a>
    </header>
  );
};

export default Header;
