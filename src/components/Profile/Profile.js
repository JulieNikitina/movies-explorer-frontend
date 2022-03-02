import './Profile.css';
import React from "react";
import {Link} from "react-router-dom";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header isLoggedIn={true}/>
      <section className="profile">
        <div className="profile__content">
          <h1 className="profile__title">Привет, Юля! </h1>
          <ul className="profile__info">
            <li className="profile__info-row">
              <div className="profile__row-block profile__row-block_bold">Имя</div>
              <div className="profile__row-block">Юля</div>
            </li>
            <li className="profile__info-row">
              <div className="profile__row-block profile__row-block_bold">email</div>
              <div className="profile__row-block">test@email.ru</div>
            </li>
          </ul>
        </div>
        <div className="profile__links">
          <Link to="/" className="profile__link">Редактировать</Link>
          <Link to="/" className="profile__link profile__link_red ">Выйти из аккаунта</Link>
        </div>
      </section>
    </>

  );
}

export default Profile;
