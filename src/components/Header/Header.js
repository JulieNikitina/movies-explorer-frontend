import './Header.css';

import logoPath from '../../images/header/logo.svg';
import menuLogoPath from '../../images/header/menu.svg';

import React from "react";
import {Link} from "react-router-dom";
import ProfileButton from "../ProfileButton/ProfileButton";

function Header(props) {

  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Лого"/>

      {props.isLoggedIn
        ?
        <>
          <div className="header__links">
            <Link to="/movies" className="header__link"> Фильмы </Link>
            <Link to="/saved-movies" className="header__link"> Сохраненные фильмы </Link>
            <ProfileButton/>
          </div>
          {/* тут нужно по клику открывать меню а не навигироваться*/}
          <Link to="/profile" className="header__menu-button">
            <button className="header__menu-button">
              <img className="header__menu-logo" src={menuLogoPath}/>
            </button>
          </Link>
        </>
        :
        <div className="header__creds">
          <Link to="/sign-up" className="header__link"> Регистрация </Link>
          <button className="header__auth-button"> Войти</button>
        </div>
      }
    </header>
  );
}

export default Header;
