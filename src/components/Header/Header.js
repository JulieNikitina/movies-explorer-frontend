import './Header.css';

import logoPath from '../../images/header/logo.png';
import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
  // const navigate = useNavigate();

  // function signOut() {
  //   localStorage.removeItem('jwt');
  //   props.handleLogout();
  //   navigate('/sign-in');
  // }

  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Лого"/>
      <div className="header__auth">
        {props.isLoggedIn
          ?
          <>
            {/*<div className="header__email">{props.currentUserEmail}</div>*/}
            {/*<Link to="/sign-in" className="header__link" onClick={signOut}> Выйти </Link>*/}
            <Link to="/sign-in" className="header__link"> Выйти </Link>
          </>
          :
          <>
            {/*{window.location.pathname === "/sign-up" && <Link to="/sign-in" className="header__link"> Регистрация </Link>}*/}
            {/*{window.location.pathname === "/sign-in" &&*/}
            <Link to="/sign-up" className="header__link"> Регистрация </Link>
            <button className="header__auth-button"> Войти </button>
          </>
        }
      </div>

    </header>
  );
}

export default Header;
