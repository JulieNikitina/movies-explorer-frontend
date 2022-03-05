import './Login.css';
import React from "react";
import {Link} from "react-router-dom";
import logoPath from '../../images/header/logo.svg';


function Login() {
  return (
    <>
      <div className="form__container">
        <div className="form__logo-container">
          <img className="form__logo" src={logoPath} alt="Лого"/>
        </div>
        <h2 className="form__title">Рады видеть!</h2>
        <form className="form" name="login-form" noValidate>
          <div className="form__field-group">
            <div className="form__field">
              <label className="form__label">E-mail</label>
              <input id="email-input" required className="form__input-field" type="email" name="email"
                     placeholder="email"
                     minLength="4" maxLength="40"/>
              <span className="email-input-error form__input-error"/>
            </div>
            <div className="form__field">
              <label className="form__label">Пароль</label>
              <input id="password-input" required className="form__input-field form__input-field_white" type="password"
                     name="password"
                     placeholder="password" minLength="8" maxLength="200"/>
              <span className="password-input-error form__input-error"/>
            </div>
          </div>
          <div className="form__footer">
            <button className="form__submit-button" type="submit">Войти</button>
            <div className="form__span-block">
              <span className="form__span">Еще не зарегистрированы?</span>
              <Link to="/sign-up" className="form__link">Регистрация</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
